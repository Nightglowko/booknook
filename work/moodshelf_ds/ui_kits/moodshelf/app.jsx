/* MoodShelf app shell — nav stack + phone frame. */
const SC = window.MSScreens;
const KK = window.MSKit;

const TAB_SCREENS = ['home', 'shelves', 'recap', 'profile'];
const TAB_TITLES = { home: '', shelves: 'Your shelves', recap: 'Reading recap', profile: '' };

function render(name, payload, go) {
  switch (name) {
    case 'landing': return <SC.Landing go={go} />;
    case 'onboard': return <SC.Onboarding go={go} />;
    case 'home': return <SC.HomeLibrary go={go} />;
    case 'shelves': return <SC.ShelvesScreen go={go} />;
    case 'recap': return <SC.RecapScreen go={go} />;
    case 'profile': return <SC.ProfileScreen go={go} />;
    case 'detail': return <SC.BookDetail go={go} book={payload} />;
    case 'shelf': return <SC.ShelfDetail go={go} shelf={payload} />;
    case 'createShelf': return <SC.CreateShelf go={go} />;
    case 'themeShop': return <SC.ThemeShop go={go} />;
    default: return <SC.HomeLibrary go={go} />;
  }
}

function App() {
  const [stack, setStack] = React.useState([{ name: 'landing' }]);
  const top = stack[stack.length - 1];
  const isShare = top.name === 'share';
  const base = isShare ? stack[stack.length - 2] : top;

  const go = React.useCallback((name, payload) => {
    if (name === 'back') { setStack((s) => s.length > 1 ? s.slice(0, -1) : s); return; }
    if (TAB_SCREENS.includes(name)) { setStack([{ name }]); return; }
    setStack((s) => [...s, { name, payload }]);
  }, []);

  const showTabs = TAB_SCREENS.includes(base.name);
  const fullChrome = base.name === 'landing';
  const darkStatus = base.name === 'landing';
  const title = TAB_TITLES[base.name];

  const quick = [
    ['landing', 'Landing'], ['onboard', 'Onboarding'], ['home', 'Library'],
    ['detail', 'Book'], ['shelf', 'Shelf'], ['createShelf', 'Create'],
    ['recap', 'Recap'], ['profile', 'Profile'], ['themeShop', 'Themes'], ['share', 'Share'],
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, padding: '34px 20px 44px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <SC.Mark size={26} color="var(--ink-800)" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--ink-900)' }}>Mood<span style={{ fontStyle: 'italic', color: 'var(--accent-strong)' }}>Shelf</span></span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', marginLeft: 6, letterSpacing: '0.04em' }}>· mobile UI kit</span>
      </div>

      {/* quick screen switcher */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center', maxWidth: 560 }}>
        {quick.map(([n, label]) => {
          const on = base.name === n || (isShare && n === 'share');
          return (
            <button key={n} onClick={() => { if (n === 'share') { setStack((s) => [...s, { name: 'share', payload: window.MSData.byId('al') }]); } else { go(n, n === 'detail' ? window.MSData.byId('al') : n === 'shelf' ? window.MSData.shelves[0] : undefined); } }}
              style={{ padding: '6px 13px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border)', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12.5, fontWeight: 600, background: on ? 'var(--accent)' : 'var(--surface-card)', backgroundImage: on ? 'var(--wash-candle)' : 'none', color: on ? 'var(--text-on-accent)' : 'var(--text-muted)' }}>
              {label}
            </button>
          );
        })}
      </div>

      <KK.PhoneFrame>
        <KK.StatusBar dark={darkStatus} />
        {!fullChrome && showTabs && (
          title
            ? <KK.AppBar title={title} big right={<KK.IconButton name={base.name === 'profile' ? 'settings' : 'bell'} variant="soft" />} />
            : <KK.AppBar right={<KK.IconButton name="search" variant="soft" />} left={<KK.IconButton name="bell" variant="ghost" />} />
        )}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, position: 'relative' }}>
          {render(base.name, base.payload, go)}
          {isShare && <SC.ShareCard go={go} book={top.payload} />}
        </div>
        {showTabs && !isShare && <KK.TabBar active={base.name} onChange={(t) => go(t)} />}
      </KK.PhoneFrame>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
