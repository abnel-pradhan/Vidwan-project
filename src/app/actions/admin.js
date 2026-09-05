'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getAdminDashboardData(filters = {}) {
  try {
    const { departmentId = 'all', academicYear = 'all' } = filters;

    // 1. Build the dynamic filters
    const publicationWhere = {};

    if (academicYear && academicYear !== 'all') {
      publicationWhere.publicationYear = parseInt(academicYear, 10) || undefined;
    }

    if (departmentId && departmentId !== 'all') {
      publicationWhere.authors = {
        some: { facultyProfile: { departmentId: departmentId } }
      };
    }

    // 2. Fetch departments for the dropdown UI
    const departments = await prisma.department.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });

    // 3. Calculate Live Metrics using correct schema ENUMs
    const totalIngested = await prisma.publication.count({
      where: publicationWhere,
    });

    const awaitingApproval = await prisma.publication.count({
      where: { ...publicationWhere, status: 'PENDING_APPROVAL' }, // FIXED ENUM
    });

    const naacApproved = await prisma.publication.count({
      where: { 
        ...publicationWhere, 
        status: 'APPROVED',
        naacMappings: { some: {} } // Ensures it was actually mapped in the NAAC engine
      },
    });

    // 4. Fetch the queue for the "Papers Awaiting Approval" table
    const pendingList = await prisma.publication.findMany({
      where: { ...publicationWhere, status: 'PENDING_APPROVAL' },
      include: {
        authors: {
          include: {
            facultyProfile: { include: { department: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    // 5. Fetch Activity Logs (FIXED from SystemLog to ActivityLog based on your schema)
    const recentLogs = await prisma.activityLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return {
      success: true,
      departments,
      metrics: {
        totalIngested,
        awaitingApproval,
        naacApproved,
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

    // Log the action safely
    await prisma.activityLog.create({
      data: {
        action: status === 'APPROVED' ? 'PAPER_APPROVED' : 'PAPER_REJECTED',
        details: { title: updated.title, id: updated.id },
      },
    });

    revalidatePath('/admin');
    return { success: true, publication: updated };
  } catch (error) {
    console.error('Error updating status:', error);
    return { success: false, error: error.message };
  }
}