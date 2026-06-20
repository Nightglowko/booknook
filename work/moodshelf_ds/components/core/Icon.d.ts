import * as React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Icon name from the MoodShelf (Lucide-derived) set. */
  name:
    | 'book-open' | 'book' | 'library' | 'bookmark' | 'heart' | 'share'
    | 'plus' | 'star' | 'sparkles' | 'feather' | 'flame' | 'moon'
    | 'search' | 'x' | 'settings' | 'user' | 'calendar' | 'check'
    | 'chevron-right' | 'chevron-left' | 'arrow-right' | 'more-horizontal'
    | 'quote' | 'bell' | 'camera' | 'download' | 'instagram' | 'pen-line' | 'globe';
  /** Pixel size (width & height). Default 20. */
  size?: number;
  /** Stroke width. Default 1.75. */
  strokeWidth?: number;
  /** Fill — pass "currentColor" for a filled glyph (e.g. saved heart). */
  fill?: string;
}

/** Stroke icon at a refined 1.75 weight. Inherits color via currentColor. */
export function Icon(props: IconProps): JSX.Element;

export const ICON_NAMES: string[];
