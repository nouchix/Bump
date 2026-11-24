import type { Metadata } from 'next';
import './globals.css';
import { PlayerProvider } from '@/context/PlayerContext';
import AudioPlayerBar from '@/components/AudioPlayerBar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bump — Your sound, your stage. (100% of music sales to artists)',
  description: 'Stream independent music for free. Artists set their own price and keep 100% of every sale, paid directly via Stripe Connect.',
  icons: {
    icon: '/assets/logo/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-void text-static min-h-screen pb-24 antialiased selection:bg-signal selection:text-white">
        <PlayerProvider>
          {/* Top Launch Banner */}
          <a
            href="https://www.eventbrite.com/e/black-friday-marketplace-philly-4-real-tv-awards-ceremony-tickets-2004528782549"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-2.5 bg-signal text-ink-950 text-xs sm:text-sm font-semibold text-center hover:bg-signal-400 transition"
          >
            <span className="font-bold">Launching live in Philly</span>
            <span className="hidden sm:inline">· Black Friday Marketplace · Fri, Nov 27 · KANVAS Venue</span>
            <span className="underline underline-offset-4">Get tickets</span>
          </a>

          {/* Sticky Header */}
          <header className="border-b border-ink-850 bg-void/80 sticky top-0 z-40 backdrop-blur-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <img src="/assets/logo/bump-lockup-horizontal.svg" alt="Bump" className="h-7 w-auto" />
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-ink-850 text-ink-300 border border-ink-800 font-medium tracking-wide">
                  100% to Artist
                </span>
              </Link>
              <nav className="flex items-center gap-5 text-sm font-medium">
                <Link href="/#artists" className="text-ink-400 hover:text-static transition hidden md:inline-block">
                  For Artists
                </Link>
                <Link href="/#listeners" className="text-ink-400 hover:text-static transition hidden md:inline-block">
                  Browse
                </Link>
                <Link
                  href="/upload"
                  className="px-4 py-2 rounded-xl bg-signal hover:bg-signal-400 text-ink-950 font-bold transition flex items-center gap-2"
                >
                  Upload Track
                </Link>
                <Link href="/login" className="text-ink-400 hover:text-static transition">
                  Sign In
                </Link>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <AudioPlayerBar />
        </PlayerProvider>
      </body>
    </html>
  );
}
