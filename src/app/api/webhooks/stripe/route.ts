import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing webhook signature' }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error(`Webhook Signature Verification Failed: ${err.message}`);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const { track_id, artist_id, buyer_id } = session.metadata || {};

    const supabaseAdmin = createAdminClient();

    const { error } = await supabaseAdmin.from('sales').insert({
      track_id: track_id || null,
      artist_id: artist_id || null,
      buyer_id: buyer_id !== 'guest' ? buyer_id : null,
      amount_cents: session.amount_total,
      stripe_payment_id: session.payment_intent,
    });

    if (error) {
      console.error('Failed to record sale:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
