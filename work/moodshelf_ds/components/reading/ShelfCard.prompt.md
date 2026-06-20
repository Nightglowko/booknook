A themed-shelf preview tile — a few covers leaning together on a wooden ledge with the shelf name and count. The core unit of the home/library grid.

```jsx
<ShelfCard
  name="books that destroyed me"
  count={12}
  books={[{title:'A Little Life',author:'Yanagihara'}, {title:'Beloved',author:'Morrison'}]}
  onClick={open}
/>
<ShelfCard name="comfort reads" tone="inverse" books={books} />
```
