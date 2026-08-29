'use server';

import { prisma } from '@/app/lib/prisma'; 
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authenticateAdmin(email, password) {
  try {
    const admin = await prisma.adminUser.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (!admin || admin.password !== password) {
      return { success: false, error: 'Invalid email or password.' };
    }

    // Await cookies() for modern Next.js compatibility
    const cookieStore = await cookies();
    cookieStore.set('vidyawan_session', admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24
    });

    return { success: true };
  } catch (error) {
    console.error('\n❌ REAL ERROR IS RIGHT HERE:', error.message, '\n'); 
    return { success: false, error: 'Internal server error during authentication.' };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('vidyawan_session');
  redirect('/'); // Instantly redirects the user back to the home page
}