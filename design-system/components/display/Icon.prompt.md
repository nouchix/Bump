Renders a Lucide icon at the brand stroke (2px, rounded) — use for every glyph in Bump UI.
```jsx
<Icon name="play" size={24} fill="currentColor" />
<Icon name="shopping-cart" size={14} />
```
- Page must load `https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js` before the bundle.
- Filled glyphs (play/pause in the player) use `fill="currentColor"`; everything else is stroke-only.
