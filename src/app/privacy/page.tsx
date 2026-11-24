import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-ink-300">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
        <p className="text-xs font-mono text-ink-500">Effective Date: November 24, 2026 · Version 1.0</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
        <p className="text-sm leading-relaxed">
          We collect basic profile information provided during social login (such as your email address, name, and profile picture from Google or Spotify). For artists, we store uploaded track audio, artwork, and your connected Stripe account ID.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">2. Audio Streaming & Analytics</h2>
        <p className="text-sm leading-relaxed">
          When you listen to tracks on Bump, we record stream events (only after 30 seconds of continuous listening) to provide transparent play counts to artists and calculate anti-fraud metrics. We do not sell your personal data or listening history to third-party data brokers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white">3. Payment Information Security</h2>
        <p className="text-sm leading-relaxed">
          All financial transactions are conducted directly through Stripe. Bump never stores your credit card numbers, bank account numbers, or raw billing credentials on our servers.
        </p>
      </section>
    </div>
  );
}

