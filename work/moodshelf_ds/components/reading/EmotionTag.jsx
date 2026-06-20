import React from 'react';

/**
 * Emotion tag — the signature MoodShelf element. Handwritten, warm,
 * colored by emotion. Use for moods, vibes, feelings on a book.
 * Pass a known `emotion` for its hue, or `color` to override.
 */
const EMO = {
  joy: 'joy', heartbreak: 'heartbreak', comfort: 'comfort', longing: 'longing',
  eerie: 'eerie', tender: 'tender', wonder: 'wonder', rage: 'rage',
};

export function EmotionTag({ emotion, color, children, size = 'md', onRemove, style = {}, ...rest }) {
  const key = EMO[emotion];
  const fill = color || (key ? `var(--emo-${key})` : 'var(--clay-400)');
  const fg = key ? `var(--emo-${key}-on)` : '#FFF7E8';
  const sizes = {
    sm: { fz: '15px', pad: '2px 10px', h: '24px' },
    md: { fz: '18px', pad: '3px 13px', h: '30px' },
    lg: { fz: '22px', pad: '4px 16px', h: '38px' },
  };
  const s = sizes[size] || sizes.md;
  return (
    <span
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        height: s.h,
        padding: s.pad,
        background: fill,
        color: fg,
        fontFamily: 'var(--font-hand)',
        fontWeight: 600,
        fontSize: s.fz,
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-xs)',
        transform: 'rotate(-1deg)',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove tag"
          style={{
            border: 'none', background: 'transparent', cursor: 'pointer',
            color: fg, opacity: 0.7, padding: 0, lineHeight: 1, fontSize: s.fz,
          }}
        >×</button>
      )}
    </span>
  );
}
