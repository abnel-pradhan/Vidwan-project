'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

// 1. Fetch live data from OpenAlex
export async function fetchFacultyPapers(orcid) {
  try {
    const url = `https://api.openalex.org/works?filter=author.orcid:https://orcid.org/${orcid}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.results.map(work => ({
      openAlexId: work.id,
      title: work.title,
      publicationYear: work.publication_year,
      citationCount: work.cited_by_count || 0,
      doi: work.doi,
      journalName: work.primary_location?.source?.display_name || 'Unknown',
    }));
  } catch (error) {
    console.error("OpenAlex fetch error:", error);
    return [];
  }
}

// 2. Save the fetched papers to your database
export async function saveIngestedPaper(paperData, facultyId) {
  try {
    // Check if the paper already exists to prevent duplicates
    const existing = await prisma.publication.findUnique({
      where: { openAlexId: paperData.openAlexId }
    });

    if (existing) return { success: false, error: 'Paper already ingested.' };

    await prisma.publication.create({
      data: {
        title: paperData.title,
        publicationYear: paperData.publicationYear,
        citationCount: paperData.citationCount,
        doi: paperData.doi,
        openAlexId: paperData.openAlexId,
        journalName: paperData.journalName,
        status: 'PENDING_APPROVAL', // Queued for the Admin Dashboard
        authors: {
          create: {
            facultyProfileId: facultyId
          }
        }
      }
    });

    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Database save error:", error);
    return { success: false, error: 'Failed to save paper.' };
  }
}