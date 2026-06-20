/* MoodShelf in-app screens: Home/Library, Shelves, Recap, Profile. */
const { Icon, Button, IconButton, Badge, Avatar, Input, SegmentedControl, Card,
  EmotionTag, BookCover, AuraOrb, ShelfCard, AppBar, SectionLabel, Stars } = window.MSKit;
const D = window.MSData;

function Scroll({ children, style }) {
  return <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', ...style }}>{children}</div>;
}
const PAD = { padding: '0 20px' };

/* ---------------- HOME / LIBRARY ---------------- */
function HomeLibrary({ go }) {
  const [filter, setFilter] = React.useState('All');
  const reading = D.byId('be');
  const list = D.books.filter((b) => filter === 'All' ? true : b.status === filter.toLowerCase());
  return (
    <Scroll>
      <div style={{ ...PAD, paddingTop: 4, paddingBottom: 14 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, lineHeight: 1.04, color: 'var(--text-strong)' }}>
          Good evening,<br /><span style={{ fontStyle: 'italic', color: 'var(--accent-strong)' }}>Wren</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 13.5 }}>
          <Icon name="flame" size={16} style={{ color: 'var(--candle-500)' }} />
          <span><b style={{ color: 'var(--text-body)' }}>23-day</b> reading streak · 47 this year</span>
        </div>
      </div>

      {/* currently reading hero */}
      <div style={PAD}>
        <SectionLabel>Currently reading</SectionLabel>
        <Card tone="inverse" pad="none" interactive onClick={() => go('detail', reading)} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', gap: 16, padding: 16 }}>
            <BookCover title={reading.title} author={reading.author} width={92} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, lineHeight: 1.08, color: 'var(--text-on-dark)' }}>{reading.title}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-on-dark-muted)', marginTop: 3 }}>{reading.author}</div>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-on-dark-muted)', marginBottom: 6 }}>
                  <span>page 168</span><span>62%</span>
                </div>
                <div style={{ height: 5, borderRadius: 3, background: 'rgba(246,236,216,0.18)' }}>
                  <div style={{ width: '62%', height: '100%', borderRadius: 3, background: 'var(--wash-candle)' }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-on-dark)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--text-on-dark)' }}>How is it leaving you?</span>
            <Icon name="chevron-right" size={18} style={{ color: 'var(--accent)' }} />
          </div>
        </Card>
      </div>

      {/* library grid */}
      <div style={{ ...PAD, marginTop: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <SegmentedControl options={['All', 'Reading', 'Finished', 'Want']} value={filter} onChange={setFilter} style={{ marginBottom: 0 }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 4 }}>
          {list.map((b) => (
            <div key={b.id} onClick={() => go('detail', b)} style={{ cursor: 'pointer' }}>
              <BookCover title={b.title} author={b.author} width={98} style={{ width: '100%' }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: 'var(--text-body)', marginTop: 8, lineHeight: 1.2 }}>{b.title}</div>
              {b.emotions[0] && <div style={{ fontFamily: 'var(--font-hand)', fontSize: 14, color: `var(--emo-${b.emotions[0]})`, marginTop: 1 }}>{b.spice}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* shelves rail */}
      <div style={{ marginTop: 26, marginBottom: 12 }}>
        <div style={PAD}><SectionLabel action="All shelves" onAction={() => go('shelves')}>Your shelves</SectionLabel></div>
        <div style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '0 20px 6px', scrollbarWidth: 'none' }}>
          {D.shelves.map((s) => (
            <div key={s.id} style={{ width: 230, flexShrink: 0 }}>
              <ShelfCard name={s.name} count={s.count} tone={s.tone} books={s.ids.map(D.byId)} onClick={() => go('shelf', s)} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 8 }} />
    </Scroll>
  );
}

/* ---------------- SHELVES ---------------- */
function ShelvesScreen({ go }) {
  return (
    <Scroll>
      <div style={{ ...PAD, paddingBottom: 16 }}>
        <Button variant="secondary" full iconLeft={<Icon name="plus" size={18} />} onClick={() => go('createShelf')}>Create an emotional shelf</Button>
      </div>
      <div style={{ ...PAD, display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 16 }}>
        {D.shelves.map((s) => (
          <ShelfCard key={s.id} name={s.name} count={s.count} tone={s.tone} books={s.ids.map(D.byId)} onClick={() => go('shelf', s)} />
        ))}
      </div>
    </Scroll>
  );
}

/* ---------------- RECAP / AURA ---------------- */
function RecapScreen({ go }) {
  const p = D.profile;
  const emo = [
    { k: 'longing', pct: 34 }, { k: 'wonder', pct: 22 }, { k: 'heartbreak', pct: 18 }, { k: 'comfort', pct: 14 }, { k: 'eerie', pct: 12 },
  ];
  return (
    <Scroll>
      <div data-theme="dark-academia" style={{ margin: '0 16px 18px', borderRadius: 'var(--radius-xl)', background: 'var(--surface-page)', backgroundImage: 'var(--wash-dusk)', padding: '26px 22px 28px', textAlign: 'center', border: '1px solid var(--border-on-dark)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Your June aura</div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '18px 0 16px' }}>
          <AuraOrb size={184} colors={p.aura} label={p.auraWord} />
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: 'var(--text-on-dark)', maxWidth: 280, margin: '0 auto' }}>
          “Your June was mostly <b style={{ color: 'var(--accent)', fontStyle: 'normal' }}>longing</b>, with a sharp turn into <b style={{ color: 'var(--accent)', fontStyle: 'normal' }}>wonder</b>.”
        </div>
        <div style={{ marginTop: 20 }}>
          <Button variant="primary" iconLeft={<Icon name="share" size={17} />} onClick={() => go('share')}>Share your aura</Button>
        </div>
      </div>

      <div style={{ ...PAD }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 22 }}>
          {[['9', 'books'], ['2,841', 'pages'], ['5', 'moods']].map(([n, l]) => (
            <Card key={l} pad="sm" style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--text-strong)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--text-muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</div>
            </Card>
          ))}
        </div>

        <SectionLabel>Your emotional spectrum</SectionLabel>
        <Card pad="lg" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {emo.map((e) => (
            <div key={e.k}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontFamily: 'var(--font-hand)', fontWeight: 600, fontSize: 19, color: `var(--emo-${e.k})`, textTransform: 'capitalize' }}>{e.k}</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>{e.pct}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-sunken)' }}>
                <div style={{ width: e.pct * 2.6 + '%', height: '100%', borderRadius: 4, background: `var(--emo-${e.k})` }} />
              </div>
            </div>
          ))}
        </Card>
        <div style={{ height: 14 }} />
      </div>
    </Scroll>
  );
}

/* ---------------- PROFILE ---------------- */
function ProfileScreen({ go }) {
  const p = D.profile;
  return (
    <Scroll>
      <div style={{ ...PAD, textAlign: 'center', paddingBottom: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}><Avatar name={p.name} size={84} /></div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, color: 'var(--text-strong)', marginTop: 12 }}>{p.name}</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--accent-strong)', fontWeight: 600 }}>{p.handle}</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.5, color: 'var(--text-body)', maxWidth: 300, margin: '12px auto 0' }}>{p.bio}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 16 }}>
          <Button variant="primary" size="sm" iconLeft={<Icon name="share" size={16} />} onClick={() => go('share')}>Share profile</Button>
          <Button variant="secondary" size="sm" iconLeft={<Icon name="settings" size={16} />} onClick={() => go('themeShop')}>Themes</Button>
        </div>
      </div>

      <div style={{ ...PAD, marginTop: 22 }}>
        <Card tone="inverse" pad="lg" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <AuraOrb size={92} colors={p.aura} />
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-on-dark-muted)' }}>Reading aura</div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 600, fontSize: 28, color: 'var(--text-on-dark)', lineHeight: 1.1, marginTop: 2 }}>{p.auraWord} &<br />Wonder</div>
          </div>
        </Card>
      </div>

      <div style={{ ...PAD, marginTop: 22 }}>
        <SectionLabel action="See all" onAction={() => go('shelves')}>Featured shelves</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {D.shelves.slice(0, 2).map((s) => (
            <ShelfCard key={s.id} name={s.name} count={s.count} tone={s.tone} books={s.ids.map(D.byId)} onClick={() => go('shelf', s)} />
          ))}
        </div>
        <div style={{ height: 14 }} />
      </div>
    </Scroll>
  );
}

window.MSScreens = Object.assign(window.MSScreens || {}, { HomeLibrary, ShelvesScreen, RecapScreen, ProfileScreen });
