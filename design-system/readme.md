# Bump Design System

**Bump** is an artist-first music streaming and distribution platform. Independent artists, producers and DJs upload tracks, set their own download price, and keep **100% of music sales** (paid directly via Stripe Connect). Listeners stream for free and buy tracks direct from the artist.

Tagline: **"Your sound, your stage."** (alts: "Feel it." · "100% theirs. All yours.")

## Sources
- **Codebase:** https://github.com/nouchix/Bump (branch `main`) — Next.js 16 + Tailwind 3 + Supabase + Stripe MVP. Screens: home feed (`src/app/page.tsx`), login (`src/app/login/page.tsx`), upload (`src/app/upload/page.tsx`), OAuth consent (`src/app/oauth/consent/page.tsx`), shell (`src/app/layout.tsx`), player (`src/components/AudioPlayerBar.tsx`). Explore it further for data model (`supabase/migrations/…_init.sql`: profiles, tracks, sales, plays) and flows.
- **Brand brief** (pasted by the user): "BUMP — Brand Identity System" — palette, motion, voice, logo concept, app-icon spec.

**Important divergence:** the repo still ships placeholder styling (amber `#f59e0b` accent on Tailwind zinc, Arial). This system follows the **brand brief** (Void / Signal / Pulse, Space Grotesk) and keeps the repo's **layouts, structure and copy**. Map: amber-500 → Signal, zinc-950 → Void, zinc-900 → Grille, zinc-800 borders → `--border-subtle`.

## Products
- **Web app** (only product in source) — browse/stream feed, persistent bottom player, buy, upload, auth. UI kit: `ui_kits/web/`.
- Mobile app, marketing site, OG/email templates are mentioned in the brief's launch checklist but have no source yet.

---

## CONTENT FUNDAMENTALS
- **Person:** talk to the artist as **"you"**. Avoid platform-first "we". "You set your price and keep 100% of sales."
- **Tone:** direct, enthusiastic, plain. Playful but never hype. No exclamation-point spam (the repo's "Check your inbox!" becomes "Check your inbox.").
- **No jargon:** say "paid you directly", not "monetization", "payout rails", "revenue share".
- **Short declaratives, often two beats:** "It's live. Go tell people." · "Someone just paid you directly." · "Nothing yet. Fix that?"
- **The 100% promise is repeated** at every money moment: header badge "100% to Artist", player "Buy $1.99 (100% to Artist)", upload hint "100% of this amount goes directly to you via Stripe."
- **Casing:** sentence case everywhere ("Upload track", "Trending & new releases"). The repo's Title Case is legacy. Form labels are rendered uppercase via CSS.
- **Placeholders** start with "e.g." ("e.g. Midnight Horizon"). Loading copy uses ellipsis: "Sending link...", "Publishing Track to CDN...".
- **Emoji:** none. Unicode glyphs only for `·` separators and `—` in labels.
- **Fallback names:** "Independent Creator" / "Independent Artist" when no artist name.

## VISUAL FOUNDATIONS
- **Color:** dark-only. Background **Void #0A0A0F** (near-black, blue undertone). Surfaces **Grille #1C1C24**. Text **Static #F5F5F7**, secondary `--ink-400`. **Signal #FF3D5A** is the single loud accent: primary CTA, active/playing state, price, scrubber fill. **Pulse #7C5CFF** is secondary: verified artists (ring/check), gradients, rare secondary CTA. Brand chrome stays neutral so artist cover art carries the color.
- **Gradient:** Signal → Pulse at 135°, hero moments only — low opacity (≈15–20%) behind hero art, or as a hover glow border (`Card glow`). Never on app icon, buttons, or body backgrounds.
- **Type:** Space Grotesk throughout (700 for display/headings, 600 labels, 400 body); tight tracking −4% on display, −2% on headings. Space Mono for prices, timecodes, technical specs. Body is small (14px), captions 12px — the UI is dense like a music app.
- **Spacing:** 4px base. Page container max 1280px, 24px gutters, 32px vertical rhythm between sections, 24px grid gaps, 16px card padding (24–32 for forms/dialogs).
- **Corner radii:** 12–16px default (superellipse feel). Inputs/buttons 12, cards 16, dialogs 24, badges 6, inline commerce buttons and transport controls are pills/circles.
- **Cards:** Grille fill, 1px `--border-subtle` border, 16px radius, no shadow at rest. Hover brightens the border (`--border-default`). Only raised panels (dialogs, toasts) take `--shadow-lg/md`. No colored left-border accents.
- **Borders:** 1px hairlines everywhere; dashed 2px only for dropzones. Dividers are `--border-subtle`.
- **Shadows:** deep, soft black (`0 24px 64px rgba(0,0,0,.55)`) for floating layers; colored glow (`--shadow-glow-signal/pulse`) for focus/hero hover. No inner shadows.
- **Transparency & blur:** sticky header (80% Void) and player bar (92% Void) use `backdrop-filter: blur(16px)`. Modal scrim is 82% Void + 6px blur. Hover overlay on cover art: 55% Void with a Signal play glyph.
- **Motion:** never linear (spinners excepted). **The Bump** — every press scales to 96% and springs back with `cubic-bezier(0.34,1.56,0.64,1)` over 180ms. Color/opacity changes use ease-out-expo (`cubic-bezier(0.16,1,0.3,1)`) 140–240ms. Toasts/dialogs rise 8px + fade over 480ms. Playing tracks show a 5-bar breathing equalizer. Logo reveal (brief): arcs draw outward from center.
- **Hover:** accent buttons lighten (Signal → `--signal-400`); neutral buttons step one ink level up; ghost text goes secondary → primary; cards brighten border.
- **Press:** the Bump (scale .96, spring). No darkening.
- **Focus:** Signal border + 3px `--accent-soft` ring on inputs.
- **Imagery:** artist cover art is the color. Photography (brief): candid, high-contrast, night/dim venues, grain allowed, no stock smiles. No cover → `disc-3` icon on `--ink-800`.
- **Pattern:** dot grid fading into waveform peaks, for section dividers and email backgrounds (`guidelines/brand-pattern.html`).
- **Layout:** fixed elements are the 64px sticky header and the 80px fixed player bar (page padding-bottom = player height). Feed is a responsive 1/2/3-column grid. Forms are centered single columns (448px auth, 672px upload).

## ICONOGRAPHY
- The codebase uses **Lucide** (`lucide-react`). This system loads the **Lucide UMD build from CDN** (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`) and renders through the `Icon` component. No icon font, sprite, or PNG icons exist in the repo.
- Style: 2px stroke, rounded caps/joins, 24×24 grid. Play/Pause are **filled** (`fill="currentColor"`); everything else stroke-only.
- Icons in use: `play`, `pause`, `disc-3` (no-art placeholder), `shopping-cart`, `volume-2`, `music`, `mail`, `upload-cloud`, `image`, `loader-2`, `shield-check`, `badge-check` (verified), plus `check`, `x`, `chevron-down`, `radio`, `dollar-sign`.
- Sizes: 14–16px inline in buttons, 20–24px standalone, 32–48px in empty states/dropzones.
- No emoji. Unicode is limited to `·` and `—` in copy.

## LOGO
Files in `assets/logo/` (SVG) and the `Logo` component. Built from the brief's recommended simple version: **phone pill outline + AirPod (Signal) + three broadcast arcs** (speaker grille / Bluetooth wave / crossfader curve). Turntables are left to the wordmark per the brief.
- `bump-lockup-horizontal(.svg | -on-light.svg)` — primary: mark left, BUMP right.
- `bump-lockup-stacked.svg` — app/merch/album frames.
- `bump-mark*.svg` — icon only (two-colour, on-light, Signal, mono white/black).
- `bump-wordmark(-on-light).svg` — legal footers, video watermarks.
- `bump-app-icon.svg` — 1024 Void squircle, Signal mark at 62% height, flat.
- `favicon.svg` — 32px Void tile, Signal mark.
- Rules: AirPod always Signal in two-colour use; clear space = AirPod head diameter; min sizes mark 16px, lockup 20px tall; no gradients on the logo.
- Wordmark is Space Grotesk Bold (font embedded in the SVGs). The brief's custom letter tweaks (flat-bottom U, rounded M apexes, +5% P bowl) still need a type designer and are not drawn yet.

## DECISIONS
- **Amber is retired.** The repo's amber (#f59e0b) is a placeholder; every amber use maps to Signal #FF3D5A. When porting code: `amber-500` → `--accent`, `amber-400` hover → `--accent-hover`, `amber-500/10–30` tints → `--accent-soft` / `--accent-soft-border`.
- **Sentence case** for buttons, titles and labels ("Upload track", "Publish track", "Send magic link"). Form labels are sentence-cased text rendered uppercase via CSS. Proper nouns stay capitalised (Bump, Stripe, Spotify).

---

## Index
- `styles.css` — entry point; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing, radii, shadows, blur), `motion.css` (easings, durations, keyframes), `base.css`.
- `assets/fonts/` — Space Grotesk (variable) and Space Mono woff2, self-hosted.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Motion, Brand).
- `components/` — React primitives (namespace `window.BumpDesignSystem_4e5c17` in cards).
- `ui_kits/web/` — click-through web app recreation (`index.html`).
- `thumbnail.html`, `SKILL.md`, `github.md`.

### Components
- **actions/** — `Button`, `IconButton`
- **forms/** — `Field`, `Input`, `Select`, `Checkbox`, `Switch`, `Dropzone`
- **display/** — `Icon`, `Card`, `Badge`, `Avatar`, `Divider`
- **music/** — `TrackCard`, `PlayerBar`, `CoverArt`, `Equalizer`
- **feedback/** — `Alert`, `Toast`, `Dialog`, `Tooltip`
- **navigation/** — `AppHeader`, `Tabs`, `Wordmark`
- **brand/** — `Logo`

The repo has only one shared component (`AudioPlayerBar`); the rest are lifted from inline page markup (track card, auth card, dropzones, alerts, consent panel, header) or are a standard set sized to the brand.

### Intentional additions
- `Icon` — wrapper so Lucide renders without a bundler.
- `Logo` — brand mark built from the brief (not in repo).
- `Wordmark` — live-text BUMP for typographic use.
- `Avatar` (verified Pulse ring), `Equalizer`, `Toast` — specified by the brand brief, not yet in code.
- `Select`, `Checkbox`, `Switch`, `Tabs`, `Tooltip` — standard primitives not in the repo yet.
