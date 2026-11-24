'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export interface Track {
  id: string;
  title: string;
  artist_id: string;
  artist_name?: string;
  audio_file_url: string;
  cover_art_url?: string;
  price_cents: number;
  duration?: number;
}

interface PlayerContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  seek: (time: number) => void;
  currentTime: number;
  duration: number;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasLoggedPlayRef = useRef<boolean>(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();

      audioRef.current.ontimeupdate = () => {
        if (audioRef.current) {
          const curr = audioRef.current.currentTime;
          setCurrentTime(curr);

          // Anti-cheat / play count: record once listening reaches > 30 seconds
          if (curr >= 30 && !hasLoggedPlayRef.current && currentTrack) {
            hasLoggedPlayRef.current = true;
            fetch('/api/plays', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ trackId: currentTrack.id, duration: 30 }),
            }).catch(() => {});
          }
        }
      };

      audioRef.current.onloadedmetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };

      audioRef.current.onended = () => {
        setIsPlaying(false);
      };
    }
  }, [currentTrack]);

  const playTrack = (track: Track) => {
    if (audioRef.current) {
      if (currentTrack?.id !== track.id) {
        audioRef.current.src = track.audio_file_url;
        setCurrentTrack(track);
        hasLoggedPlayRef.current = false;
      }
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        togglePlay,
        seek,
        currentTime,
        duration,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayer must be used within PlayerProvider');
  return context;
};

