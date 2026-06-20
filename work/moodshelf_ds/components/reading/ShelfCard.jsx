import React from 'react';
import { BookCover } from './BookCover.jsx';

/**
 * ShelfCard — a themed shelf preview: a few covers leaning together
 * on a wooden ledge, with the shelf's name and count. The core unit
 * of the home/library grid.
 */
export function ShelfCard({
  name = '',
  count,
  books = [],
  tone = 'paper',
  onClick,
  style = {},
  ...rest
}) {
  const inverse = tone === 'inverse';
  const shown = books.slice(0, 4);

  return (
    <div
      {...rest}
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 18px 0',
        background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
        backgroundImage: inverse ? 'var(--texture-vignette)' : 'none',
        color: inverse ? 'var(--text-on-dark)' : 'var(--text-body)',
        border: inverse ? '1px solid var(--border-on-dark)' : '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        ...style,
      }}
      onMouseEnter={onClick ? (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } : undefined}
      onMouseLeave={onClick ? (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; } : undefined}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px', marginBottom: '14px' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-title-3)',
          lineHeight: 1.05, color: inverse ? 'var(--text-on-dark)' : 'var(--text-strong)',
        }}>
          {name}
        </h3>
        {count != null && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 600,
            color: inverse ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', whiteSpace: 'nowrap',
          }}>
            {count} {count === 1 ? 'book' : 'books'}
          </span>
        )}
      </div>

      {/* covers leaning on a ledge */}
      <div style={{ position: 'relative', height: '116px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0', paddingLeft: '4px' }}>
          {shown.map((b, i) => (
            <BookCover
              key={i}
              title={b.title}
              author={b.author}
              src={b.src}
              palette={b.palette}
              width={70}
              style={{
                marginLeft: i === 0 ? 0 : '-22px',
                transform: `rotate(${(i - 1.5) * 2.2}deg)`,
                transformOrigin: 'bottom center',
                zIndex: i,
              }}
            />
          ))}
        </div>
        {/* wooden ledge */}
        <div style={{
          position: 'absolute', left: '-18px', right: '-18px', bottom: 0, height: '10px',
          background: inverse
            ? 'linear-gradient(180deg, #3a2c1d, #271c10)'
            : 'linear-gradient(180deg, #c9a878, #a9824f)',
          boxShadow: '0 -8px 14px -8px rgba(40,24,10,0.45)',
        }} />
      </div>
    </div>
  );
}
