/* MoodShelf UI-kit primitives.
   Faithful, self-contained copies of the design-system components
   (same token-based styling) so the kit renders without the compiled
   bundle. Canonical source lives in /components. Exported to window. */

function Icon({ name, size = 20, strokeWidth = 1.75, fill = 'none', style = {}, ...rest }) {
  const ICONS = window.__MS_ICONS;
  return (
    <svg {...rest} viewBox="0 0 24 24" width={size} height={size} fill={fill}
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0, ...style }}
      dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }} />
  );
}

function Button({ variant = 'primary', size = 'md', full = false, iconLeft = null, iconRight = null, style = {}, children, ...rest }) {
  const sizes = {
    sm: { height: 'var(--h-control-sm)', padding: '0 16px', font: 'var(--text-sm)' },
    md: { height: 'var(--h-control)', padding: '0 22px', font: 'var(--text-base)' },
    lg: { height: '56px', padding: '0 30px', font: 'var(--text-lg)' },
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: 'var(--accent)', backgroundImage: 'var(--wash-candle)', color: 'var(--text-on-accent)', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
    secondary: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1.5px solid var(--border-strong)', boxShadow: 'var(--shadow-xs)' },
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    soft: { background: 'var(--accent-soft)', color: 'var(--accent-deep)', border: '1px solid transparent' },
    danger: { background: 'var(--oxblood-600)', color: '#F4E6E2', border: '1px solid transparent', boxShadow: 'var(--shadow-sm)' },
    glass: { background: 'rgba(246,236,216,0.12)', color: '#F6ECD8', border: '1px solid rgba(246,236,216,0.30)', backdropFilter: 'blur(6px)' },
  };
  return (
    <button {...rest} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
      width: full ? '100%' : 'auto', height: s.height, padding: s.padding,
      fontFamily: 'var(--font-sans)', fontSize: s.font, fontWeight: 'var(--w-semibold)',
      letterSpacing: '0.01em', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)',
      ...variants[variant], ...style,
    }}
      onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
      {iconLeft}{children}{iconRight}
    </button>
  );
}

function IconButton({ name, variant = 'ghost', size = 40, iconSize, active = false, label, style = {}, ...rest }) {
  const variants = {
    ghost: { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    soft: { background: 'var(--surface-sunken)', color: 'var(--text-strong)', border: '1px solid var(--border)' },
    solid: { background: 'var(--ink-800)', color: 'var(--paper-100)', border: '1px solid transparent' },
    glass: { background: 'rgba(30,20,12,0.42)', color: '#F6ECD8', border: '1px solid rgba(246,236,216,0.22)', backdropFilter: 'blur(8px)' },
  };
  const activeStyle = active ? { background: 'var(--accent-soft)', color: 'var(--accent-deep)', border: '1px solid transparent' } : {};
  return (
    <button {...rest} aria-label={label || name} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: 'var(--radius-pill)', cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft)', ...variants[variant], ...activeStyle, ...style,
    }}
      onPointerDown={(e) => { e.currentTarget.style.transform = 'scale(0.9)'; }}
      onPointerUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
      <Icon name={name} size={iconSize || Math.round(size * 0.5)} fill={active && name === 'heart' ? 'currentColor' : 'none'} />
    </button>
  );
}

function Badge({ status = 'reading', children, style = {}, ...rest }) {
  const map = {
    reading: { label: 'Reading', bg: 'var(--candle-100)', fg: 'var(--candle-700)', dot: 'var(--candle-500)' },
    finished: { label: 'Finished', bg: 'var(--sage-100)', fg: 'var(--sage-600)', dot: 'var(--sage-500)' },
    want: { label: 'Want to read', bg: 'var(--paper-200)', fg: 'var(--ink-600)', dot: 'var(--clay-400)' },
    dnf: { label: 'Set down', bg: 'var(--surface-sunken)', fg: 'var(--text-muted)', dot: 'var(--sand-300)' },
    favorite: { label: 'Beloved', bg: 'var(--oxblood-200)', fg: 'var(--oxblood-700)', dot: 'var(--oxblood-600)' },
  };
  const t = map[status] || map.reading;
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px', height: '24px', padding: '0 10px 0 8px',
      background: t.bg, color: t.fg, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
      fontWeight: 'var(--w-semibold)', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', ...style,
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.dot }} />
      {children || t.label}
    </span>
  );
}

function Avatar({ src, name = '', size = 44, ring = true, style = {}, ...rest }) {
  const initials = name.split(' ').map((p) => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const tints = ['var(--plum-300)', 'var(--candle-300)', 'var(--sage-300)', 'var(--rose-400)', 'var(--dusk-300)'];
  const tint = tints[(name.charCodeAt(0) || 0) % tints.length];
  return (
    <div {...rest} style={{
      width: size, height: size, borderRadius: '50%', padding: ring ? '2px' : 0,
      background: ring ? 'var(--surface-card)' : 'transparent',
      boxShadow: ring ? '0 0 0 1.5px var(--accent), var(--shadow-xs)' : 'none', flexShrink: 0, ...style,
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: src ? 'var(--surface-sunken)' : tint, backgroundImage: src ? `url(${src})` : 'none',
        backgroundSize: 'cover', backgroundPosition: 'center', color: 'var(--ink-800)',
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size * 0.4, lineHeight: 1,
      }}>{!src && initials}</div>
    </div>
  );
}

function Input({ icon, variant = 'default', style = {}, wrapStyle = {}, ...rest }) {
  const isSearch = variant === 'search';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '10px', height: 'var(--h-control)', padding: '0 16px',
      background: 'var(--surface-sunken)', border: '1px solid var(--border)',
      borderRadius: isSearch ? 'var(--radius-pill)' : 'var(--radius-md)', boxShadow: 'var(--shadow-inset)', ...wrapStyle,
    }}
      onFocusCapture={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; }}
      onBlurCapture={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
      {(icon || isSearch) && <Icon name={icon || 'search'} size={18} style={{ color: 'var(--text-muted)' }} />}
      <input {...rest} style={{
        flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-strong)', ...style,
      }} />
    </div>
  );
}

function SegmentedControl({ options = [], value, onChange, style = {}, ...rest }) {
  return (
    <div {...rest} role="tablist" style={{
      display: 'inline-flex', padding: '4px', gap: '2px', background: 'var(--surface-sunken)',
      border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)', ...style,
    }}>
      {options.map((opt) => {
        const v = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;
        const active = v === value;
        return (
          <button key={v} role="tab" aria-selected={active} onClick={() => onChange && onChange(v)} style={{
            appearance: 'none', border: 'none', cursor: 'pointer', padding: '7px 16px', borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--w-semibold)',
            color: active ? 'var(--text-on-accent)' : 'var(--text-muted)',
            background: active ? 'var(--accent)' : 'transparent', backgroundImage: active ? 'var(--wash-candle)' : 'none',
            boxShadow: active ? 'var(--shadow-xs)' : 'none', transition: 'all var(--dur-base) var(--ease-soft)',
          }}>{label}</button>
        );
      })}
    </div>
  );
}

function Card({ tone = 'paper', pad = 'md', interactive = false, style = {}, children, ...rest }) {
  const tones = {
    paper: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border)' },
    raised: { background: 'var(--surface-raised)', color: 'var(--text-body)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' },
    sunken: { background: 'var(--surface-sunken)', color: 'var(--text-body)', border: '1px solid var(--border)' },
    inverse: { background: 'var(--surface-inverse)', backgroundImage: 'var(--texture-vignette)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' },
  };
  const pads = { none: '0', sm: '14px', md: '18px', lg: '24px' };
  return (
    <div {...rest} style={{ borderRadius: 'var(--radius-lg)', padding: pads[pad], transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)', cursor: interactive ? 'pointer' : 'default', ...tones[tone], ...style }}
      onMouseEnter={interactive ? (e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; } : undefined}
      onMouseLeave={interactive ? (e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = tones[tone].boxShadow || 'none'; } : undefined}>
      {children}
    </div>
  );
}

window.MSKit = Object.assign(window.MSKit || {}, { Icon, Button, IconButton, Badge, Avatar, Input, SegmentedControl, Card });
