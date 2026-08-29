'use server';

import { prisma } from '@/app/lib/prisma';

export async function getLiveMetrics() {
  try {
    // 1. Count total registered faculty profiles
    const facultyCount = await prisma.facultyProfile.count();

    // 2. Fetch only 'APPROVED' publications to sum up citations
    const approvedPapers = await prisma.publication.findMany({
      where: { status: 'APPROVED' },
      select: { citationCount: true }
    });

    // 3. Calculate metrics
    const publicationCount = approvedPapers.length;
    const totalCitations = approvedPapers.reduce((sum, paper) => sum + (paper.citationCount || 0), 0);

    return {
      facultyCount: facultyCount,
      publications: publicationCount,
      citations: totalCitations,
      patents: 88 // Leaving this static until a Patent table is added to your schema
    };
  } catch (error) {
    console.error("Error fetching live metrics:", error);
    return null; // Gracefully fallback to defaults if database is unreachable
  }
}