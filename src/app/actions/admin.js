'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

/**
 * Fetches high-level metrics and lists for the Admin Dashboard.
 */
export async function getAdminDashboardData() {
  try {
    const [totalPapers, pendingPapersCount, approvedPapersCount, pendingList, recentLogs] = await Promise.all([
      prisma.publication.count(),
      prisma.publication.count({ where: { status: 'PENDING_APPROVAL' } }),
      prisma.publication.count({ where: { status: 'APPROVED' } }),
      prisma.publication.findMany({
        where: { status: 'PENDING_APPROVAL' },
        orderBy: { createdAt: 'desc' },
        take: 10,
      }),
      prisma.activityLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 8,
      }),
    ]);

    return {
      success: true,
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

/**
 * Approves or rejects a publication and creates an audit log entry.
 */
export async function updatePublicationStatus(publicationId, status) {
  try {
    const publication = await prisma.publication.update({
      where: { id: publicationId },
      data: { status },
    });

    await prisma.activityLog.create({
      data: {
        action: status === 'APPROVED' ? 'PAPER_APPROVED_NAAC' : 'PAPER_REJECTED',
        details: {
          publicationId: publication.id,
          title: publication.title,
          status,
        },
      },
    });

    revalidatePath('/admin');
    return { success: true, publication };
  } catch (error) {
    console.error('Error updating status:', error);
    return { success: false, error: error.message };
  }
}