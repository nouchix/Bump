'use client';

import React, { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Music, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const supabase = createClient();

  const handleOAuthLogin = async (provider: 'spotify' | 'google') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
      setSent(true);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-2xl text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome to Bump</h1>
        <p className="text-xs text-zinc-400 mb-6">
          Sign in to stream, support artists, or upload your own catalogue.
        </p>

        {errorMsg && (
          <div className="mb-4 p-2.5 bg-red-950 border border-red-800 text-red-200 text-xs rounded">
            {errorMsg}
          </div>
        )}

        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleOAuthLogin('spotify')}
            className="w-full py-2.5 px-4 bg-[#1DB954] hover:bg-[#1aa34a] text-black font-bold rounded-lg text-sm flex items-center justify-center gap-2 transition"
          >
            <Music className="w-4 h-4 fill-current" />
            Continue with Spotify
          </button>
          <button
            onClick={() => handleOAuthLogin('google')}
            className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg text-sm flex items-center justify-center gap-2 transition"
          >
            Continue with Google
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-zinc-900 px-2 text-zinc-500">Or with Email</span>
          </div>
        </div>

        {sent ? (
          <div className="p-4 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-lg text-xs">
            Magic login link sent to <strong>{email}</strong>. Check your inbox!
          </div>
        ) : (
          <form onSubmit={handleMagicLink} className="space-y-3 text-left">
            <div>
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg text-sm transition flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              <Mail className="w-4 h-4" />
              {loading ? 'Sending link...' : 'Send Magic Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

