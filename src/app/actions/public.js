'use server';

import { prisma } from '@/app/lib/prisma';

export async function getPublicFacultyDirectory() {
  try {
    const faculty = await prisma.facultyProfile.findMany({
      include: {
        department: true,
        // Only fetch papers that the IQAC/Admin has explicitly approved
        publications: {
          where: { status: 'APPROVED' },
          select: { citationCount: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    // Calculate the total citations and papers for each professor
    return faculty.map(prof => {
      const totalPapers = prof.publications.length;
      const totalCitations = prof.publications.reduce((sum, pub) => sum + (pub.citationCount || 0), 0);
      
      return {
        id: prof.id,
        name: prof.name,
        department: prof.department?.name || 'Unassigned',
        totalPapers,
        totalCitations,
        orcid: prof.orcid
      };
    });
  } catch (error) {
    console.error("Error fetching public directory:", error);
    return [];
  }
}