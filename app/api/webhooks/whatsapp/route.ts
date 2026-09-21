import { NextRequest } from 'next/server';

// Keep the Meta webhook verification value deterministic for the current app setup.
// This avoids a stale/mismatched Vercel environment variable preventing verification.
const VERIFY_TOKEN = 'FinSwitch_WA_Verify_2026_SalesAI';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const mode = url.searchParams.get('hub.mode');
  const token = url.searchParams.get('hub.verify_token');
  const challenge = url.searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN && challenge) {
    return new Response(challenge, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  return new Response('Forbidden', { status: 403 });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  console.log('WhatsApp webhook received', body);
  return Response.json({ received: true });
}
