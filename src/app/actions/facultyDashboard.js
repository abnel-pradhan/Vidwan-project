'use server';

import { cookies } from 'next/headers';
import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getFacultyDashboardData() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('faculty_session')?.value;

    if (!sessionId) return null; 

    const profile = await prisma.facultyProfile.findUnique({
      where: { userId: sessionId }
    });
    
    if (!profile) return null;

    const pending = await prisma.publication.findMany({
      where: {
        status: 'PENDING_APPROVAL',
        authors: { some: { facultyProfileId: profile.id } }
      },
      orderBy: { createdAt: 'desc' }
    });

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