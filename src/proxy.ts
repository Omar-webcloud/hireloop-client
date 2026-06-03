import { NextResponse } from 'next/server';

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Only protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // We can verify the session via the better-auth endpoint
    // Since it's server side middleware, we can fetch from our own API or use the cookie directly.
    // For simplicity, we just fetch /api/auth/session using the incoming cookie.
    
    // Note: To avoid fetch loops and since Next.js fetch requires absolute URL in middleware:
    const baseUrl = request.nextUrl.origin;
    const sessionRes = await fetch(`${baseUrl}/api/auth/session`, {
      headers: {
        cookie: request.headers.get('cookie') || '',
      }
    });

    if (!sessionRes.ok) {
      return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    const data = await sessionRes.json();
    const role = data?.user?.role || 'seeker';

    // Role-based protection
    if (pathname.startsWith('/dashboard/admin') && role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard/seeker', request.url));
    }
    
    if (pathname.startsWith('/dashboard/recruiter') && role !== 'recruiter' && role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard/seeker', request.url));
    }
    
    if (pathname.startsWith('/dashboard/seeker') && role === 'admin') {
       return NextResponse.redirect(new URL('/dashboard/admin', request.url));
    }
    
    if (pathname.startsWith('/dashboard/seeker') && role === 'recruiter') {
       return NextResponse.redirect(new URL('/dashboard/recruiter', request.url));
    }
    
    // Redirect root /dashboard to appropriate role dashboard
    if (pathname === '/dashboard') {
      return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
