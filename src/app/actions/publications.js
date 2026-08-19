'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function savePublicationToDatabase(paperData) {
  try {
    if (!prisma) {
      throw new Error('Database client is not initialized.');
    }

    const pubModel = prisma.publication || prisma.Publication;
    if (!pubModel) {
      throw new Error('Publication model not found on Prisma Client.');
    }

    const publication = await pubModel.upsert({
      where: {
        openAlexId: paperData.openAlexId,
      },
      update: {
        citationCount: paperData.citationCount || 0,
        isOpenAccess: paperData.isOpenAccess || false,
        openAccessUrl: paperData.openAccessUrl || null,
      },
      create: {
        title: paperData.title || 'Untitled',
        publicationYear: paperData.publicationYear || new Date().getFullYear(),
        doi: paperData.doi || null,
        openAlexId: paperData.openAlexId,
        journalName: paperData.journalName || null,
        publisher: paperData.publisher || null,
        citationCount: paperData.citationCount || 0,
        isOpenAccess: paperData.isOpenAccess || false,
        openAccessUrl: paperData.openAccessUrl || null,
        landingPageUrl: paperData.landingPageUrl || null,
        status: 'PENDING_APPROVAL',
      },
    });

    // Create an audit log entry
    const logModel = prisma.activityLog || prisma.ActivityLog;
    if (logModel) {
      await logModel.create({
        data: {
          action: 'PAPER_INGESTED_OPENALEX',
          details: {
            publicationId: publication.id,
            title: publication.title,
          },
        },
      });
    }

    revalidatePath('/admin');
    return { success: true, publication };
  } catch (error) {
    console.error('Error saving publication:', error);
    return { success: false, error: error.message };
  }
}