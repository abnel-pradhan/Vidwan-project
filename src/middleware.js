import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Check if the user is trying to access the restricted admin portal
  if (request.nextUrl.pathname.startsWith('/admin')) {

    // 2. Check for an authentication token (we check a mock cookie for now)
    // Once you connect a real backend or NextAuth, this token will be real.
    const isAuthenticated = request.cookies.get('vidyawan_session');

    // 3. If no active session exists, intercept and redirect to the sign-in page
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/signin', request.url));
    }
  }

  // If authenticated, or visiting a public page (like Home or Faculty), let them through
  return NextResponse.next();
}

// Configure which routes this middleware should actively monitor
export const config = {
  matcher: ['/admin/:path*'],
};