-- ==============================================================================
-- BUMP (ArtistFirst MVP) — Full Supabase Database Schema & RLS Policies
-- Paste this script directly into the Supabase Dashboard SQL Editor
-- ==============================================================================

-- 1. Profiles Table (Extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  phone TEXT,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT CHECK (role IN ('listener', 'artist')) DEFAULT 'listener',
  stripe_account_id TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" 
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Automatically sync auth.users inserts to profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'),
    'listener'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 3. Tracks Table
CREATE TABLE IF NOT EXISTS public.tracks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  artist_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  cover_art_url TEXT,
  audio_file_url TEXT NOT NULL,
  duration INTEGER DEFAULT 0, -- Duration in seconds
  price_cents INTEGER DEFAULT 0, -- 0 for free stream, e.g. 199 for $1.99
  is_published BOOLEAN DEFAULT TRUE,
  tags TEXT[] DEFAULT '{}',
  play_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on tracks
ALTER TABLE public.tracks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published tracks" 
ON public.tracks FOR SELECT 
USING (is_published = TRUE OR auth.uid() = artist_id);

CREATE POLICY "Artists can insert their own tracks" 
ON public.tracks FOR INSERT 
WITH CHECK (auth.uid() = artist_id);

CREATE POLICY "Artists can update their own tracks" 
ON public.tracks FOR UPDATE 
USING (auth.uid() = artist_id);

CREATE POLICY "Artists can delete their own tracks" 
ON public.tracks FOR DELETE 
USING (auth.uid() = artist_id);

-- 4. Sales Table (100% Payout Tracking)
CREATE TABLE IF NOT EXISTS public.sales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  track_id UUID REFERENCES public.tracks(id) ON DELETE SET NULL,
  buyer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  artist_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  amount_cents INTEGER NOT NULL,
  stripe_payment_id TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on sales
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Buyers can view their purchases" 
ON public.sales FOR SELECT 
USING (auth.uid() = buyer_id);

CREATE POLICY "Artists can view their sales" 
ON public.sales FOR SELECT 
USING (auth.uid() = artist_id);

-- 5. Plays Table (Anti-Cheat & Play Counting)
CREATE TABLE IF NOT EXISTS public.plays (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  track_id UUID REFERENCES public.tracks(id) ON DELETE CASCADE,
  listener_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  duration_listened_seconds INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.plays ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can record a play" 
ON public.plays FOR INSERT 
WITH CHECK (true);

-- 6. Storage Buckets Creation (Run via Supabase Storage UI or SQL if supported)
-- Bucket 1: 'audio-files' (Public bucket for fast CDN streaming)
-- Bucket 2: 'cover-art' (Public bucket for artwork)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('audio-files', 'audio-files', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('cover-art', 'cover-art', true)
ON CONFLICT (id) DO NOTHING;

-- Storage RLS
CREATE POLICY "Public read audio files" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'audio-files');

CREATE POLICY "Authenticated users upload audio" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'audio-files' AND auth.role() = 'authenticated');

CREATE POLICY "Public read cover art" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'cover-art');

CREATE POLICY "Authenticated users upload cover art" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'cover-art' AND auth.role() = 'authenticated');

