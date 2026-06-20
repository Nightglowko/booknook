/* MoodShelf UI-kit shell helpers: status bar, app bar, phone frame,
   tab bar, section labels, star rating. Exported to window.MSKit. */

function StatusBar({ dark = false }) {
  const c = dark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  return (
    <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px', flexShrink: 0 }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 14, color: c }}>9:41</span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', color: c }}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="6" width="3" height="5" rx="1"/><rect x="4.5" y="4" width="3" height="7" rx="1"/><rect x="9" y="2" width="3" height="9" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2.5" stroke="currentColor" opacity="0.5"/><rect x="2" y="2" width="14" height="7" rx="1.3" fill="currentColor"/><rect x="20" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

function AppBar({ title, subtitle, left, right, dark = false, big = false }) {
  const fg = dark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  const sub = dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 18px 12px', flexShrink: 0 }}>
      <div style={{ width: 40, display: 'flex', justifyContent: 'flex-start' }}>{left}</div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        {title && <div style={{ fontFamily: big ? 'var(--font-display)' : 'var(--font-sans)', fontWeight: big ? 600 : 700, fontSize: big ? 24 : 16, color: fg, lineHeight: 1.1 }}>{title}</div>}
        {subtitle && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: sub, marginTop: 2 }}>{subtitle}</div>}
      </div>
      <div style={{ width: 40, display: 'flex', justifyContent: 'flex-end' }}>{right}</div>
    </div>
  );
}

function SectionLabel({ children, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '0 0 12px' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{children}</span>
      {action && <span onClick={onAction} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--accent-strong)', cursor: 'pointer' }}>{action}</span>}
    </div>
  );
}

function Stars({ value = 0, size = 16, onChange }) {
  return (
    <div style={{ display: 'inline-flex', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} onClick={onChange ? () => onChange(n) : undefined} style={{ color: n <= value ? 'var(--candle-500)' : 'var(--border-strong)', cursor: onChange ? 'pointer' : 'default', display: 'inline-flex' }}>
          <window.MSKit.Icon name="star" size={size} fill={n <= value ? 'currentColor' : 'none'} />
        </span>
      ))}
    </div>
  );
}

function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', icon: 'book-open', label: 'Library' },
    { id: 'shelves', icon: 'library', label: 'Shelves' },
    { id: 'recap', icon: 'sparkles', label: 'Recap' },
    { id: 'profile', icon: 'user', label: 'You' },
  ];
  return (
    <div style={{ height: 'var(--h-tabbar)', flexShrink: 0, display: 'flex', alignItems: 'stretch', padding: '0 8px 8px', background: 'linear-gradient(180deg, rgba(248,241,226,0) 0%, var(--surface-page) 36%)', backdropFilter: 'blur(4px)' }}>
      {tabs.map((t) => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{ flex: 1, border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, color: on ? 'var(--accent-deep)' : 'var(--text-faint)' }}>
            <window.MSKit.Icon name={t.icon} size={22} strokeWidth={on ? 2 : 1.6} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: on ? 700 : 600, letterSpacing: '0.02em' }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function PhoneFrame({ children, theme }) {
  return (
    <div data-theme={theme || undefined} style={{ width: 390, height: 844, borderRadius: 46, padding: 0, background: 'var(--surface-page)', backgroundImage: 'var(--texture-paper)', boxShadow: '0 50px 100px -30px rgba(36,24,10,0.55), 0 0 0 11px #1c140d, 0 0 0 13px #2c2016', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      {children}
    </div>
  );
}

window.MSKit = Object.assign(window.MSKit || {}, { StatusBar, AppBar, SectionLabel, Stars, TabBar, PhoneFrame });
