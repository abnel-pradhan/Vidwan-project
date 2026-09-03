import { prisma } from '@/app/lib/prisma';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const departmentId = searchParams.get('departmentId');

    // Filter for APPROVED papers, optionally constrained by department
    const whereClause = { status: 'APPROVED' };
    if (departmentId && departmentId !== 'all') {
      whereClause.authors = {
        some: { facultyProfile: { departmentId: departmentId } }
      };
    }

    const papers = await prisma.publication.findMany({
      where: whereClause,
      include: {
        authors: {
          include: {
            facultyProfile: { include: { department: true } }
          }
        }
      },
      orderBy: { publicationYear: 'desc' }
    });

    // NAAC Criteria 3.4 standard headers
    let csv = 'Title,Authors,Department,Publication Year,Journal Name,Citations,DOI / Link\n';

    papers.forEach(paper => {
      const authors = paper.authors.map(a => a.facultyProfile.fullName).join('; ');
      const depts = [...new Set(paper.authors.map(a => a.facultyProfile.department.name))].join('; ');
      
      // Escape commas in titles and journal names for valid CSV formatting
      const title = `"${paper.title.replace(/"/g, '""')}"`;
      const journal = `"${(paper.journalName || 'N/A').replace(/"/g, '""')}"`;
      
      csv += `${title},"${authors}","${depts}",${paper.publicationYear},${journal},${paper.citationCount},${paper.doi || 'N/A'}\n`;
    });

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="NAAC_3.4_Publications_Report.csv"'
      }
    });
  } catch (error) {
    console.error("Export error:", error);
    return new Response('Failed to generate report', { status: 500 });
  }
}