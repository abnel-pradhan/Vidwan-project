// src/app/actions/admin.js
'use server';

import { prisma } from '@/app/lib/prisma';

export async function getAdminDashboardData(filters = {}) {
  try {
    const { departmentId = 'all', academicYear = 'all' } = filters;

    const publicationWhere = {};

    if (academicYear && academicYear !== 'all') {
      publicationWhere.publicationYear = parseInt(academicYear, 10) || undefined;
    }

    if (departmentId && departmentId !== 'all') {
      publicationWhere.authors = {
        some: {
          facultyProfile: {
            departmentId: departmentId,
          },
        },
      };
    }

    // Fetch departments
    const departments = await prisma.department.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });

    // Counts
    const totalPapers = await prisma.publication.count({
      where: publicationWhere,
    });

    const pendingPapersCount = await prisma.publication.count({
      where: { ...publicationWhere, status: 'PENDING' },
    });

    const approvedPapersCount = await prisma.publication.count({
      where: { ...publicationWhere, status: 'APPROVED' },
    });

    // Pending list with facultyProfile relation
    const pendingList = await prisma.publication.findMany({
      where: { ...publicationWhere, status: 'PENDING' },
      include: {
        authors: {
          include: {
            facultyProfile: {
              include: { department: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    // Recent logs
    const recentLogs = await prisma.systemLog
      ? await prisma.systemLog.findMany({
          orderBy: { createdAt: 'desc' },
          take: 10,
        })
      : [];

    return {
      success: true,
      departments,
      metrics: {
        totalPapers,
        pendingPapersCount,
        approvedPapersCount,
        systemHealth: 'Optimal',
      },
      pendingList,
      recentLogs,
    };
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return { success: false, error: error.message };
  }
}

export async function updatePublicationStatus(id, status) {
  try {
    const updated = await prisma.publication.update({
      where: { id },
      data: { status },
    });

    try {
      if (prisma.systemLog) {
        await prisma.systemLog.create({
          data: {
            action: status === 'APPROVED' ? 'PAPER_APPROVED_NAAC' : 'PAPER_REJECTED',
            details: { title: updated.title, id: updated.id },
          },
        });
      }
    } catch (_) {}

    return { success: true, publication: updated };
  } catch (error) {
    console.error('Error updating status:', error);
    return { success: false, error: error.message };
  }
}