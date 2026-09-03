'use server';

import { cookies } from 'next/headers';
import { prisma } from '@/app/lib/prisma';
import { redirect } from 'next/navigation';

export async function loginFaculty(formData) {
  const rawEmail = formData.get('email');
  if (!rawEmail) return { success: false, error: 'Email is required.' };
  
  const email = String(rawEmail).trim();

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      include: { facultyProfile: true }
    });

    if (!user || !user.facultyProfile) {
      return { success: false, error: 'No active faculty profile found for this email.' };
    }

    const cookieStore = await cookies();
    cookieStore.set('faculty_session', user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, error: String(error.message || error) };
  }
}

export async function logoutFaculty() {
  const cookieStore = await cookies();
  cookieStore.delete('faculty_session');
  redirect('/login');
}