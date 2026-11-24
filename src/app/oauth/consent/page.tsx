'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

function ConsentForm() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get('client_id');
  const scope = searchParams.get('scope') || 'profile email';

  return (
    <div className="max-w-md mx-auto py-16">
      <div className="bg-zinc-900/70 border border-zinc-800 p-8 rounded-2xl text-center shadow-xl">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center mb-4">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-white mb-2">Authorize Third-Party Application</h1>
        <p className="text-xs text-zinc-400 mb-6">
          An application (<code className="text-amber-400">{clientId || 'Unknown'}</code>) is requesting access to your Bump account.
        </p>

        <div className="bg-zinc-950 p-4 rounded-lg text-left text-xs mb-6 border border-zinc-800">
          <span className="font-semibold text-zinc-300 block mb-1">Requested Permissions:</span>
          <div className="text-zinc-400">{scope}</div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => window.history.back()}
            className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => alert('Consent confirmed')}
            className="flex-1 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-xs font-bold text-black transition"
          >
            Authorize
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OAuthConsentPage() {
  return (
    <Suspense fallback={<div className="text-center py-16 text-zinc-500 text-xs">Loading authorization screen...</div>}>
      <ConsentForm />
    </Suspense>
  );
}

