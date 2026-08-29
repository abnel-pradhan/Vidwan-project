'use server';

import { prisma } from '@/app/lib/prisma'; 
import { cookies } from 'next/headers';

export async function authenticateAdmin(email, password) {
  try {
    const admin = await prisma.adminUser.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (!admin || admin.password !== password) {
      return { success: false, error: 'Invalid email or password.' };
    }

    // CRITICAL FIX: cookies() must be awaited in modern Next.js
    const cookieStore = await cookies();
    cookieStore.set('vidyawan_session', admin.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24
    });

    return { success: true };
  } catch (error) {
    // This prints a massive, unmissable error in your VS Code terminal
    console.error('\n❌ REAL ERROR IS RIGHT HERE:', error.message, '\n'); 
    return { success: false, error: 'Internal server error during authentication.' };
  }
}