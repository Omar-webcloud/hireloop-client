import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST() {
  try {
    // Invalidate the session; Better Auth will clear cookies internally
    await auth.api.signOut({ headers: await headers() });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    console.error('Logout error:', e);
    return NextResponse.json({ error: 'Failed to logout' }, { status: 500 });
  }
}
