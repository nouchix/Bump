'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { usePlayer, Track } from '@/context/PlayerContext';
import { Play, Pause, ShoppingCart, Disc3, UploadCloud, Headphones, Zap, Ticket, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentTrack, isPlaying, playTrack, togglePlay } = usePlayer();
  const supabase = createClient();

  useEffect(() => {
    async function loadTracks() {
      const { data, error } = await supabase
        .from('tracks')
        .select('*, profiles(full_name)')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setTracks(
          data.map((t: any) => ({
            id: t.id,
            title: t.title,
            artist_id: t.artist_id,
            artist_name: t.profiles?.full_name || 'Independent Creator',
            audio_file_url: t.audio_file_url,
            cover_art_url: t.cover_art_url,
            price_cents: t.price_cents,
            duration: t.duration,
          }))
        );
      }
      setLoading(false);
    }
    loadTracks();
  }, []);

  const handleBuy = async (track: Track) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackId: track.id,
          artistId: track.artist_id,
          title: track.title,
          amountCents: track.price_cents,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error('Purchase initiation failed', e);
    }
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-signal/15 to-pulse/15 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-signal/20 text-signal border border-signal/30">
                <Zap className="w-3.5 h-3.5 fill-current" /> Now live
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-ink-850 text-ink-300 border border-ink-800">
                100% to artist
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[0.98]">
              Your sound, your stage.
            </h1>

            <p className="text-lg sm:text-xl text-ink-300 max-w-xl leading-relaxed">
              Stream independent music for free. Artists set their own price and keep 100% of every sale, paid directly.
            </p>

            <div className="flex gap-4 flex-wrap pt-2">
              <Link
                href="/upload"
                className="px-6 py-3.5 rounded-xl bg-signal hover:bg-signal-400 text-ink-950 font-bold transition flex items-center gap-2 text-base"
              >
                <UploadCloud className="w-5 h-5" />
                Upload a track
              </Link>
              <a
                href="#listeners"
                className="px-6 py-3.5 rounded-xl bg-ink-850 hover:bg-ink-800 text-static border border-ink-700 font-semibold transition flex items-center gap-2 text-base"
              >
                <Headphones className="w-5 h-5 text-pulse" />
                Start listening
              </a>
            </div>
          </div>

          {/* Hero Featured Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-grille border border-ink-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-signal font-semibold">Featured Preview</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-pulse/20 text-pulse border border-pulse/30 font-medium">Verified</span>
              </div>
              <div className="aspect-square w-full rounded-xl bg-ink-900 border border-ink-800 mb-4 flex items-center justify-center overflow-hidden relative group">
                <img src="/assets/logo/bump-app-icon.svg" alt="Bump" className="w-28 h-28 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-static">Midnight Horizon</h3>
                <p className="text-sm text-ink-400">Nova Reyes · Electronic</p>
                <div className="mt-4 pt-4 border-t border-ink-800 flex items-center justify-between">
                  <span className="font-mono text-sm text-signal font-bold">$1.99 (100% to Artist)</span>
                  <Link href="/upload" className="text-xs text-ink-300 hover:text-white underline">Join as Artist</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Artists - 3 Step Flow */}
      <section id="artists" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-signal">For artists</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Upload. Set your price. Get paid.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-grille border border-ink-800 rounded-2xl p-7 flex flex-col gap-3">
            <span className="font-mono text-sm text-signal font-bold">01</span>
            <h3 className="text-xl font-bold">Upload your track</h3>
            <p className="text-sm text-ink-400 leading-relaxed">Drop an MP3 and your cover art. Publish directly to our global CDN in seconds.</p>
          </div>
          <div className="bg-grille border border-ink-800 rounded-2xl p-7 flex flex-col gap-3">
            <span className="font-mono text-sm text-signal font-bold">02</span>
            <h3 className="text-xl font-bold">Set your price</h3>
            <p className="text-sm text-ink-400 leading-relaxed">Any price you choose, or free. Free streaming stays open for all listeners.</p>
          </div>
          <div className="bg-grille border border-ink-800 rounded-2xl p-7 flex flex-col gap-3">
            <span className="font-mono text-sm text-signal font-bold">03</span>
            <h3 className="text-xl font-bold">Get paid directly</h3>
            <p className="text-sm text-ink-400 leading-relaxed">Buyers pay you straight through Stripe Connect. Zero platform cut on music sales.</p>
          </div>
        </div>
      </section>

      {/* 100% Promise Callout Banner */}
      <section className="border-y border-ink-850 bg-ink-900 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-8xl sm:text-9xl font-extrabold tracking-tighter bg-gradient-to-r from-signal to-pulse bg-clip-text text-transparent">
            100%
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">of every music sale goes to the artist.</h2>
            <p className="text-base text-ink-400 max-w-lg leading-relaxed">
              No middleman commission. When fans buy your track on Bump, 100% of the funds land in your account.
            </p>
          </div>
        </div>
      </section>

      {/* Live Track Stream Feed */}
      <section id="listeners" className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-pulse">For listeners</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">Stream Free. Buy Direct.</h2>
          </div>
          <Link href="/upload" className="text-sm text-ink-400 hover:text-white flex items-center gap-1 font-semibold">
            Upload track <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="text-ink-500 py-16 text-center text-sm font-mono">Loading tracks from CDN...</div>
        ) : tracks.length === 0 ? (
          <div className="border border-ink-800 rounded-2xl p-16 text-center bg-grille">
            <Disc3 className="w-12 h-12 text-ink-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-static">Nothing uploaded yet. Fix that?</h3>
            <p className="text-ink-400 text-sm mt-1 mb-6">Be the first artist to publish a track on Bump.</p>
            <Link
              href="/upload"
              className="px-5 py-2.5 bg-signal hover:bg-signal-400 text-ink-950 font-bold rounded-xl text-sm transition"
            >
              Upload your first track
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => {
              const isCurrent = currentTrack?.id === track.id;
              const playingThis = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  className="bg-grille border border-ink-800 rounded-2xl p-5 flex flex-col justify-between hover:border-ink-700 transition group"
                >
                  <div className="flex gap-4 items-center">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-ink-900 border border-ink-800 flex-shrink-0">
                      {track.cover_art_url ? (
                        <img src={track.cover_art_url} alt={track.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-ink-600">
                          <Disc3 className="w-8 h-8" />
                        </div>
                      )}
                      <button
                        onClick={() => (isCurrent ? togglePlay() : playTrack(track))}
                        className="absolute inset-0 bg-void/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      >
                        {playingThis ? (
                          <Pause className="w-8 h-8 text-signal fill-current" />
                        ) : (
                          <Play className="w-8 h-8 text-signal fill-current" />
                        )}
                      </button>
                    </div>

                    <div className="truncate">
                      <h3 className="text-base font-bold text-static truncate">{track.title}</h3>
                      <p className="text-xs text-ink-400 truncate">{track.artist_name}</p>
                      <div className="mt-2 text-xs font-mono font-bold text-signal">
                        {track.price_cents > 0 ? `$${(track.price_cents / 100).toFixed(2)}` : 'Free Stream'}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-ink-850 flex items-center justify-between">
                    <button
                      onClick={() => (isCurrent ? togglePlay() : playTrack(track))}
                      className="text-xs text-ink-300 hover:text-white flex items-center gap-1.5 font-medium"
                    >
                      {playingThis ? <Pause className="w-4 h-4 text-signal" /> : <Play className="w-4 h-4" />}
                      {playingThis ? 'Pause' : 'Stream'}
                    </button>

                    {track.price_cents > 0 && (
                      <button
                        onClick={() => handleBuy(track)}
                        className="px-3.5 py-1.5 bg-signal hover:bg-signal-400 text-ink-950 font-bold text-xs rounded-full flex items-center gap-1.5 transition"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Buy Track
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Philly Launch Event Section */}
      <section id="philly" className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-ink-800 bg-grille overflow-hidden p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-signal/20 text-signal border border-signal/30 w-fit">
              Launch event
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Meet us in Philly.</h2>
            <p className="text-base text-ink-300 leading-relaxed">
              We're launching Bump at the Black Friday Marketplace &amp; Philly 4 Real TV Awards Ceremony. Come find us, bring your music, and upload your first track on the spot.
            </p>
            <div className="py-4 border-y border-ink-800 flex flex-col gap-2.5 text-sm">
              <div className="flex gap-4">
                <span className="w-16 font-mono text-xs uppercase text-ink-500 pt-0.5">When</span>
                <span>Friday, November 27 · 8 AM – 9 PM</span>
              </div>
              <div className="flex gap-4">
                <span className="w-16 font-mono text-xs uppercase text-ink-500 pt-0.5">Where</span>
                <span>KANVAS Venue, 3870 Lancaster Ave, Philadelphia, PA 19104</span>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href="https://www.eventbrite.com/e/black-friday-marketplace-philly-4-real-tv-awards-ceremony-tickets-2004528782549"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-signal hover:bg-signal-400 text-ink-950 font-bold rounded-xl text-sm flex items-center gap-2 transition"
              >
                <Ticket className="w-4 h-4" /> Get tickets
              </a>
              <a
                href="https://maps.google.com?daddr=39.9615811,-75.1997287"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-ink-850 hover:bg-ink-800 text-static border border-ink-700 font-semibold rounded-xl text-sm flex items-center gap-2 transition"
              >
                <MapPin className="w-4 h-4 text-pulse" /> Directions
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center p-8 bg-ink-900 rounded-xl border border-ink-800">
            <img src="/assets/logo/bump-lockup-stacked.svg" alt="Bump Philly Launch" className="w-48 sm:w-64 h-auto opacity-90" />
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <footer className="border-t border-ink-850 py-16 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center gap-4">
          <img src="/assets/logo/bump-mark-signal.svg" alt="Bump" className="w-12 h-12" />
          <h3 className="text-2xl font-bold">Nothing uploaded yet. Fix that?</h3>
          <p className="text-sm text-ink-400">Free to join. Free to stream. 100% of sales to you.</p>
          <Link
            href="/upload"
            className="mt-2 px-6 py-3 bg-signal hover:bg-signal-400 text-ink-950 font-bold rounded-xl text-sm transition"
          >
            Upload your first track
          </Link>
        </div>
      </footer>
    </div>
  );
}
