import React from 'react';

/**
 * Segmented control for the app's view switches
 * (e.g. Reading · Finished · Want, or Grid · Spine · Cover).
 * Controlled: pass `value` and `onChange(optionValue)`.
 */
export function SegmentedControl({ options = [], value, onChange, style = {}, ...rest }) {
  return (
    <div
      {...rest}
      role="tablist"
      style={{
        display: 'inline-flex',
        padding: '4px',
        gap: '2px',
        background: 'var(--surface-sunken)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-pill)',
        ...style,
      }}
    >
      {options.map((opt) => {
        const v = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;
        const active = v === value;
        return (
          <button
            key={v}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(v)}
            style={{
              appearance: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '7px 16px',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--w-semibold)',
              color: active ? 'var(--text-on-accent)' : 'var(--text-muted)',
              background: active ? 'var(--accent)' : 'transparent',
              backgroundImage: active ? 'var(--wash-candle)' : 'none',
              boxShadow: active ? 'var(--shadow-xs)' : 'none',
              transition: 'color var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
