---
name: moodshelf-design
description: Use this skill to generate well-branded interfaces and assets for MoodShelf (a visual, emotional, mobile-first reading tracker — "Goodreads tracks what you read; MoodShelf tracks what books made you feel"), for production or throwaway prototypes/mocks. Contains the design guidelines, colors, type, fonts, emotion palette, premium themes, brand assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Where things live
- `styles.css` — the only stylesheet to link; it `@import`s every token + font file under `tokens/`.
- `tokens/` — colors (incl. the emotion palette), typography, spacing, effects (warm shadows,
  textures, gradient washes, motion), and 5 premium `[data-theme]` library themes.
- `components/core/` and `components/reading/` — React primitives. The signature ones are
  `EmotionTag`, `BookCover`, `AuraOrb`, `ShelfCard`. Each has a `.prompt.md` with usage.
- `ui_kits/moodshelf/` — a full interactive mobile app (landing, onboarding, library, book
  detail, shelves, recap/aura, profile, share card, theme shop). The fastest way to see the
  brand in motion; its `*.jsx` files are self-contained, faithful copies of the components.
- `guidelines/*.card.html` — foundation specimens.

## The brand in one breath
Candlelight on aged paper. Literary, warm, intimate, slightly magical — a private reading room
and a memory box, not a SaaS dashboard. Single candlelight-gold accent + oxblood; warm browns
instead of gray; Cormorant Garamond titles, Hanken Grotesk UI, Caveat for handwritten emotion
tags. Books are treasured objects. Copy is a reader confiding in another reader at 1am —
sentence case, lowercase shelf names, emotion over function. See `readme.md` for the full
CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS and ICONOGRAPHY sections.
