'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getFacultyDashboardData() {
  try {
    // For testing purposes, we will grab the first registered faculty profile. 
    // Later, this will be tied to the specific user's login session.
    const profile = await prisma.facultyProfile.findFirst();
    if (!profile) return null;

    // 1. Fetch papers waiting for the professor's review
    const pending = await prisma.publication.findMany({
      where: {
        status: 'PENDING_APPROVAL',
        authors: { some: { facultyProfileId: profile.id } }
      },
      orderBy: { createdAt: 'desc' }
    });

    // 2. Fetch papers already confirmed
    const confirmed = await prisma.publication.findMany({
      where: {
        status: 'APPROVED',
        authors: { some: { facultyProfileId: profile.id } }
      },
      orderBy: { publicationYear: 'desc' }
    });

    return { profile, pending, confirmed };
  } catch (error) {
    console.error("Error fetching faculty dashboard:", error);
    return null;
  }
}

export async function updatePaperStatus(publicationId, newStatus) {
  try {
    await prisma.publication.update({
      where: { id: publicationId },
      data: { status: newStatus }
    });
    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to update publication.' };
  }
}