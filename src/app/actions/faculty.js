'use server';

import { prisma } from '@/app/lib/prisma';
import { fetchFacultyPapers } from '@/app/actions/openalex';

/**
 * Retrieves a faculty member's profile and approved publications.
 */
export async function getFacultyProfileData(rawAuthorId) {
  try {
    if (!rawAuthorId) {
      return { success: false, error: 'No author ID was provided.' };
    }

    const cleanId = String(rawAuthorId).replace('https://openalex.org/', '').trim();
    const fullOpenAlexUrl = `https://openalex.org/${cleanId}`;

    // 1. Fetch approved publications from local PostgreSQL
    const pubModel = prisma?.publication || prisma?.Publication;
    let approvedPublications = [];
    let pendingCount = 0;

    if (pubModel) {
      approvedPublications = await pubModel.findMany({
        where: {
          openAlexId: { in: [cleanId, fullOpenAlexUrl] },
          status: 'APPROVED',
        },
        orderBy: { publicationYear: 'desc' },
      });

      pendingCount = await pubModel.count({
        where: {
          openAlexId: { in: [cleanId, fullOpenAlexUrl] },
          status: 'PENDING_APPROVAL',
        },
      });
    }

    // 2. Fetch live OpenAlex author metadata and all papers
    const openAlexData = await fetchFacultyPapers(cleanId);
    const papersList = openAlexData?.papers || [];

    // Calculate aggregated metrics
    const totalCitations = papersList.reduce(
      (acc, paper) => acc + (paper.citationCount || 0),
      0
    );
    const openAccessCount = papersList.filter(
      (paper) => paper.isOpenAccess
    ).length;

    return {
      success: true,
      authorId: cleanId,
      metrics: {
        totalWorks: openAlexData?.count || papersList.length,
        totalCitations,
        openAccessCount,
        approvedForNaacCount: approvedPublications.length,
        pendingCount,
      },
      approvedPublications,
      allPapers: papersList,
    };
  } catch (error) {
    console.error('Error loading faculty profile:', error);
    return { success: false, error: error.message };
  }
}