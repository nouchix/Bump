'use client';

import React from 'react';
import { Smartphone, Apple, Play, Download, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function MobileDownloadPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Showcase */}
      <div className="text-center space-y-5 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-signal/20 text-signal border border-signal/30">
          <Smartphone className="w-3.5 h-3.5" /> Mobile Experience
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Bump in your pocket.
        </h1>
        <p className="text-lg text-ink-300 leading-relaxed">
          Stream music with lockscreen controls, support artists with 1-click purchases, or install Bump instantly as a Progressive Web App right now.
        </p>

        {/* Store Download CTAs */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button
            onClick={() => alert('iOS App Store submission currently in review. You can install Bump directly to your home screen right now!')}
            className="flex items-center gap-3 px-6 py-3.5 bg-grille border border-ink-700 hover:border-ink-500 rounded-2xl transition group"
          >
            <Apple className="w-6 h-6 text-white group-hover:text-signal transition" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-mono tracking-wider text-ink-400">Download on the</span>
              <span className="text-sm font-bold text-static">Apple App Store</span>
            </div>
          </button>

          <button
            onClick={() => alert('Google Play submission currently in review. You can install Bump directly to your home screen right now!')}
            className="flex items-center gap-3 px-6 py-3.5 bg-grille border border-ink-700 hover:border-ink-500 rounded-2xl transition group"
          >
            <Play className="w-6 h-6 text-white group-hover:text-pulse transition fill-current" />
            <div className="text-left">
              <span className="block text-[10px] uppercase font-mono tracking-wider text-ink-400">Get it on</span>
              <span className="text-sm font-bold text-static">Google Play</span>
            </div>
          </button>
        </div>
      </div>

      {/* Instant PWA Install Guide */}
      <div className="p-8 sm:p-10 rounded-2xl bg-grille border border-ink-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold uppercase text-signal">No App Store Required</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold">Install Bump Instantly (PWA)</h2>
          <p className="text-sm text-ink-400 leading-relaxed">
            You don't have to wait for app store approvals. Bump is built with native Progressive Web App technology. Add it to your phone’s home screen for full offline caching and native audio background playback.
          </p>

          <div className="space-y-3 pt-2 text-sm text-ink-300">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-signal px-2 py-0.5 rounded bg-ink-900 border border-ink-800">iOS</span>
              <span>Tap the <strong>Share</strong> button in Safari, then tap <strong>"Add to Home Screen"</strong>.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold text-pulse px-2 py-0.5 rounded bg-ink-900 border border-ink-800">Android</span>
              <span>Tap the <strong>three dots menu</strong> in Chrome, then tap <strong>"Install App"</strong>.</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 bg-ink-950 border border-ink-800 rounded-3xl p-6 text-center space-y-4 shadow-2xl">
            <img src="/assets/logo/bump-app-icon.svg" alt="Bump App Icon" className="w-20 h-20 mx-auto rounded-2xl shadow-lg" />
            <div>
              <h3 className="font-bold text-white text-base">Bump Mobile</h3>
              <p className="text-xs text-ink-400">Version 1.0 · Ready to Install</p>
            </div>
            <Link
              href="/"
              className="block w-full py-2.5 bg-signal hover:bg-signal-400 text-ink-950 font-bold rounded-xl text-xs transition"
            >
              Open Web Player
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
