import type { Metadata } from 'next';
import './globals.css';
import { PlayerProvider } from '@/context/PlayerContext';
import AudioPlayerBar from '@/components/AudioPlayerBar';

export const metadata: Metadata = {
  title: 'Bump — Artist-First Music Platform (100% Revenue to Artists)',
  description: 'Stream, upload, and buy music where artists retain 100% of sales.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen pb-24 antialiased">
        <PlayerProvider>
          <header className="border-b border-zinc-800 bg-zinc-950/80 sticky top-0 z-40 backdrop-blur px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-amber-500 uppercase">BUMP</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-medium">100% to Artist</span>
            </a>
            <nav className="flex items-center gap-4 text-sm font-medium">
              <a href="/upload" className="px-3 py-1.5 rounded-md bg-amber-500 text-black hover:bg-amber-400 transition">
                Upload Track
              </a>
              <a href="/login" className="text-zinc-400 hover:text-white transition">
                Sign In
              </a>
            </nav>
          </header>

          <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>

          <AudioPlayerBar />
        </PlayerProvider>
      </body>
    </html>
  );
}

