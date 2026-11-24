'use client';

import React from 'react';
import { usePlayer } from '@/context/PlayerContext';
import { Play, Pause, Disc3 } from 'lucide-react';
import Link from 'next/link';

export default function AudioPlayerBar() {
  const { currentTrack, isPlaying, togglePlay, currentTime, duration, seek } = usePlayer();

  if (!currentTrack) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-void/90 border-t border-ink-850 backdrop-blur-lg px-6 flex items-center justify-between z-50">
      {/* Left: Track Info */}
      <div className="flex items-center gap-3.5 w-1/4 min-w-[200px]">
        {currentTrack.cover_art_url ? (
          <img
            src={currentTrack.cover_art_url}
            alt={currentTrack.title}
            className="w-12 h-12 rounded-xl object-cover border border-ink-800"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-ink-900 border border-ink-800 flex items-center justify-center text-ink-600">
            <Disc3 className="w-6 h-6 animate-spin-slow" />
          </div>
        )}
        <div className="truncate">
          <p className="text-sm font-bold text-static truncate">{currentTrack.title}</p>
          <p className="text-xs text-ink-400 truncate">
            {currentTrack.artist_name || 'Independent Artist'}
          </p>
        </div>
      </div>

      {/* Center: Controls & Scrubber */}
      <div className="flex flex-col items-center gap-1.5 w-2/4 max-w-xl">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-signal hover:bg-signal-400 text-ink-950 transition active:scale-95"
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        <div className="w-full flex items-center gap-3 text-xs font-mono text-ink-400">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full accent-signal h-1 bg-ink-800 rounded cursor-pointer"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Direct Buy */}
      <div className="flex items-center justify-end gap-4 w-1/4 min-w-[160px]">
        {currentTrack.price_cents > 0 ? (
          <button
            onClick={() => {
              fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  trackId: currentTrack.id,
                  artistId: currentTrack.artist_id,
                  title: currentTrack.title,
                  amountCents: currentTrack.price_cents,
                }),
              })
                .then((r) => r.json())
                .then((d) => d.url && (window.location.href = d.url));
            }}
            className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-signal/15 text-signal border border-signal/30 hover:bg-signal/25 transition"
          >
            Buy ${(currentTrack.price_cents / 100).toFixed(2)} (100% to Artist)
          </button>
        ) : (
          <span className="text-xs font-mono text-ink-500">Free Stream</span>
        )}
      </div>
    </div>
  );
}
