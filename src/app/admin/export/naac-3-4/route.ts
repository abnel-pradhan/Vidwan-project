// src/app/admin/export/naac-3-4/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import ExcelJS from 'exceljs';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const departmentId = searchParams.get('departmentId');
    const academicYear = searchParams.get('academicYear');
    const format = searchParams.get('format') || 'xlsx';

    // 1. Build query filter
    const whereClause: any = {
      status: 'APPROVED',
    };

    if (academicYear && academicYear !== 'all') {
      const yearNum = parseInt(academicYear, 10);
      if (!isNaN(yearNum)) {
        whereClause.publicationYear = yearNum;
      }
    }

    if (departmentId && departmentId !== 'all') {
      whereClause.authors = {
        some: {
          facultyProfile: {
            departmentId: departmentId,
          },
        },
      };
    }

    // 2. Fetch publications with facultyProfile relation
    const publications = await (prisma.publication as any).findMany({
      where: whereClause,
      include: {
        authors: {
          include: {
            facultyProfile: {
              include: {
                department: true,
              },
            },
          },
        },
        naacMappings: true,
      },
      orderBy: {
        publicationYear: 'desc',
      },
    });

    // 3. Create Excel Workbook
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Vidyawan IQAC Automation';
    workbook.created = new Date();

    const worksheet = workbook.addWorksheet('NAAC Criteria 3.4');

    // 4. Define Standard NAAC 3.4 Columns
    worksheet.columns = [
      { header: 'Sl. No.', key: 'slNo', width: 8 },
      { header: 'Title of Paper', key: 'title', width: 42 },
      { header: 'Name of the Author(s)', key: 'authors', width: 28 },
      { header: 'Department', key: 'department', width: 24 },
      { header: 'Name of Journal', key: 'journalName', width: 30 },
      { header: 'Year of Publication', key: 'year', width: 15 },
      { header: 'Publisher', key: 'publisher', width: 22 },
      { header: 'DOI / Link', key: 'doi', width: 35 },
      { header: 'Open Access Status', key: 'openAccess', width: 20 },
      { header: 'Citations', key: 'citations', width: 12 },
      { header: 'Link to Landing Page', key: 'landingPageUrl', width: 35 },
    ];

    // 5. Header Styling
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1E293B' },
    };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.height = 26;

    // 6. Data Rows
    publications.forEach((pub: any, index: number) => {
      let authorNames = 'N/A';
      let deptNames = 'N/A';

      if (Array.isArray(pub.authors) && pub.authors.length > 0) {
        const names = pub.authors
          .map((a: any) => a.facultyProfile?.name || a.authorName || a.name)
          .filter(Boolean);
        if (names.length > 0) authorNames = names.join(', ');

        const depts = pub.authors
          .map((a: any) => a.facultyProfile?.department?.name)
          .filter(Boolean);
        if (depts.length > 0) deptNames = [...new Set(depts)].join(', ');
      }

      const row = worksheet.addRow({
        slNo: index + 1,
        title: pub.title || 'Untitled',
        authors: authorNames,
        department: deptNames,
        journalName: pub.journalName || 'N/A',
        year: pub.publicationYear || 'N/A',
        publisher: pub.publisher || 'N/A',
        doi: pub.doi ? (pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`) : 'N/A',
        openAccess: pub.isOpenAccess ? 'Open Access' : 'Closed',
        citations: pub.citationCount || 0,
        landingPageUrl: pub.landingPageUrl || pub.openAccessUrl || (pub.doi ? `https://doi.org/${pub.doi}` : 'N/A'),
      });

      row.alignment = { vertical: 'middle', wrapText: true };
    });

    const timestamp = new Date().toISOString().split('T')[0];

    // 7. Output based on format
    if (format === 'csv') {
      const csvBuffer = await workbook.csv.writeBuffer();
      return new NextResponse(csvBuffer as any, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="NAAC_Criteria_3.4_${timestamp}.csv"`,
        },
      });
    }

    const excelBuffer = await workbook.xlsx.writeBuffer();
    return new NextResponse(excelBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': `attachment; filename="NAAC_SSR_AQAR_3_4_${timestamp}.xlsx"`,
      },
    });
  } catch (error: any) {
    console.error('Export Error in route:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to generate export' },
      { status: 500 }
    );
  }
}