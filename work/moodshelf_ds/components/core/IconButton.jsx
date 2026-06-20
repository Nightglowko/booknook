import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Circular icon button for toolbars, app bars, card corners.
 * Variants: ghost (default), soft (tinted), solid (ink), glass (on imagery).
 */
export function IconButton({
  name,
  variant = 'ghost',
  size = 40,
  iconSize,
  active = false,
  label,
  style = {},
  ...rest
}) {
  const variants = {
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    soft: { background: 'var(--surface-sunken)', color: 'var(--text-strong)', border: '1px solid var(--border)' },
    solid: { background: 'var(--ink-800)', color: 'var(--paper-100)', border: '1px solid transparent' },
    glass: { background: 'rgba(30,20,12,0.42)', color: '#F6ECD8', border: '1px solid rgba(246,236,216,0.22)', backdropFilter: 'blur(8px)' },
  };
  const activeStyle = active
    ? { background: 'var(--accent-soft)', color: 'var(--accent-deep)', border: '1px solid transparent' }
    : {};

  return (
    <button
      {...rest}
      aria-label={label || name}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
        ...variants[variant],
        ...activeStyle,
        ...style,
      }}
      onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.9)'; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <Icon name={name} size={iconSize || Math.round(size * 0.5)} fill={active && name === 'heart' ? 'currentColor' : 'none'} />
    </button>
  );
}
