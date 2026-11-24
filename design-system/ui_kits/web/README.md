# Bump web app — UI kit
Click-through recreation of the Next.js app in [nouchix/Bump](https://github.com/nouchix/Bump), re-skinned with the brand palette (the repo still ships amber/zinc placeholders).

Screens (hash-routed: `#home`, `#login`, `#upload`, `#consent`)
- **HomeScreen.jsx** ← `src/app/page.tsx` — feed grid of TrackCards, empty state.
- **LoginScreen.jsx** ← `src/app/login/page.tsx` — Spotify/Google OAuth, magic link.
- **UploadScreen.jsx** ← `src/app/upload/page.tsx` — title, audio + cover dropzones, price, publish.
- **ConsentScreen.jsx** ← `src/app/oauth/consent/page.tsx`.
- Shell (App.jsx) ← `src/app/layout.tsx` + `src/components/AudioPlayerBar.tsx`.

Interactions: play/pause any track (player bar appears and ticks), Buy opens a checkout toast, Upload → "Use a sample file" → Publish adds the track to the feed and fires the "It's live" toast.
