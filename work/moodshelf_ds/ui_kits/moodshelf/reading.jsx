/* MoodShelf UI-kit reading primitives: EmotionTag, BookCover, AuraOrb,
   ShelfCard. Faithful copies of /components/reading. Exported to window. */

function EmotionTag({ emotion, color, children, size = 'md', onRemove, style = {}, ...rest }) {
  const EMO = { joy: 'joy', heartbreak: 'heartbreak', comfort: 'comfort', longing: 'longing', eerie: 'eerie', tender: 'tender', wonder: 'wonder', rage: 'rage' };
  const key = EMO[emotion];
  const fill = color || (key ? `var(--emo-${key})` : 'var(--clay-400)');
  const fg = key ? `var(--emo-${key}-on)` : '#FFF7E8';
  const sizes = { sm: { fz: '15px', pad: '2px 10px', h: '24px' }, md: { fz: '18px', pad: '3px 13px', h: '30px' }, lg: { fz: '22px', pad: '4px 16px', h: '38px' } };
  const s = sizes[size] || sizes.md;
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px', height: s.h, padding: s.pad,
      background: fill, color: fg, fontFamily: 'var(--font-hand)', fontWeight: 600, fontSize: s.fz,
      lineHeight: 1, borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-xs)', transform: 'rotate(-1deg)', ...style,
    }}>
      {children}
      {onRemove && <button onClick={onRemove} aria-label="Remove tag" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: fg, opacity: 0.7, padding: 0, lineHeight: 1, fontSize: s.fz }}>×</button>}
    </span>
  );
}

const MS_PALETTES = [
  { bg: '#3B2D20', fg: '#EAD8B8', rule: '#C8913A' },
  { bg: '#5E211E', fg: '#F0D9C8', rule: '#DCA94F' },
  { bg: '#4C583F', fg: '#E7E9D4', rule: '#C9B26A' },
  { bg: '#3C4A5A', fg: '#DCE6EE', rule: '#A9BBCB' },
  { bg: '#4C3050', fg: '#ECDDEC', rule: '#C79BC4' },
  { bg: '#1F1712', fg: '#E7D2A6', rule: '#C8913A' },
  { bg: '#B5786A', fg: '#FDF2EC', rule: '#FFFFFF' },
  { bg: '#E7D8BE', fg: '#3B2D20', rule: '#7A2E2A' },
];
function msPick(title = '') { let h = 0; for (let i = 0; i < title.length; i++) h = (h * 31 + title.charCodeAt(i)) >>> 0; return MS_PALETTES[h % MS_PALETTES.length]; }

function BookCover({ title = '', author = '', src, width = 120, palette, spine = true, style = {}, ...rest }) {
  const height = Math.round(width * 1.5);
  const p = palette || msPick(title);
  return (
    <div {...rest} style={{ position: 'relative', width, height, borderRadius: 'var(--radius-book)', boxShadow: 'var(--shadow-book)', overflow: 'hidden', flexShrink: 0, ...style }}>
      {src ? (
        <img src={src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <div style={{ width: '100%', height: '100%', background: p.bg, color: p.fg, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: `${width * 0.11}px ${width * 0.11}px ${width * 0.1}px`, boxSizing: 'border-box' }}>
          <div style={{ width: '30%', height: '2px', background: p.rule, opacity: 0.9 }} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: width * 0.155, lineHeight: 1.05, letterSpacing: '-0.01em', textWrap: 'balance' }}>{title}</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: width * 0.072, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.82 }}>{author}</div>
        </div>
      )}
      {spine && (<>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.06) 7%, rgba(0,0,0,0) 16%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '2px', background: 'rgba(255,255,255,0.14)', pointerEvents: 'none' }} />
      </>)}
    </div>
  );
}

function AuraOrb({ colors = ['var(--emo-longing)', 'var(--emo-wonder)', 'var(--emo-joy)'], size = 180, label, caption, style = {}, ...rest }) {
  const stops = colors.length === 1 ? `${colors[0]}, ${colors[0]}` : colors.map((c, i) => `${c} ${Math.round((i / (colors.length - 1)) * 100)}%`).join(', ');
  return (
    <div {...rest} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '14px', ...style }}>
      <div style={{ position: 'relative', width: size, height: size, borderRadius: '50%', background: `conic-gradient(from 210deg, ${stops}, ${colors[0]})`, filter: 'saturate(1.05)', boxShadow: 'var(--glow-aura), inset 0 0 40px rgba(255,255,255,0.18), inset 0 -10px 30px rgba(0,0,0,0.25)' }}>
        <div style={{ position: 'absolute', inset: '24%', borderRadius: '50%', background: 'radial-gradient(circle at 38% 32%, rgba(255,248,232,0.55), rgba(255,248,232,0) 60%)' }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)' }} />
        {label && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600, fontSize: size * 0.16, color: '#FFF7E8', textShadow: '0 1px 8px rgba(40,24,10,0.45)', textAlign: 'center', padding: '0 14%', lineHeight: 1.05 }}>{label}</div>}
      </div>
      {caption && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-2xs)', fontWeight: 600, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{caption}</div>}
    </div>
  );
}

function ShelfCard({ name = '', count, books = [], tone = 'paper', onClick, style = {}, ...rest }) {
  const inverse = tone === 'inverse';
  const shown = books.slice(0, 4);
  return (
    <div {...rest} onClick={onClick} style={{
      position: 'relative', borderRadius: 'var(--radius-lg)', padding: '18px 18px 0',
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)', backgroundImage: inverse ? 'var(--texture-vignette)' : 'none',
      color: inverse ? 'var(--text-on-dark)' : 'var(--text-body)', border: inverse ? '1px solid var(--border-on-dark)' : '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)', cursor: onClick ? 'pointer' : 'default', overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)', ...style,
    }}
      onMouseEnter={onClick ? (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } : undefined}
      onMouseLeave={onClick ? (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; } : undefined}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '10px', marginBottom: '14px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-title-3)', lineHeight: 1.05, color: inverse ? 'var(--text-on-dark)' : 'var(--text-strong)' }}>{name}</h3>
        {count != null && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)', fontWeight: 600, color: inverse ? 'var(--text-on-dark-muted)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>{count} {count === 1 ? 'book' : 'books'}</span>}
      </div>
      <div style={{ position: 'relative', height: '116px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', paddingLeft: '4px' }}>
          {shown.map((b, i) => (
            <BookCover key={i} title={b.title} author={b.author} src={b.src} palette={b.palette} width={70}
              style={{ marginLeft: i === 0 ? 0 : '-22px', transform: `rotate(${(i - 1.5) * 2.2}deg)`, transformOrigin: 'bottom center', zIndex: i }} />
          ))}
        </div>
        <div style={{ position: 'absolute', left: '-18px', right: '-18px', bottom: 0, height: '10px', background: inverse ? 'linear-gradient(180deg, #3a2c1d, #271c10)' : 'linear-gradient(180deg, #c9a878, #a9824f)', boxShadow: '0 -8px 14px -8px rgba(40,24,10,0.45)' }} />
      </div>
    </div>
  );
}

window.MSKit = Object.assign(window.MSKit || {}, { EmotionTag, BookCover, AuraOrb, ShelfCard });
