'use server';

// Using your existing global Prisma connection!
import { prisma } from '@/app/lib/prisma';

export async function getFacultyProfileData(rawAuthorId) {
  try {
    if (!rawAuthorId) {
      return { success: false, error: 'No author ID was provided.' };
    }

    const facultyId = String(rawAuthorId).trim();

    // 1. Fetch the Faculty Profile (to verify existence and get ORCID)
    const profile = await prisma.facultyProfile.findUnique({
      where: { id: facultyId }
    });

    if (!profile) {
      return { success: false, error: 'Faculty profile not found.' };
    }

    // 2. Fetch all linked publications through the PublicationAuthor join table
    const authorLinks = await prisma.publicationAuthor.findMany({
      where: { facultyProfileId: facultyId },
      include: { 
        publication: true // This automatically joins all the paper data
      }
    });

    // 3. Extract the actual publication records from the join results
    const allPapers = authorLinks.map(link => link.publication);
    const approvedPublications = allPapers.filter(p => p.status === 'APPROVED');
    const pendingCount = allPapers.length - approvedPublications.length;

    // 4. Calculate metrics directly from our synced PostgreSQL data
    const totalCitations = allPapers.reduce((acc, p) => acc + (p.citationCount || 0), 0);
    const openAccessCount = allPapers.filter(p => p.isOpenAccess).length;

    return {
      success: true,
      authorId: facultyId,
      profile: profile,
      metrics: {
        totalWorks: allPapers.length,
        totalCitations: totalCitations,
        openAccessCount: openAccessCount,
        approvedForNaacCount: approvedPublications.length,
        pendingCount: pendingCount,
      },
      approvedPublications,
      allPapers,
    };
  } catch (error) {
    console.error('Error loading faculty profile:', error);
    return { success: false, error: error.message };
  }
}