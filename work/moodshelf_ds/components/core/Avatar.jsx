import React from 'react';

/**
 * Avatar with a warm ring. Falls back to initials on a tinted plate.
 * Pass `src` for a photo, otherwise `name` renders initials.
 */
export function Avatar({ src, name = '', size = 44, ring = true, style = {}, ...rest }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const tints = ['var(--plum-300)', 'var(--candle-300)', 'var(--sage-300)', 'var(--rose-400)', 'var(--dusk-300)'];
  const tint = tints[(name.charCodeAt(0) || 0) % tints.length];

  return (
    <div
      {...rest}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        padding: ring ? '2px' : 0,
        background: ring ? 'var(--surface-card)' : 'transparent',
        boxShadow: ring ? '0 0 0 1.5px var(--accent), var(--shadow-xs)' : 'none',
        flexShrink: 0,
        ...style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: src ? 'var(--surface-sunken)' : tint,
          backgroundImage: src ? `url(${src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'var(--ink-800)',
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: size * 0.4,
          lineHeight: 1,
        }}
      >
        {!src && initials}
      </div>
    </div>
  );
}
