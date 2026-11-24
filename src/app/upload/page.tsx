'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { UploadCloud, Music, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverArtFile, setCoverArtFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('1.99');
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleAudioUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audioFile || !title) {
      setErrorMsg('Please provide an audio file and a title.');
      return;
    }

    setIsUploading(true);
    setErrorMsg(null);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('You must be signed in to upload tracks.');
      }

      // 1. Upload audio file to Supabase Storage ('audio-files')
      const audioExt = audioFile.name.split('.').pop();
      const audioPath = `${user.id}/${Date.now()}.${audioExt}`;
      const { data: audioData, error: audioErr } = await supabase.storage
        .from('audio-files')
        .upload(audioPath, audioFile, { upsert: false });

      if (audioErr) throw audioErr;

      const { data: audioUrlData } = supabase.storage
        .from('audio-files')
        .getPublicUrl(audioPath);

      // 2. Upload cover art if provided
      let coverArtUrl: string | undefined = undefined;
      if (coverArtFile) {
        const coverExt = coverArtFile.name.split('.').pop();
        const coverPath = `${user.id}/${Date.now()}.${coverExt}`;
        const { error: coverErr } = await supabase.storage
          .from('cover-art')
          .upload(coverPath, coverArtFile, { upsert: false });

        if (!coverErr) {
          const { data: coverUrlData } = supabase.storage
            .from('cover-art')
            .getPublicUrl(coverPath);
          coverArtUrl = coverUrlData.publicUrl;
        }
      }

      // 3. Insert record into tracks table
      const priceCents = Math.round(parseFloat(price || '0') * 100);

      const { error: insertErr } = await supabase.from('tracks').insert({
        artist_id: user.id,
        title,
        cover_art_url: coverArtUrl,
        audio_file_url: audioUrlData.publicUrl,
        price_cents: priceCents,
        is_published: true,
      });

      if (insertErr) throw insertErr;

      router.push('/');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to upload track');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-extrabold mb-2 text-white">Upload Your Music</h1>
      <p className="text-zinc-400 text-sm mb-6">
        Direct upload to global CDN. You set your price and keep 100% of sales.
      </p>

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-950 border border-red-800 text-red-200 text-sm rounded">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleAudioUpload} className="space-y-6 bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl">
        {/* Track Title */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
            Track Title
          </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Midnight Horizon"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Audio File Input */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
            Audio File (MP3 320kbps recommended)
          </label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-700 hover:border-amber-500 rounded-lg p-6 cursor-pointer bg-zinc-950 transition">
            <Music className="w-8 h-8 text-amber-500 mb-2" />
            <span className="text-sm font-medium text-zinc-300">
              {audioFile ? audioFile.name : 'Select or drop MP3 file'}
            </span>
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>

        {/* Cover Art Input */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
            Cover Artwork (Optional)
          </label>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-700 hover:border-amber-500 rounded-lg p-4 cursor-pointer bg-zinc-950 transition">
            <ImageIcon className="w-6 h-6 text-zinc-500 mb-1" />
            <span className="text-xs text-zinc-400">
              {coverArtFile ? coverArtFile.name : 'Upload square artwork (JPG, PNG)'}
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setCoverArtFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>

        {/* Price in USD */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
            Download Price (USD) — Set to 0 for Free
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-zinc-400 text-sm">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-700 rounded-lg pl-8 pr-4 py-2.5 text-white focus:outline-none focus:border-amber-500"
            />
          </div>
          <p className="text-xs text-zinc-500 mt-1">100% of this amount goes directly to you via Stripe.</p>
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isUploading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Publishing Track to CDN...
            </>
          ) : (
            <>
              <UploadCloud className="w-5 h-5" />
              Publish Track Now
            </>
          )}
        </button>
      </form>
    </div>
  );
}

