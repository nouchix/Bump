'use client';

import React from 'react';
import { usePlayer } from '@/context/PlayerContext';
import { Play, Pause, Volume2, Disc3 } from 'lucide-react';

export default function AudioPlayerBar() {
  const { currentTrack, isPlaying, togglePlay, currentTime, duration, seek } = usePlayer();

  if (!currentTrack) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = Math.floor(secs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-zinc-950/95 border-t border-zinc-800 backdrop-blur px-6 flex items-center justify-between z-50">
      {/* Left: Track Info */}
      <div className="flex items-center gap-3 w-1/4 min-w-[200px]">
        {currentTrack.cover_art_url ? (
          <img
            src={currentTrack.cover_art_url}
            alt={currentTrack.title}
            className="w-12 h-12 rounded object-cover border border-zinc-800"
          />
        ) : (
          <div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center text-zinc-500">
            <Disc3 className="w-6 h-6 animate-spin-slow" />
          </div>
        )}
        <div className="truncate">
          <p className="text-sm font-semibold text-white truncate">{currentTrack.title}</p>
          <p className="text-xs text-zinc-400 truncate">
            {currentTrack.artist_name || 'Independent Artist'}
          </p>
        </div>
      </div>

      {/* Center: Controls & Scrubber */}
      <div className="flex flex-col items-center gap-1 w-2/4 max-w-xl">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black transition"
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
        </button>

        <div className="w-full flex items-center gap-3 text-xs text-zinc-400">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full accent-amber-500 h-1 bg-zinc-800 rounded cursor-pointer"
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Price & Direct Buy */}
      <div className="flex items-center justify-end gap-4 w-1/4 min-w-[150px]">
        {currentTrack.price_cents > 0 ? (
          <a
            href={`/track/${currentTrack.id}`}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 hover:bg-amber-500/30 transition"
          >
            Buy ${(currentTrack.price_cents / 100).toFixed(2)} (100% to Artist)
          </a>
        ) : (
          <span className="text-xs text-zinc-500">Free Stream</span>
        )}
      </div>
    </div>
  );
}

