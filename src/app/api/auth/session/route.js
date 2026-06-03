import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }
    // Return only needed fields
    const { name, email, avatar, role } = session.user;
    return NextResponse.json({ user: { name, email, avatar, role } });
  } catch (e) {
    console.error('Session error:', e);
    return NextResponse.json({ error: 'Failed to get session' }, { status: 500 });
  }
}
