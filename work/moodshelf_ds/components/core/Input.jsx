import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Text / search field on sunken paper. Optional leading icon.
 * Variant "search" rounds fully into a pill.
 */
export function Input({
  icon,
  variant = 'default',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const isSearch = variant === 'search';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        height: 'var(--h-control)',
        padding: '0 16px',
        background: 'var(--surface-sunken)',
        border: '1px solid var(--border)',
        borderRadius: isSearch ? 'var(--radius-pill)' : 'var(--radius-md)',
        boxShadow: 'var(--shadow-inset)',
        transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
        ...wrapStyle,
      }}
      onFocusCapture={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
      onBlurCapture={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      {(icon || isSearch) && (
        <Icon name={icon || 'search'} size={18} style={{ color: 'var(--text-muted)' }} />
      )}
      <input
        {...rest}
        style={{
          flex: 1,
          minWidth: 0,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--text-strong)',
          ...style,
        }}
      />
    </div>
  );
}
