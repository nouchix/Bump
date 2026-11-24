'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { usePlayer, Track } from '@/context/PlayerContext';
import { Play, Pause, ShoppingCart, Disc3 } from 'lucide-react';

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
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Trending & New Releases</h1>
        <p className="text-zinc-400 text-sm mt-1">
          Stream independent music. Direct-to-artist payouts with zero platform cut on music sales.
        </p>
      </div>

      {loading ? (
        <div className="text-zinc-500 py-12 text-center">Loading fresh tracks...</div>
      ) : tracks.length === 0 ? (
        <div className="border border-zinc-800 rounded-xl p-12 text-center bg-zinc-900/30">
          <Disc3 className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-zinc-300">No tracks published yet</h3>
          <p className="text-zinc-500 text-sm mt-1 mb-4">Be the first artist to publish a track on Bump.</p>
          <a
            href="/upload"
            className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition"
          >
            Upload Track
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const isCurrent = currentTrack?.id === track.id;
            const playingThis = isCurrent && isPlaying;

            return (
              <div
                key={track.id}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between hover:border-zinc-700 transition"
              >
                <div className="flex gap-4 items-center">
                  <div className="relative group w-20 h-20 flex-shrink-0">
                    {track.cover_art_url ? (
                      <img
                        src={track.cover_art_url}
                        alt={track.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-500">
                        <Disc3 className="w-8 h-8" />
                      </div>
                    )}
                    <button
                      onClick={() => (isCurrent ? togglePlay() : playTrack(track))}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition"
                    >
                      {playingThis ? (
                        <Pause className="w-8 h-8 text-amber-500 fill-current" />
                      ) : (
                        <Play className="w-8 h-8 text-amber-500 fill-current" />
                      )}
                    </button>
                  </div>

                  <div className="truncate">
                    <h2 className="text-base font-bold text-white truncate">{track.title}</h2>
                    <p className="text-xs text-zinc-400 truncate">{track.artist_name}</p>
                    <div className="mt-2 text-xs font-semibold text-amber-500">
                      {track.price_cents > 0 ? `$${(track.price_cents / 100).toFixed(2)}` : 'Free'}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <button
                    onClick={() => (isCurrent ? togglePlay() : playTrack(track))}
                    className="text-xs text-zinc-300 hover:text-white flex items-center gap-1.5"
                  >
                    {playingThis ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {playingThis ? 'Pause' : 'Stream'}
                  </button>

                  {track.price_cents > 0 && (
                    <button
                      onClick={() => handleBuy(track)}
                      className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs rounded-full flex items-center gap-1.5 transition"
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
    </div>
  );
}

