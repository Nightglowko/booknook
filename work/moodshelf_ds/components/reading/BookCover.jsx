import React from 'react';

/**
 * BookCover — a book rendered as a treasured object (Letterboxd-for-books).
 * If `src` is given, shows the real cover image. Otherwise generates a
 * designed typographic cover from title/author + a warm palette.
 * Casts a directional shelf shadow.
 */
const PALETTES = [
  { bg: '#3B2D20', fg: '#EAD8B8', rule: '#C8913A' }, // espresso
  { bg: '#5E211E', fg: '#F0D9C8', rule: '#DCA94F' }, // oxblood
  { bg: '#4C583F', fg: '#E7E9D4', rule: '#C9B26A' }, // sage
  { bg: '#3C4A5A', fg: '#DCE6EE', rule: '#A9BBCB' }, // dusk
  { bg: '#4C3050', fg: '#ECDDEC', rule: '#C79BC4' }, // plum
  { bg: '#1F1712', fg: '#E7D2A6', rule: '#C8913A' }, // ink
  { bg: '#B5786A', fg: '#FDF2EC', rule: '#FFFFFF' }, // rose
  { bg: '#E7D8BE', fg: '#3B2D20', rule: '#7A2E2A' }, // parchment
];

function pick(title = '') {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) >>> 0;
  return PALETTES[h % PALETTES.length];
}

export function BookCover({
  title = '',
  author = '',
  src,
  width = 120,
  palette,
  spine = true,
  style = {},
  ...rest
}) {
  const height = Math.round(width * 1.5);
  const p = palette || pick(title);

  return (
    <div
      {...rest}
      style={{
        position: 'relative',
        width,
        height,
        borderRadius: 'var(--radius-book)',
        boxShadow: 'var(--shadow-book)',
        overflow: 'hidden',
        flexShrink: 0,
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: p.bg,
            color: p.fg,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: `${width * 0.11}px ${width * 0.11}px ${width * 0.1}px`,
            boxSizing: 'border-box',
          }}
        >
          <div style={{ width: '30%', height: '2px', background: p.rule, opacity: 0.9 }} />
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: width * 0.155,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              textWrap: 'balance',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: width * 0.072,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.82,
            }}
          >
            {author}
          </div>
        </div>
      )}

      {/* spine shading + page edge highlight */}
      {spine && (
        <>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.06) 7%, rgba(0,0,0,0) 16%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', background: 'rgba(255,255,255,0.14)', pointerEvents: 'none' }} />
        </>
      )}
    </div>
  );
}
