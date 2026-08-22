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
      isApproved: true,
    };

    if (departmentId && departmentId !== 'all') {
      whereClause.facultyId = departmentId; // or whereClause.departmentId = departmentId
    }

    if (academicYear && academicYear !== 'all') {
      whereClause.academicYear = academicYear;
    }

    // 2. Fetch publications from database
    // Adjust 'faculty' / 'author' and 'publishedYear' / 'year' to match your schema
    const publications = await (prisma.publication as any).findMany({
      where: whereClause,
      include: {
        faculty: {
          select: {
            name: true,
            department: {
              select: { name: true },
            },
          },
        },
      },
    });

    // 3. Create Excel Workbook and Sheet
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Vidyawan IQAC Automation';
    workbook.created = new Date();

    // Fix: Note capital 'W' in addWorksheet
    const worksheet = workbook.addWorksheet('NAAC Criteria 3.4');

    // 4. Define Standard NAAC 3.4 Columns
    worksheet.columns = [
      { header: 'Sl. No.', key: 'slNo', width: 8 },
      { header: 'Title of Paper', key: 'title', width: 40 },
      { header: 'Name of the Author(s)', key: 'authors', width: 28 },
      { header: 'Department', key: 'department', width: 24 },
      { header: 'Name of Journal', key: 'journalName', width: 30 },
      { header: 'Year of Publication', key: 'year', width: 15 },
      { header: 'ISSN Number', key: 'issn', width: 18 },
      { header: 'DOI / Document Link', key: 'doi', width: 35 },
      { header: 'Indexing Status (UGC-CARE / Scopus)', key: 'indexing', width: 30 },
      { header: 'Link to Journal Website', key: 'journalUrl', width: 35 },
      { header: 'Link to Article / Paper', key: 'articleUrl', width: 35 },
    ];

    // 5. Header Styling
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF1E293B' }, // Slate-800
    };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.height = 26;

    // 6. Add Data Rows
    publications.forEach((pub: any, index: number) => {
      const row = worksheet.addRow({
        slNo: index + 1,
        title: pub.title,
        authors: Array.isArray(pub.authors) ? pub.authors.join(', ') : (pub.faculty?.name || pub.author?.name || 'N/A'),
        department: pub.faculty?.department?.name || pub.department?.name || 'N/A',
        journalName: pub.journalName || pub.journal || 'N/A',
        year: pub.publishedYear || pub.year || pub.publicationYear || 'N/A',
        issn: pub.issn || 'N/A',
        doi: pub.doi ? `https://doi.org/${pub.doi}` : 'N/A',
        indexing: pub.indexingStatus || (pub.isUgcCare ? 'UGC-CARE' : pub.isScopus ? 'Scopus' : 'Peer Reviewed'),
        journalUrl: pub.journalUrl || 'N/A',
        articleUrl: pub.doi ? `https://doi.org/${pub.doi}` : (pub.openAlexId || 'N/A'),
      });

      row.alignment = { vertical: 'middle', wrapText: true };
    });

    const timestamp = new Date().toISOString().split('T')[0];

    // 7. Return CSV or XLSX file
    if (format === 'csv') {
      const csvBuffer = await workbook.csv.writeBuffer();
      return new NextResponse(csvBuffer as any, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv',
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
  } catch (error) {
    console.error('Export Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate NAAC export' },
      { status: 500 }
    );
  }
}