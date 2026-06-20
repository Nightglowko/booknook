import React from 'react';

/**
 * MoodShelf primary button. Warm, tactile, candlelit.
 * Variants: primary (candle gold), secondary (ink outline),
 * ghost (text only), soft (tinted fill). Press = gentle shrink.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: { height: 'var(--h-control-sm)', padding: '0 16px', font: 'var(--text-sm)', radius: 'var(--radius-pill)' },
    md: { height: 'var(--h-control)', padding: '0 22px', font: 'var(--text-base)', radius: 'var(--radius-pill)' },
    lg: { height: '56px', padding: '0 30px', font: 'var(--text-lg)', radius: 'var(--radius-pill)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--accent)',
      backgroundImage: 'var(--wash-candle)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent',
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-deep)',
      border: '1px solid transparent',
    },
    danger: {
      background: 'var(--oxblood-600)',
      color: '#F4E6E2',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)',
    },
  };

  return (
    <button
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: full ? '100%' : 'auto',
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-sans)',
        fontSize: s.font,
        fontWeight: 'var(--w-semibold)',
        letterSpacing: '0.01em',
        borderRadius: s.radius,
        cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        ...variants[variant],
        ...style,
      }}
      onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.04)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
