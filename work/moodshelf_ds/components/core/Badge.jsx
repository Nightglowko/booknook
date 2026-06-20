import React from 'react';

/**
 * Reading-status badge: where a book sits in your life.
 * status: reading | finished | want | dnf | favorite
 */
export function Badge({ status = 'reading', children, style = {}, ...rest }) {
  const map = {
    reading:  { label: 'Reading',      bg: 'var(--candle-100)', fg: 'var(--candle-700)', dot: 'var(--candle-500)' },
    finished: { label: 'Finished',     bg: 'var(--sage-100)',   fg: 'var(--sage-600)',   dot: 'var(--sage-500)' },
    want:     { label: 'Want to read', bg: 'var(--paper-200)',  fg: 'var(--ink-600)',    dot: 'var(--clay-400)' },
    dnf:      { label: 'Set down',     bg: 'var(--surface-sunken)', fg: 'var(--text-muted)', dot: 'var(--sand-300)' },
    favorite: { label: 'Beloved',      bg: 'var(--oxblood-200)', fg: 'var(--oxblood-700)', dot: 'var(--oxblood-600)' },
  };
  const t = map[status] || map.reading;
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        height: '24px',
        padding: '0 10px 0 8px',
        background: t.bg,
        color: t.fg,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--w-semibold)',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.dot }} />
      {children || t.label}
    </span>
  );
}
