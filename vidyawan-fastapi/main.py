import os
import httpx
import asyncpg
import uuid
from datetime import datetime, timezone
from fastapi import FastAPI, Security, HTTPException, BackgroundTasks
from fastapi.security.api_key import APIKeyHeader
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()
INTERNAL_API_SECRET = os.getenv("INTERNAL_API_SECRET", "fallback_secret")
DATABASE_URL = os.getenv("DATABASE_URL")

app = FastAPI(title="Vidyawan Microservice")
api_key_header = APIKeyHeader(name="Authorization", auto_error=False)

class SyncRequest(BaseModel):
    faculty_id: str
    orcid_id: str

async def verify_token(api_key: str = Security(api_key_header)):
    if not api_key:
        raise HTTPException(status_code=401, detail="Missing Token")
    token = api_key.replace("Bearer ", "").strip()
    if token != INTERNAL_API_SECRET:
        raise HTTPException(status_code=403, detail="Invalid Token")
    return token

async def fetch_openalex_data(faculty_id: str, orcid_id: str):
    """Fetches OpenAlex data and inserts it into PostgreSQL."""
    print(f"\n--> [SYNC STARTED] ORCID: {orcid_id}")
    url = f"https://api.openalex.org/works?filter=author.orcid:https://orcid.org/{orcid_id}"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url, timeout=15.0)
        
    if response.status_code != 200:
        print(f"--> [ERROR] OpenAlex API failed: {response.status_code}")
        return

    works = response.json().get("results", [])
    if not works:
        print("--> [INFO] No publications found.")
        return

    # Connect to PostgreSQL
    conn = await asyncpg.connect(DATABASE_URL)
    
    try:
        inserted_count = 0
        for work in works:
            pub_id = str(uuid.uuid4())
            title = work.get("title", "Untitled")
            pub_year = work.get("publication_year", datetime.utcnow().year)
            doi = work.get("doi")
            openalex_id = work.get("id")
            citation_count = work.get("cited_by_count", 0)
            is_oa = work.get("open_access", {}).get("is_oa", False)
            now = datetime.utcnow()

            # 1. Insert Publication (Update dynamic stats like citations if it already exists)
            record = await conn.fetchrow('''
                INSERT INTO "Publication" (
                    "id", "title", "publicationYear", "doi", "openAlexId", 
                    "citationCount", "isOpenAccess", "status", "createdAt", "updatedAt"
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, 'APPROVED', $8, $9)
                ON CONFLICT ("openAlexId") 
                DO UPDATE SET 
                    "citationCount" = EXCLUDED."citationCount",
                    "isOpenAccess" = EXCLUDED."isOpenAccess",
                    "updatedAt" = EXCLUDED."updatedAt"
                RETURNING id;
            ''', pub_id, title, pub_year, doi, openalex_id, citation_count, is_oa, now, now)

            actual_pub_id = record['id']

            # 2. Link Publication to Faculty Profile
            author_link_id = str(uuid.uuid4())
            await conn.execute('''
                INSERT INTO "PublicationAuthor" (
                    "id", "publicationId", "facultyProfileId"
                ) VALUES ($1, $2, $3)
                ON CONFLICT ("publicationId", "facultyProfileId") DO NOTHING;
            ''', author_link_id, actual_pub_id, faculty_id)
            
            inserted_count += 1

        print(f"--> [SUCCESS] Synced and linked {inserted_count} publications for Faculty: {faculty_id}\n")
    except Exception as e:
        print(f"--> [DATABASE ERROR] {e}")
    finally:
        await conn.close()

@app.post("/api/sync/openalex", dependencies=[Security(verify_token)])
async def trigger_openalex_sync(payload: SyncRequest, background_tasks: BackgroundTasks):
    """Endpoint triggered by Next.js to start the sync process."""
    background_tasks.add_task(fetch_openalex_data, payload.faculty_id, payload.orcid_id)
    return {"status": "processing", "message": "Database sync queued."}