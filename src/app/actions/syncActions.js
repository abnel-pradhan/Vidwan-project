'use server'

import { revalidatePath } from 'next/cache';

export async function triggerOpenAlexSync(facultyId, orcidId) {
    if (!facultyId || !orcidId) {
        return { success: false, message: "Missing Faculty ID or ORCID" };
    }

    try {
        // We fetch the FastAPI URL securely from the server side
        const response = await fetch(`${process.env.FASTAPI_URL}/api/sync/openalex`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.INTERNAL_API_SECRET}`
            },
            body: JSON.stringify({
                faculty_id: facultyId,
                orcid_id: orcidId
            })
        });

        if (!response.ok) {
            throw new Error(`FastAPI responded with status: ${response.status}`);
        }

        const data = await response.json();
        
        // Optional: Tells Next.js to refresh the dashboard cache 
        // so the new publications show up automatically!
        revalidatePath('/dashboard'); 
        revalidatePath(`/faculty/${facultyId}`);
        
        return { success: true, message: data.message };
        
    } catch (error) {
        console.error("Sync Error:", error);
        return { success: false, message: "Failed to connect to microservice." };
    }
}