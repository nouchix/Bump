import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { trackId, artistId, title, amountCents } = await req.json();

    if (!trackId || !amountCents) {
      return NextResponse.json({ error: 'Missing track parameters' }, { status: 400 });
    }

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // Check artist profile for Stripe Connect ID
    let artistStripeAccount: string | null = null;
    if (artistId) {
      const { data: artistProfile } = await supabase
        .from('profiles')
        .select('stripe_account_id')
        .eq('id', artistId)
        .single();
      artistStripeAccount = artistProfile?.stripe_account_id || null;
    }

    const sessionParams: any = {
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: amountCents,
            product_data: {
              name: `Track: ${title}`,
              description: '100% of proceeds go directly to the artist.',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        track_id: trackId,
        artist_id: artistId || '',
        buyer_id: user?.id || 'guest',
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/track/${trackId}?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/track/${trackId}?canceled=true`,
    };

    // 100% Payout to Artist if connected
    if (artistStripeAccount) {
      sessionParams.payment_intent_data = {
        application_fee_amount: 0, // 0% platform fee - Artist keeps 100%
        transfer_data: {
          destination: artistStripeAccount,
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

