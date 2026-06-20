---
name: Vert et Boisé
colors:
  surface: '#fdfae7'
  surface-dim: '#dddbc8'
  surface-bright: '#fdfae7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f4e1'
  surface-container: '#f1eedb'
  surface-container-high: '#ece9d6'
  surface-container-highest: '#e6e3d0'
  on-surface: '#1c1c11'
  on-surface-variant: '#434843'
  inverse-surface: '#313124'
  inverse-on-surface: '#f4f1de'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#84532f'
  on-secondary: '#ffffff'
  secondary-container: '#ffbe93'
  on-secondary-container: '#7a4b28'
  tertiary: '#0a1b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#173200'
  on-tertiary-container: '#749f50'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#f9b98d'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#683c1a'
  tertiary-fixed: '#c2f198'
  tertiary-fixed-dim: '#a6d47e'
  on-tertiary-fixed: '#0c2000'
  on-tertiary-fixed-variant: '#2b5008'
  background: '#fdfae7'
  on-background: '#1c1c11'
  surface-variant: '#e6e3d0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  title-lg:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The brand personality is scholarly, evocative, and deeply grounded in nature. It evokes the atmosphere of a private library hidden within a fog-laden forest—quiet, permanent, and premium. The target audience appreciates slow journalism, archival depth, and the tactile quality of physical objects.

The design style is a blend of **Minimalism** and **Tactile/Skeuomorphism**. While the layout remains clean and structured, the UI uses subtle paper textures, organic shadows, and rich color layering to create a sense of physical presence. The emotional response should be one of "sanctuary"—a focused, quiet space for intellectual exploration.

## Colors
The palette is inspired by the transition from the forest floor to the library shelf. 

- **Primary (Deep Forest):** Used for typography, high-emphasis icons, and immersive backgrounds.
- **Surface (Warm Parchment):** The foundational canvas. It should feel like high-quality, uncoated paper.
- **Surface Containers:** Utilize muted versions of Moss (#4f772d at 5-10% opacity) for subtle grouping or rich Oak Brown (#582f0e) for dark-mode-like callouts within the light canvas.
- **Accents:** Use Antique Gold sparingly for citations, borders, or hover states to provide a metallic "foil" feel. Sage Green serves as a secondary functional color for success states or highlights.

## Typography
The typography system relies on the contrast between the high-contrast, elegant serifs of the headings and the utilitarian, highly legible sans-serif for long-form reading. 

- **Headlines:** Use **Playfair Display**. Tighten letter spacing for larger displays to create an editorial, "ink-on-paper" look.
- **Body:** Use **Source Sans 3**. Ensure generous line-height to maintain a relaxed, premium reading experience.
- **Labels:** Use uppercase for metadata (e.g., date, category) with increased letter spacing to evoke the feeling of cataloging or archival labeling.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain the feel of a printed book, centering the content with wide "margins." 

- **Desktop:** 12-column grid with wide margins to create a sense of focus and exclusivity.
- **Mobile:** Single column with 20px safe areas. 
- **Rhythm:** Use an 8px base unit. Vertical spacing between sections should be generous (80px - 120px) to allow the "parchment" surface to breathe, reinforcing the calm, scholarly vibe.

## Elevation & Depth
Depth is communicated through **Tonal Layers** rather than heavy shadows. 

- **Level 0 (Base):** Parchment (#f4f1de).
- **Level 1 (Cards):** A slightly darker tint of parchment or a 1px border in Moss Green at 20% opacity. 
- **Shadows:** When used, shadows must be extremely soft and "ambient," using a Deep Forest Green tint (#1b3022) at 5% opacity to simulate the way an object sits on a thick page.
- **Depth Metaphor:** Elements should feel like they are either embossed into the paper or resting lightly on top of it.

## Shapes
This design system uses **Soft** roundedness. Sharp corners feel too clinical, while pill-shapes feel too "tech." 

A subtle 4px (0.25rem) radius on buttons and containers mimics the slightly softened corners of a well-loved hardcover book or vintage photograph. Large imagery may use a slightly larger radius (8px) to soften the forest photography.

## Components
- **Buttons:** Primary buttons use the Deep Forest Green background with Parchment text. Secondary buttons are "Ghost" style with an Oak Brown border and text. 
- **Cards:** Cards should have no background (using only the surface) and be defined by a thin, 1px border in Antique Gold or a soft Moss Green.
- **Inputs:** Input fields should feel like "blanks" in a form. Use a bottom-border only or a very light fill in a muted wood tone.
- **Chips/Tags:** Use the Label-Caps typography style. Backgrounds should be muted Sage Green or Oak Brown with high-contrast text.
- **Lists:** Use elegant serifs for list numbers. Separate items with a faint, horizontal rule in Antique Gold to imply a classic ledger.
- **Specialty Component (The "Ex Libris" Seal):** Use a circular, gold-tinted badge for featured content or "editor's choice" to reinforce the scholarly aesthetic.