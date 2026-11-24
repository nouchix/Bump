import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const { trackId, duration } = await req.json();
    if (!trackId) {
      return NextResponse.json({ error: 'Missing trackId' }, { status: 400 });
    }

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // 1. Record play event in plays table
    await supabase.from('plays').insert({
      track_id: trackId,
      listener_id: user?.id || null,
      duration_listened_seconds: duration || 30,
    });

    // 2. Increment play_count on track
    await supabase.rpc('increment_play_count', { track_row_id: trackId });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
