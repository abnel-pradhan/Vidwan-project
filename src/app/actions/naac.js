'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getUnmappedPapers() {
  try {
    // Fetch papers that are APPROVED by faculty but have NO NAAC mappings yet
    return await prisma.publication.findMany({
      where: {
        status: 'APPROVED',
        naacMappings: { none: {} }
      },
      include: {
        authors: { include: { facultyProfile: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  } catch (error) {
    console.error("Error fetching unmapped papers:", error);
    return [];
  }
}

export async function mapPaperToNaac(formData) {
  const publicationId = formData.get('publicationId');
  const criterionCode = formData.get('criterionCode');
  const academicYear = formData.get('academicYear');

  try {
    // 1. Ensure the NAAC Criterion exists in the database
    const criterion = await prisma.naacCriterion.upsert({
      where: { code: criterionCode },
      update: {},
      create: {
        code: criterionCode,
        category: 'Research and Extension',
        description: `NAAC Criteria ${criterionCode} (Research Publications)`
      }
    });

    // 2. Link the paper to the criterion and academic year
    await prisma.naacPublicationMapping.create({
      data: {
        publicationId,
        criterionId: criterion.id,
        academicYear,
        verifiedByIQAC: true
      }
    });

    revalidatePath('/admin/naac');
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Mapping error:", error);
    return { success: false, error: 'Failed to map publication. It may already be mapped for this year.' };
  }
}