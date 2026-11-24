Browse-grid tile for one track; mirrors the home feed card in the Bump web app.
```jsx
<TrackCard title="Midnight Horizon" artist="Nova Reyes" priceCents={199} verified active playing onPlay={toggle} onBuy={buy} />
```
- Free tracks (priceCents 0) show a "Free stream" badge instead of Buy.
- Lay out in a 1/2/3-column grid with 24px gap.
