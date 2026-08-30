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
    // We create the User and the linked FacultyProfile simultaneously
    await prisma.user.create({
      data: {
        email: formData.email,
        role: 'FACULTY', // Assigns them the default role from your ENUM
        facultyProfile: {
          create: {
            fullName: formData.name,       // FIXED: Maps form 'name' to schema 'fullName'
            designation: 'Professor',      // FIXED: Provides a default required designation
            departmentId: formData.departmentId,
            orcid: formData.orcid || null, 
          }
        }
      }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error creating faculty:", error);
    return { success: false, error: 'Could not save faculty profile. Ensure email is unique.' };
  }
}