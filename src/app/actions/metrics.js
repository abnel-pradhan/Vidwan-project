'use server';

import { prisma } from '@/app/lib/prisma';

export async function getLiveMetrics() {
  try {
    const facultyCount = await prisma.facultyProfile.count();

    // Fetch approved papers, ordered by citations for the "Top Papers" section
    const approvedPapers = await prisma.publication.findMany({
      where: { status: 'APPROVED' },
      orderBy: { citationCount: 'desc' },
      include: {
        authors: {
          include: { facultyProfile: true }
        }
      }
    });

    const publicationCount = approvedPapers.length;
    const totalCitations = approvedPapers.reduce((sum, paper) => sum + (paper.citationCount || 0), 0);

    // Format the top 2 papers
    const topPapers = approvedPapers.slice(0, 2).map(paper => {
      const authorNames = paper.authors.map(a => a.facultyProfile.fullName).join(', ');
      return {
        title: paper.title,
        authors: authorNames || 'Unknown Author',
        citations: paper.citationCount || 0,
      };
    });

    // Fetch all departments and count their associated faculty profiles
    const dbDepartments = await prisma.department.findMany({
      include: {
        _count: { select: { facultyProfiles: true } }
      }
    });

    const departments = dbDepartments.map(dept => ({
      name: dept.name,
      faculty: dept._count.facultyProfiles
    }));

    return {
      facultyCount,
      publications: publicationCount,
      citations: totalCitations,
      patents: 88, // Static placeholder until Patent module is built
      topPapers,
      departments
    };
  } catch (error) {
    console.error("Error fetching live metrics:", error);
    return null; 
  }
}