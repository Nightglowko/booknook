import React from 'react';

/**
 * Surface container. The fundamental "treasured object" plate.
 * tone: paper (default) | raised | sunken | inverse (dark moody)
 * Use `interactive` for hover lift on tappable cards.
 */
export function Card({
  tone = 'paper',
  pad = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    paper:   { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border)' },
    raised:  { background: 'var(--surface-raised)', color: 'var(--text-body)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' },
    sunken:  { background: 'var(--surface-sunken)', color: 'var(--text-body)', border: '1px solid var(--border)' },
    inverse: { background: 'var(--surface-inverse)', backgroundImage: 'var(--texture-vignette)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' },
  };
  const pads = { none: '0', sm: '14px', md: '18px', lg: '24px' };

  return (
    <div
      {...rest}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: pads[pad],
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        cursor: interactive ? 'pointer' : 'default',
        ...tones[tone],
        ...style,
      }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = tones[tone].boxShadow || 'none';
      } : undefined}
    >
      {children}
    </div>
  );
}
