---
name: Sanctuary Editorial
colors:
  surface: '#fefae0'
  surface-dim: '#dedbc2'
  surface-bright: '#fefae0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f4db'
  surface-container: '#f2efd5'
  surface-container-high: '#ede9cf'
  surface-container-highest: '#e7e3ca'
  on-surface: '#1d1c0d'
  on-surface-variant: '#4e453e'
  inverse-surface: '#323120'
  inverse-on-surface: '#f5f1d8'
  outline: '#80756d'
  outline-variant: '#d2c4bb'
  surface-tint: '#705a49'
  primary: '#322214'
  on-primary: '#ffffff'
  primary-container: '#4a3728'
  on-primary-container: '#bba08c'
  inverse-primary: '#dec1ac'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#232717'
  on-tertiary: '#ffffff'
  tertiary-container: '#383d2c'
  on-tertiary-container: '#a3a891'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddc7'
  primary-fixed-dim: '#dec1ac'
  on-primary-fixed: '#28180b'
  on-primary-fixed-variant: '#574333'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#e0e5cc'
  tertiary-fixed-dim: '#c4c9b1'
  on-tertiary-fixed: '#191d0e'
  on-tertiary-fixed-variant: '#444937'
  background: '#fefae0'
  on-background: '#1d1c0d'
  surface-variant: '#e7e3ca'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 20px
  margin-mobile: 24px
  margin-desktop: 64px
---

## Brand & Style
The design system is centered on the concept of a "Digital Sanctuary"—a high-end, intimate space for bibliophiles. It balances the sophistication of a premium print magazine with the warmth of a sun-drenched library. The aesthetic is **Editorial Minimalism**, utilizing generous whitespace, high-contrast serif typography, and a tactile, layered approach to depth. 

The target audience seeks a contemplative, slow-tech experience. The UI should evoke a sense of calm, quality, and personal curation. Every interaction should feel intentional, avoiding the frantic energy of typical social media while maintaining an "Instagrammable" visual polish through exquisite type pairings and a rich, organic color palette.

## Colors
The palette is inspired by natural materials: paper, linen, oak, and moss. 

- **Primary (#4A3728):** A deep Espresso used for primary text and high-emphasis icons. It provides the grounding "ink" for the editorial feel.
- **Secondary (#D4A373):** A warm Tan representing aged paper and light wood, used for active states and highlights.
- **Tertiary (#6B705C):** A muted Sage for categorization and secondary actions, providing a calming organic touch.
- **Background (#F9F4EF):** A soft, off-white "Oatmeal" cream. This is the foundation of the design system, ensuring the UI never feels clinical or stark.
- **Accents:** Muted dusty pinks and soft yellows are used sparingly for decorative elements, "shelving" categories, and progress indicators.

Avoid pure black (#000) or pure white (#FFF). All shades should feel warm and slightly desaturated.

## Typography
The typographic hierarchy creates an editorial rhythm. **Playfair Display** provides high-contrast elegance for titles and storytelling moments, while **Montserrat** ensures legibility and a modern touch for functional text.

- **Display & Headlines:** Should use tighter letter spacing to emphasize the serif's beauty. Use these for book titles, section headers, and quotes.
- **Body Text:** Montserrat is set with generous line heights to mimic the readability of a well-typeset book.
- **Labels:** Use uppercase Montserrat with increased letter spacing for a "curated gallery" aesthetic on buttons and category tags.

## Layout & Spacing
The layout follows a **Fluid Grid** model with an emphasis on "Negative Space as Luxury." 

- **Desktop:** A centered 12-column grid with wide margins (64px) to create a focused, "book-like" reading column.
- **Mobile:** A 4-column grid with generous 24px side margins to ensure content doesn't feel cramped.
- **Rhythm:** Use the `lg` (48px) and `xl` (80px) spacing units to separate major sections, allowing the UI to breathe. Content groups should be separated by `md` (24px) spacing.

The layout should prioritize vertical scrolling that feels like turning pages in a premium magazine, with large-scale imagery and bold type leading the way.

## Elevation & Depth
This design system avoids harsh dropshadows in favor of **Soft Lighting and Tonal Layers**. 

- **Ambient Shadows:** Use extremely diffused shadows (30px+ blur) with a hint of the Primary brown color in the shadow tint. This mimics the soft shadow cast by a book on a wooden table.
- **Tonal Layering:** Depth is primarily communicated through subtle color shifts. A "Surface" might be $1\%$ darker than the background cream to suggest it is sitting slightly higher.
- **Glassmorphism:** Use very subtle backdrop blurs (4px-8px) on navigation bars to suggest a translucent vellum paper effect, allowing the warm background colors to bleed through.
- **Inner Depths:** Search bars and input fields should use a soft inner shadow to look "pressed" into the paper-like surface.

## Shapes
The shape language is **Soft and Natural**. While not fully rounded (which can look too "app-like"), sharp corners are avoided to maintain the cozy feel.

- **Standard Elements:** Buttons and input fields use a 0.25rem (Soft) radius, reminiscent of high-quality stationery.
- **Cards & Containers:** Book covers and featured cards use the `rounded-lg` (0.5rem) setting to feel like physical objects.
- **Decorative Elements:** Occasional use of "Pill" shapes for tags/chips to contrast against the more structured editorial layout.

## Components
- **Buttons:** Primary buttons are solid Primary Brown with Cream text. Secondary buttons are "Ghost" style with a thin 1px Primary border. All buttons use the uppercase Label-MD typography.
- **Cards (The "Shelf"):** Cards should have no visible borders; instead, they use a very soft ambient shadow and a slight background tint to distinguish themselves.
- **Chips:** Used for genres (e.g., "Classic", "Poetry"). These should have a "Secondary" Tan background with Primary Brown text.
- **Inputs:** Underlined or softly recessed. Focus states should transition the underline color to the Secondary Tan.
- **Progress Indicators:** Use a thin, elegant line rather than a thick bar, reflecting a "bookmark" aesthetic.
- **Navigation:** A minimal bottom bar on mobile using icons with thin stroke weights, keeping the focus on the content.