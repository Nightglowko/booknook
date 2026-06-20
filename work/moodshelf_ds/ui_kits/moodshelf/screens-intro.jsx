/* MoodShelf intro + detail + share screens. */
const K = window.MSKit;
const DATA = window.MSData;
function VScroll({ children, style }) { return <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', ...style }}>{children}</div>; }
const GP = { padding: '0 20px' };

/* ---------------- LANDING ---------------- */
function Landing({ go }) {
  const floats = [DATA.byId('sh'), DATA.byId('pi'), DATA.byId('al')];
  return (
    <div data-theme="dark-academia" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--surface-page)', overflow: 'hidden' }}>
      <VScroll>
        <div style={{ position: 'relative', padding: '8px 24px 28px', backgroundImage: 'var(--wash-dusk)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 40 }}>
            <Mark size={28} color="var(--paper-100)" flame="var(--candle-400)" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--paper-50)' }}>Mood<span style={{ fontStyle: 'italic', color: 'var(--candle-400)' }}>Shelf</span></span>
          </div>

          {/* floating covers */}
          <div style={{ position: 'relative', height: 188, marginBottom: 8 }}>
            {floats.map((b, i) => (
              <div key={b.id} style={{ position: 'absolute', left: `${14 + i * 84}px`, top: `${i % 2 ? 22 : 0}px`, transform: `rotate(${(i - 1) * 7}deg)`, zIndex: i === 1 ? 3 : 1 }}>
                <K.BookCover title={b.title} author={b.author} width={i === 1 ? 128 : 110} />
              </div>
            ))}
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 42, lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--paper-50)', marginTop: 14 }}>
            The books that<br />made you <span style={{ fontStyle: 'italic', color: 'var(--candle-400)' }}>feel.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.55, color: 'var(--text-on-dark-muted)', marginTop: 16, maxWidth: 320 }}>
            Goodreads tracks what you read. MoodShelf remembers how it left you — the moods, the quotes, the ache, the wonder.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
            <K.Button variant="primary" size="lg" full onClick={() => go('onboard')}>Begin your library</K.Button>
            <K.Button variant="glass" full onClick={() => go('home')}>I already have one</K.Button>
          </div>
        </div>

        {/* feature strip */}
        <div style={{ padding: '26px 24px 30px', background: 'var(--surface-page)' }}>
          {[
            ['heart', 'Tag the feeling', 'Log moods, quotes & memories on every book.'],
            ['library', 'Build emotional shelves', '“books that destroyed me.” “comfort reads.” “rain.”'],
            ['sparkles', 'See your reading aura', 'Monthly recaps & share cards made to be screenshotted.'],
          ].map(([ic, t, d]) => (
            <div key={t} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border-on-dark)' }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}><K.Icon name={ic} size={20} /></div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-on-dark)' }}>{t}</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-on-dark-muted)', marginTop: 2 }}>{d}</div>
              </div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: 22, fontFamily: 'var(--font-hand)', fontSize: 20, color: 'var(--accent-300, var(--candle-300))' }}>made by readers who feel things ♥</div>
        </div>
      </VScroll>
    </div>
  );
}

function Mark({ size = 28, color = 'var(--ink-800)', flame = '#C8913A' }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" style={{ display: 'block' }}>
      <path d="M32 22.5C26 18.8 19.5 18.4 11.8 20.4C10.7 20.7 10 21.7 10 22.8V43.3C10 44.8 11.4 45.9 12.8 45.6C19.4 44.1 25.7 44.6 32 47.8" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 22.5C38 18.8 44.5 18.4 52.2 20.4C53.3 20.7 54 21.7 54 22.8V43.3C54 44.8 52.6 45.9 51.2 45.6C44.6 44.1 38.3 44.6 32 47.8" stroke={color} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 23.5V47" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M32 6C32 6 27.5 10.2 27.5 13.4C27.5 15.9 29.5 17.6 32 17.6C34.5 17.6 36.5 15.9 36.5 13.4C36.5 10.2 32 6 32 6Z" fill={flame} />
    </svg>
  );
}

/* ---------------- ONBOARDING: choose your vibe ---------------- */
function Onboarding({ go }) {
  const [sel, setSel] = React.useState(['da', 'me']);
  const toggle = (id) => setSel((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <K.AppBar left={<K.IconButton name="chevron-left" variant="soft" onClick={() => go('landing')} />} title="Step 1 of 3" />
      <VScroll>
        <div style={{ ...GP, marginBottom: 18 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 32, lineHeight: 1.05, color: 'var(--text-strong)' }}>Choose your <span style={{ fontStyle: 'italic', color: 'var(--accent-strong)' }}>reading vibe</span></h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--text-muted)', marginTop: 8 }}>Pick the moods you read for. We'll set the tone of your library.</p>
        </div>
        <div style={{ ...GP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, paddingBottom: 16 }}>
          {DATA.vibes.map((v) => {
            const on = sel.includes(v.id);
            return (
              <div key={v.id} onClick={() => toggle(v.id)} style={{
                position: 'relative', cursor: 'pointer', borderRadius: 'var(--radius-lg)', padding: '16px 14px 14px', minHeight: 116,
                background: on ? `var(--emo-${v.emo})` : 'var(--surface-card)', color: on ? `var(--emo-${v.emo}-on)` : 'var(--text-body)',
                border: on ? '1px solid transparent' : '1px solid var(--border)', boxShadow: on ? 'var(--shadow-md)' : 'var(--shadow-xs)',
                transition: 'all var(--dur-base) var(--ease-soft)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                {on && <div style={{ position: 'absolute', top: 12, right: 12 }}><K.Icon name="check" size={18} /></div>}
                <div style={{ width: 13, height: 13, borderRadius: '50%', background: on ? `var(--emo-${v.emo}-on)` : `var(--emo-${v.emo})`, opacity: on ? 0.6 : 1 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.1 }}>{v.label}</div>
                  <div style={{ fontFamily: 'var(--font-hand)', fontSize: 16, marginTop: 3, opacity: 0.9 }}>{v.line}</div>
                </div>
              </div>
            );
          })}
        </div>
      </VScroll>
      <div style={{ ...GP, padding: '12px 20px 20px', borderTop: '1px solid var(--border)', background: 'var(--surface-page)' }}>
        <K.Button variant="primary" size="lg" full iconRight={<K.Icon name="arrow-right" size={18} />} onClick={() => go('home')}>
          Continue with {sel.length} {sel.length === 1 ? 'vibe' : 'vibes'}
        </K.Button>
      </div>
    </div>
  );
}

/* ---------------- BOOK DETAIL ---------------- */
function BookDetail({ go, book }) {
  const b = book || DATA.byId('al');
  const [emos, setEmos] = React.useState(b.emotions);
  const [rating, setRating] = React.useState(b.rating || 4);
  const adding = ['joy', 'comfort', 'eerie', 'tender', 'wonder', 'rage'].filter((e) => !emos.includes(e));
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <K.AppBar
        left={<K.IconButton name="chevron-left" variant="soft" onClick={() => go('home')} />}
        right={<K.IconButton name="share" variant="soft" onClick={() => go('share', b)} />} />
      <VScroll>
        {/* hero */}
        <div data-theme="dark-academia" style={{ background: 'var(--surface-page)', backgroundImage: 'var(--wash-dusk)', padding: '14px 20px 26px', display: 'flex', gap: 18 }}>
          <K.BookCover title={b.title} author={b.author} width={120} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 26, lineHeight: 1.05, color: 'var(--paper-50)' }}>{b.title}</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-on-dark-muted)', marginTop: 4 }}>{b.author}</div>
            <div style={{ marginTop: 12 }}><K.Badge status={b.status} /></div>
            <div style={{ marginTop: 'auto', paddingTop: 14 }}><K.Stars value={rating} size={22} onChange={setRating} /></div>
          </div>
        </div>

        <div style={{ ...GP, paddingTop: 20 }}>
          <K.SectionLabel>How it left you</K.SectionLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {emos.map((e) => <K.EmotionTag key={e} emotion={e} onRemove={() => setEmos(emos.filter((x) => x !== e))}>{e}</K.EmotionTag>)}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
            {adding.slice(0, 5).map((e) => (
              <button key={e} onClick={() => setEmos([...emos, e])} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 12px', borderRadius: 'var(--radius-pill)', border: '1px dashed var(--border-strong)', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-hand)', fontSize: 16, color: 'var(--text-muted)' }}>
                <K.Icon name="plus" size={13} />{e}
              </button>
            ))}
          </div>
        </div>

        {/* margin note */}
        <div style={{ ...GP, marginTop: 24 }}>
          <K.SectionLabel>Your margin note</K.SectionLabel>
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)', borderRadius: 'var(--radius-md)', padding: '14px 16px' }}>
            <div style={{ fontFamily: 'var(--font-hand)', fontSize: 22, lineHeight: 1.4, color: 'var(--text-body)' }}>{b.note || 'Tap to write what this book did to you…'}</div>
          </div>
        </div>

        {/* saved quote */}
        <div style={{ ...GP, marginTop: 24 }}>
          <K.SectionLabel action="Add quote">Saved quote</K.SectionLabel>
          <K.Card tone="inverse" pad="lg">
            <K.Icon name="quote" size={22} style={{ color: 'var(--accent)' }} />
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.55, color: 'var(--text-on-dark)', marginTop: 8 }}>
              “Things that happen for the first time can never happen the same way twice.”
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-on-dark-muted)', marginTop: 10 }}>page 214</div>
          </K.Card>
        </div>

        {/* playlist + shelves */}
        <div style={{ ...GP, marginTop: 24, marginBottom: 20 }}>
          <K.SectionLabel>On your shelves</K.SectionLabel>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['books that destroyed me', 'comfort reads', 'rain'].map((s) => (
              <span key={s} style={{ padding: '7px 14px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', border: '1px solid var(--border)', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-body)' }}>{s}</span>
            ))}
          </div>
        </div>
      </VScroll>
    </div>
  );
}

/* ---------------- SHELF DETAIL ---------------- */
function ShelfDetail({ go, shelf }) {
  const s = shelf || DATA.shelves[0];
  const books = [...s.ids, 'cr', 'pr', 'ci'].map(DATA.byId).filter(Boolean);
  const inverse = s.tone === 'inverse';
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <K.AppBar left={<K.IconButton name="chevron-left" variant="soft" onClick={() => go('shelves')} />} right={<K.IconButton name="share" variant="soft" onClick={() => go('share')} />} />
      <VScroll>
        <div data-theme={inverse ? 'dark-academia' : undefined} style={{ ...GP, paddingBottom: 18, paddingTop: 4 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{s.count} books · a shelf by Wren</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 34, lineHeight: 1.04, color: 'var(--text-strong)', marginTop: 8 }}>{s.name}</h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 15, color: 'var(--text-muted)', marginTop: 8 }}>The ones I'd warn you about and hand you anyway.</p>
        </div>
        <div style={{ ...GP, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, paddingBottom: 24 }}>
          {books.map((b) => (
            <div key={b.id} onClick={() => go('detail', b)} style={{ cursor: 'pointer' }}>
              <K.BookCover title={b.title} author={b.author} width={98} style={{ width: '100%' }} />
              <div style={{ fontFamily: 'var(--font-hand)', fontSize: 15, color: `var(--emo-${b.emotions[0]})`, marginTop: 6 }}>{b.spice}</div>
            </div>
          ))}
        </div>
      </VScroll>
    </div>
  );
}

/* ---------------- CREATE SHELF ---------------- */
function CreateShelf({ go }) {
  const [name, setName] = React.useState('books that feel like rain');
  const [emo, setEmo] = React.useState('eerie');
  const emos = ['heartbreak', 'comfort', 'longing', 'eerie', 'tender', 'wonder', 'joy', 'rage'];
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <K.AppBar left={<K.IconButton name="x" variant="soft" onClick={() => go('shelves')} />} title="New shelf" />
      <VScroll>
        <div style={{ ...GP }}>
          {/* live preview */}
          <div data-theme="dark-academia" style={{ borderRadius: 'var(--radius-xl)', backgroundImage: 'var(--wash-dusk)', padding: 22, textAlign: 'center', marginBottom: 22 }}>
            <div style={{ display: 'inline-flex' }}><K.EmotionTag emotion={emo} size="lg">{emo}</K.EmotionTag></div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 28, lineHeight: 1.08, color: 'var(--paper-50)', marginTop: 14 }}>{name || 'name your shelf'}</div>
          </div>

          <K.SectionLabel>Shelf name</K.SectionLabel>
          <K.Input value={name} onChange={(e) => setName(e.target.value)} placeholder="books that…" />

          <div style={{ marginTop: 22 }}><K.SectionLabel>Its dominant feeling</K.SectionLabel></div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {emos.map((e) => (
              <button key={e} onClick={() => setEmo(e)} style={{ width: 38, height: 38, borderRadius: '50%', background: `var(--emo-${e})`, border: emo === e ? '3px solid var(--accent)' : '3px solid transparent', cursor: 'pointer', boxShadow: 'var(--shadow-xs)' }} aria-label={e} />
            ))}
          </div>

          <div style={{ marginTop: 22 }}><K.SectionLabel action="Browse library">Add books</K.SectionLabel></div>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 8 }}>
            <div style={{ width: 70, height: 105, borderRadius: 'var(--radius-book)', border: '2px dashed var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexShrink: 0 }}><K.Icon name="plus" size={22} /></div>
            {['no', 'be', 'pr'].map(DATA.byId).map((b) => <K.BookCover key={b.id} title={b.title} author={b.author} width={70} />)}
          </div>
        </div>
      </VScroll>
      <div style={{ padding: '12px 20px 20px', borderTop: '1px solid var(--border)' }}>
        <K.Button variant="primary" size="lg" full onClick={() => go('shelves')}>Create shelf</K.Button>
      </div>
    </div>
  );
}

/* ---------------- SHARE CARD (overlay) ---------------- */
function ShareCard({ go, book }) {
  const b = book || DATA.byId('al');
  const p = DATA.profile;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, background: 'rgba(20,13,8,0.72)', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 16px', display: 'flex', justifyContent: 'flex-end' }}>
        <K.IconButton name="x" variant="glass" onClick={() => go('back')} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 26px' }}>
        {/* 9:16 story card */}
        <div style={{ width: 286, aspectRatio: '9 / 16', borderRadius: 22, overflow: 'hidden', boxShadow: 'var(--shadow-xl)', position: 'relative', background: '#1F1712', backgroundImage: 'var(--wash-aura)', display: 'flex', flexDirection: 'column', padding: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Mark size={20} color="#FFF7E8" flame="#FFD98A" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: '#FFF7E8' }}>MoodShelf</span>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <K.BookCover title={b.title} author={b.author} width={120} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: '#FFF7E8', lineHeight: 1.1 }}>{b.title}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,247,232,0.7)', marginTop: 4 }}>{b.author}</div>
            </div>
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
              {b.emotions.map((e) => <K.EmotionTag key={e} emotion={e} size="sm">{e}</K.EmotionTag>)}
            </div>
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'var(--font-hand)', fontSize: 19, color: '#FFF7E8' }}>{p.handle} · it ruined me ♥</div>
        </div>
      </div>
      <div style={{ padding: '18px 26px 26px', display: 'flex', gap: 12, justifyContent: 'center' }}>
        <K.IconButton name="instagram" variant="glass" size={52} />
        <K.IconButton name="camera" variant="glass" size={52} />
        <K.Button variant="primary" iconLeft={<K.Icon name="download" size={18} />} onClick={() => go('back')}>Save card</K.Button>
      </div>
    </div>
  );
}

/* ---------------- THEME SHOP ---------------- */
function ThemeShop({ go }) {
  const [applied, setApplied] = React.useState('dark-academia');
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <K.AppBar left={<K.IconButton name="chevron-left" variant="soft" onClick={() => go('profile')} />} title="Theme shop" />
      <VScroll>
        <div style={{ ...GP, paddingBottom: 10 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, lineHeight: 1.05, color: 'var(--text-strong)' }}>Dress your <span style={{ fontStyle: 'italic', color: 'var(--accent-strong)' }}>library</span></h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, color: 'var(--text-muted)', marginTop: 6 }}>Every shelf, recap and share card, re-skinned.</p>
        </div>
        <div style={{ ...GP, display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 12, paddingBottom: 20 }}>
          {DATA.themes.map((t) => {
            const on = applied === t.id;
            return (
              <div key={t.id} data-theme={t.id} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface-page)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ height: 76, display: 'flex' }}>
                  <div style={{ flex: 1, background: 'var(--surface-card)' }} />
                  <div style={{ flex: 1, background: 'var(--surface-inverse, var(--surface-card))' }} />
                  <div style={{ width: 60, background: 'var(--accent)' }} />
                  <div style={{ width: 40, background: 'var(--accent-ink)' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: 'var(--surface-card)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-strong)' }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)' }}>{t.sub}</div>
                  </div>
                  <button onClick={() => setApplied(t.id)} style={{ flexShrink: 0, padding: '8px 16px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, background: on ? 'var(--accent)' : 'var(--surface-sunken)', backgroundImage: on ? 'var(--wash-candle)' : 'none', color: on ? 'var(--text-on-accent)' : 'var(--text-body)' }}>
                    {on ? 'Applied' : t.price === 'Free' ? 'Apply' : 'Unlock'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </VScroll>
    </div>
  );
}

window.MSScreens = Object.assign(window.MSScreens || {}, { Landing, Onboarding, BookDetail, ShelfDetail, CreateShelf, ShareCard, ThemeShop, Mark });
