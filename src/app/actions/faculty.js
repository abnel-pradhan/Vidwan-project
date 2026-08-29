'use server';

import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getDepartments() {
  try {
    return await prisma.department.findMany();
  } catch (error) {
    return [];
  }
}

export async function createFacultyProfile(formData) {
  try {
    await prisma.facultyProfile.create({
      data: {
        name: formData.name,
        email: formData.email,
        departmentId: formData.departmentId,
        // Using ORCID helps the ingestion tool find their papers later!
        orcid: formData.orcid || null, 
      }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error creating faculty:", error);
    return { success: false, error: 'Could not save faculty profile. Ensure email is unique.' };
  }
}