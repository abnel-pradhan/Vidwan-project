'use server';

import { prisma } from '@/app/lib/prisma';

export async function getPublicFacultyDirectory() {
  try {
    const faculty = await prisma.facultyProfile.findMany({
      include: {
        department: true,
        // Fetch papers through the PublicationAuthor linking table
        authorships: {
          include: {
            publication: {
              select: {
                status: true,
                citationCount: true
              }
            }
          }
        }
      },
      orderBy: { fullName: 'asc' } // Sorted by the correct column name
    });

    return faculty.map(prof => {
      // Filter out only the papers that have an 'APPROVED' status
      const approvedPapers = prof.authorships
        .map(a => a.publication)
        .filter(pub => pub.status === 'APPROVED');

      const totalPapers = approvedPapers.length;
      const totalCitations = approvedPapers.reduce((sum, pub) => sum + (pub.citationCount || 0), 0);
      
      return {
        id: prof.id,
        name: prof.fullName, // Map back to 'name' for our UI
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