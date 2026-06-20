Renders a book as a treasured object. With `src` it shows the real cover; without one it generates a designed typographic cover (palette derived from the title) so empty libraries still look beautiful. Always 2:3 ratio with a directional shelf shadow.

```jsx
<BookCover title="The Secret History" author="Donna Tartt" width={132} />
<BookCover src="/covers/piranesi.jpg" title="Piranesi" width={96} />
```

Control with `width` (height auto), `palette`, `spine`.
