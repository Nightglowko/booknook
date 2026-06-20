import React from 'react';

/**
 * AuraOrb — a soft glowing orb that visualizes a reader's emotional
 * mix (their "reading aura"). Blends 2–4 emotion colors into a living
 * gradient with a candlelit glow. Used in recaps and profiles.
 */
export function AuraOrb({
  colors = ['var(--emo-longing)', 'var(--emo-wonder)', 'var(--emo-joy)'],
  size = 180,
  label,
  caption,
  style = {},
  ...rest
}) {
  const stops = colors.length === 1
    ? `${colors[0]}, ${colors[0]}`
    : colors.map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`).join(', ');

  return (
    <div {...rest} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '14px', ...style }}>
      <div
        style={{
          position: 'relative',
          width: size,
          height: size,
          borderRadius: '50%',
          background: `conic-gradient(from 210deg, ${stops}, ${colors[0]})`,
          filter: 'saturate(1.05)',
          boxShadow: 'var(--glow-aura), inset 0 0 40px rgba(255,255,255,0.18), inset 0 -10px 30px rgba(0,0,0,0.25)',
        }}
      >
        {/* inner light core */}
        <div style={{
          position: 'absolute', inset: '24%', borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 32%, rgba(255,248,232,0.55), rgba(255,248,232,0) 60%)',
        }} />
        {/* soft rim */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)',
        }} />
        {label && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600,
            fontSize: size * 0.16, color: '#FFF7E8', textShadow: '0 1px 8px rgba(40,24,10,0.45)',
            textAlign: 'center', padding: '0 14%', lineHeight: 1.05,
          }}>
            {label}
          </div>
        )}
      </div>
      {caption && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', fontWeight: 600,
          letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>
          {caption}
        </div>
      )}
    </div>
  );
}
