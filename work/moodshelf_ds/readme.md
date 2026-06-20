# MoodShelf — Design System

> _Goodreads tracks what you read. **MoodShelf** tracks what books made you feel._

MoodShelf (working name **Bookroom / MoodShelf**) is a mobile-first, visual-and-emotional
reading tracker — a mix of Goodreads, Letterboxd, Pinterest, Spotify Wrapped and a
private reading journal. Readers build a beautiful virtual library, tag every book with
emotions, moods, quotes and memories, curate themed shelves ("books that destroyed me",
"books that feel like rain"), and generate share cards and monthly **reading-aura** recaps.

The brand feeling: **a private library, a reading room, a journal, a moodboard and a
memory box.** Literary, warm, candlelit, slightly magical. Premium but intimate; cozy but
never childish; romantic, tactile, atmospheric. Never plain-white Goodreads, never cold
SaaS, never purple-gradient startup.

## Sources
This system was authored from a written brand brief (no codebase or Figma was attached).
There is therefore no upstream design file to reference — **this project is the source of
truth.** If a Figma library or product codebase exists later, link it here and reconcile.

---

## Index / manifest

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/fonts.css` — webfont `@import`s (Google Fonts CDN — see Caveats).
- `tokens/colors.css` — neutral ink→parchment scale, candlelight accent, emotion palette, semantic aliases.
- `tokens/typography.css` — families, fluid scales, weights, tracking/leading.
- `tokens/spacing.css` — 4px rhythm, gutters, fixed control heights.
- `tokens/effects.css` — radii, warm shadows, borders, textures, gradient washes, motion.
- `tokens/themes.css` — 5 premium library themes as `[data-theme]` scopes.
- `tokens/base.css` — resets + helper classes (`.eyebrow`, `.hand`, `.quote`, `.serif`).

**Components** (`components/`)
- `core/` — `Button`, `IconButton`, `Icon`, `Badge`, `Avatar`, `Input`, `SegmentedControl`, `Card`.
- `reading/` — `EmotionTag`, `BookCover`, `AuraOrb`, `ShelfCard` (the signature objects).

**UI kit** (`ui_kits/moodshelf/`) — interactive mobile app: Landing → Onboarding →
Library, Book Detail, Shelves, Create Shelf, Shelf Detail, Recap/Aura, Profile, Share Card,
Theme Shop. Open `index.html`.

**Specimen cards** (`guidelines/*.card.html`) — populate the Design System tab.

**Brand** — `assets/mark.svg` (open-book + candlelight monogram).

---

## CONTENT FUNDAMENTALS — how MoodShelf writes

The voice is a **reader talking to another reader at 1am** — intimate, poetic, a little
dramatic in a fun BookTok way. Emotionally intelligent, never corporate, never a "platform."

- **Person & tone.** Address the reader as **you**; the library is **yours**. First-person
  ("I keep the books that keep me") for profile/bio voice. Warm, confessional, present-tense.
- **Casing.** Sentence case everywhere. Shelf names are deliberately **lowercase** and
  fragmentary — "books that destroyed me", "comfort reads", "books that feel like rain".
  Eyebrows/section labels are the only UPPERCASE, widely tracked.
- **Emotion over function.** Replace neutral system copy with felt prompts:
  - _"Mark as complete"_ → **"How did it leave you?"**
  - _"No items to display."_ → **"Nothing here yet — but every library starts with one book that ruined you."**
  - _"View monthly summary"_ → **"Your June was mostly longing, with a sharp turn into wonder."**
  - _"Shared via MoodShelf"_ → **"made by a reader who feels things."**
- **Dramatic, in on the joke.** "it ruined me ♥", "feral little stories", "doomed academics
  & quiet magic". Heightened but self-aware — BookTok, not melodrama.
- **Numbers stay human.** "47 this year", "23-day streak", "9 distinct moods" — small,
  personal, never a dashboard of vanity metrics.
- **Emoji.** Used **sparingly and only the warm/handwritten ones** — primarily `♥`, occasionally
  `✨`, almost always in handwritten (Caveat) contexts, never in UI chrome or as bullet icons.
- **Punctuation.** Em dashes and ellipses for breath and confession. Curly quotes `“ ”` for
  saved passages. Lowercase fragments end without periods.

Examples live in `guidelines/brand-voice.card.html`.

---

## VISUAL FOUNDATIONS

**Overall feeling.** Candlelight on aged paper. Books are treasured **objects**, displayed
like Letterboxd posters. Warmth in every value — there is **no neutral gray** in the system;
every "gray" is a warm brown (`ink-*`) or parchment (`paper-*`).

**Color.**
- A single brand accent: **candlelight gold** (`--candle-500 #C8913A`), used as a gradient
  **wash** (`--wash-candle`) on primary actions, the wordmark "Shelf", active states.
- **Oxblood** (`--oxblood-600`) is the emphatic secondary — heartbreak, "beloved", danger.
- Supporting literary voices: **sage** (calm), **plum** (longing / the aura / mystical),
  **dusk slate** (rain, eerie), **dusty rose** (tenderness). Used as accents, never as large fields.
- An **emotion palette** (`--emo-joy … --emo-rage`) maps feelings to hues for tags, auras and stats.
- Default surface is **parchment light** ("Reading Room"). Dark, moody panels use
  `--surface-inverse` (espresso) — heroes, currently-reading, share cards, recaps.

**Type.**
- Display: **Cormorant Garamond** — romantic, high-contrast serif. Titles, hero, shelf names.
  **Italic** is the emphasis gesture (the gold word in a headline).
- Serif: **Spectral** — quotes, saved passages, editorial reading text.
- Sans: **Hanken Grotesk** — all functional UI (labels, buttons, stats, body).
- Hand: **Caveat** — emotion tags, margin notes, signatures. A literal human voice; used sparingly.

**Backgrounds & texture.** Subtle layered-gradient **paper grain** (`--texture-paper`) on
pages; **vignette** on dark surfaces. Atmospheric gradient **washes** (candle / dusk / aura)
for heroes, recaps and share cards. No photography is required — book covers are generated
typographically, so empty libraries still look beautiful. Real cover images drop in via `BookCover src`.

**Shape & depth.** Soft corners throughout (`--radius-md/lg` 12–18px; pills for controls and
tags; `--radius-book` 3px for covers). Shadows are **warm and brown-tinted**, never neutral —
soft like candlelight. Book covers cast a **directional shelf shadow** (`--shadow-book`).
Cards: 1px warm border + soft shadow on a cream surface.

**Motion.** Gentle and settled — `--ease-soft` is the default. Durations 140–600ms.
- **Hover** (pointer): subtle lift (`translateY(-2/3px)`) + deepened shadow on cards; ~4%
  brightness lift on filled buttons.
- **Press**: a tactile **shrink** (`scale 0.97` buttons, `0.9` icon buttons) — the "tactile"
  brand promise.
- No bounce, no infinite decorative loops. Entrances should fade/settle, gated to active state.

**Transparency & blur.** Reserved for chrome over imagery — the `glass` button/icon variants
(blurred translucent) sit over book covers and the share-card overlay. Otherwise surfaces are solid.

**Layout.** Mobile-first, single 390px column, `--gutter-app 20px`. Fixed app bar (56), bottom
tab bar (64). Content scrolls under a soft fade into the tab bar. Generous, journal-like spacing.

---

## ICONOGRAPHY

- **System:** a curated subset of **Lucide** (ISC-licensed), rendered at a refined **1.75
  stroke** (lighter than Lucide's default 2) to suit the literary, fine-lined aesthetic.
  Implemented as the `Icon` component (`components/core/Icon.jsx`); paths are also mirrored
  in `ui_kits/moodshelf/icons.js`. Available names are listed in `Icon.prompt.md`.
- **Why inline, not a CDN sprite:** the set is small and curated; inlining keeps stroke weight
  and color (`currentColor`) consistent and avoids a runtime dependency. To extend, copy the
  exact Lucide path for the new glyph into the `ICONS` map — do **not** hand-draw icons.
- **Filled states:** a few glyphs invert to filled via `fill="currentColor"` (e.g. a saved
  heart, active rating star).
- **No emoji as icons.** Emoji appear only as warm typographic flourishes in handwritten copy
  (`♥`, `✨`) — never in navigation, buttons or as list bullets.
- **Brand mark:** `assets/mark.svg` — an open book under a candle flame. Inline SVG, `currentColor`
  for the book + fixed gold flame, so it reverses cleanly on light/dark. The wordmark is set in
  Cormorant Garamond with an italic gold "Shelf".

---

## Using this system

Link the stylesheet, then read components off the compiled bundle namespace
`window.MoodShelfDesignSystem_76979c` (see any `*.card.html` for the pattern).
Set a premium theme by wrapping a container in `data-theme="dark-academia"` (or
`cozy-cottage`, `gothic-romance`, `japanese-minimal`, `witchy`).

See `SKILL.md` to use this as a downloadable Agent Skill.

---

## Caveats & open questions
- **Fonts load from the Google Fonts CDN** (`tokens/fonts.css`), so the compiler reports
  0 shipped `@font-face` binaries and offline use needs a network. If you want self-hosted,
  licensed, or brand-specific faces, send the files and I'll localize them.
- **Type choices are proposals**, not a provided brand. Cormorant / Spectral / Hanken Grotesk /
  Caveat were chosen to fit the brief — happy to swap any of them.
- **No real imagery** was provided; covers are generated and avatars use initials. The system
  is built to accept real cover art and photos (`BookCover src`, `Avatar src`) when available.
- The product name is treated as **MoodShelf**; confirm the final name (Bookroom vs MoodShelf).
