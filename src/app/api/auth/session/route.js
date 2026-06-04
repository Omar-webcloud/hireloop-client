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

    const { name, email, image, role, subscriptionPlan } = session.user;

    // Fallback: if role is somehow missing from session, treat as seeker
    return NextResponse.json({
      user: {
        name,
        email,
        image: image ?? null,
        role: role ?? "seeker",
        subscriptionPlan: subscriptionPlan ?? "free",
      },
    });
  } catch (e) {
    console.error('Session error:', e);
    return NextResponse.json({ error: 'Failed to get session' }, { status: 500 });
  }
}