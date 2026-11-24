80px blurred bottom bar that persists across every page while a track is loaded.
```jsx
<PlayerBar fixed track={{title:'Midnight Horizon',artist:'Nova Reyes',priceCents:199}} playing currentTime={42} duration={214} onToggle={toggle} onSeek={seek} />
```
- Pad page bottoms by `var(--player-height)` when fixed.
