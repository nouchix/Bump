Single-line text input — titles, emails, prices, search.
```jsx
<Input label="Track title" placeholder="e.g. Midnight Horizon" />
<Input prefix="$" type="number" defaultValue="1.99" />
<Input icon="search" placeholder="Search artists, tracks" />
```
- Passing label/hint/error wraps it in `Field`. Placeholder examples start with "e.g.".
