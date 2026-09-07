'use server';

import { prisma } from '@/app/lib/prisma';

/**
 * Step 1: Search OpenAlex for an author by name or ORCID
 */
export async function searchOpenAlexAuthor(query) {
  try {
    const res = await fetch(
      `https://api.openalex.org/authors?search=${encodeURIComponent(query)}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error('Failed to fetch author from OpenAlex');
    
    const data = await res.json();
    return {
      success: true,
      authors: (data.results || []).map((author) => ({
        id: author.id, 
        displayName: author.display_name,
        worksCount: author.works_count,
        citedByCount: author.cited_by_count,
        lastKnownInstitution: author.last_known_institutions?.[0]?.display_name || 'N/A',
        orcid: author.orcid || null,
      })),
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Step 2: Fetch and format all publications for a specific OpenAlex Author ID.
 */
export async function fetchFacultyPapers(authorOpenAlexId) {
  try {
    const cleanId = authorOpenAlexId.replace('https://openalex.org/', '');
    
    const res = await fetch(
      `https://api.openalex.org/works?filter=author.id:${cleanId}&sort=publication_year:desc&per-page=50`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error('Failed to fetch works from OpenAlex');

    const data = await res.json();

    const formattedPapers = (data.results || []).map((work) => ({
      openAlexId: work.id,
      title: work.title || 'Untitled Work',
      publicationYear: work.publication_year || new Date().getFullYear(),
      doi: work.doi || null,
      journalName: work.primary_location?.source?.display_name || null,
      publisher: work.primary_location?.source?.host_organization_name || null,
      citationCount: work.cited_by_count || 0,
      isOpenAccess: work.open_access?.is_oa || false,
      openAccessUrl: work.open_access?.oa_url || null,
      landingPageUrl: work.primary_location?.landing_page_url || work.doi || null,
    }));

    return { success: true, count: data.meta?.count || formattedPapers.length, papers: formattedPapers };
  } catch (error) {
    return { success: false, error: error.message, papers: [] };
  }
}

/**
 * Step 3: Save the fetched paper into our database for Faculty Approval
 */
export async function saveIngestedPaper(paperData, facultyProfileId) {
  try {
    // Upsert ensures we don't create duplicate papers if ingested twice
    const publication = await prisma.publication.upsert({
      where: { openAlexId: paperData.openAlexId },
      update: {
        citationCount: paperData.citationCount, // Update citations if it already exists
      },
      create: {
        openAlexId: paperData.openAlexId,
        title: paperData.title,
        publicationYear: paperData.publicationYear,
        doi: paperData.doi,
        journalName: paperData.journalName,
        publisher: paperData.publisher,
        citationCount: paperData.citationCount,
        isOpenAccess: paperData.isOpenAccess,
        status: 'PENDING_APPROVAL', // Goes to the faculty workspace for review
        authors: {
          create: {
            facultyProfileId: facultyProfileId,
            isCorresponding: false
          }
        }
      }
    });

    return { success: true, publication };
  } catch (error) {
    console.error("Error saving ingested paper:", error);
    return { success: false, error: error.message };
  }
}