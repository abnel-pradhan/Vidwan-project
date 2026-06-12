import { NextResponse } from 'next/server';

export default function proxy(request) {
  try {
    const url = request.nextUrl.clone();
    
    const hostHeader = request.headers.get('host') || '';
    const pathname = url.pathname || '';

    // 1. Instantly allow all Next.js background files to load safely
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/static') ||
      pathname.includes('.') ||
      pathname === '/favicon.ico'
    ) {
      return NextResponse.next();
    }

    const mainDomain = 'vidyawan.in';
    let subdomain = '';

    // 2. Safely check for local or production subdomains
    if (hostHeader.includes('localhost')) {
      const parts = hostHeader.split('.');
      if (parts.length > 1 && parts[0] !== 'localhost') {
        subdomain = parts[0];
      }
    } else if (hostHeader !== mainDomain && hostHeader.endsWith(`.${mainDomain}`)) {
      subdomain = hostHeader.replace(`.${mainDomain}`, '');
    }

    // 3. If it is a college subdomain, rewrite the URL
    if (subdomain) {
      url.pathname = `/${subdomain}${pathname}`;
      return NextResponse.rewrite(url);
    }

    // 4. Default fallback: Just load normally
    return NextResponse.next();

  } catch (error) {
    // If literally anything breaks, do not crash the app. Just load normally.
    return NextResponse.next();
  }
}