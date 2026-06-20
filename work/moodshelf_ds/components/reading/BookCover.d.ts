import * as React from 'react';

export interface BookCoverPalette {
  bg: string;
  fg: string;
  rule: string;
}

/**
 * A book as a treasured object — real image or generated typographic cover.
 * @startingPoint section="Reading" subtitle="Generated typographic book covers" viewport="700x320"
 */
export interface BookCoverProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Book title. */
  title?: string;
  /** Author name (rendered as an uppercase footer). */
  author?: string;
  /** Real cover image URL — overrides the generated cover. */
  src?: string;
  /** Cover width in px; height is 1.5× (2:3 book ratio). Default 120. */
  width?: number;
  /** Force a palette; otherwise derived deterministically from the title. */
  palette?: BookCoverPalette;
  /** Render the spine shading + page-edge highlight. Default true. */
  spine?: boolean;
}

/** A book as a treasured object — real image or generated typographic cover. */
export function BookCover(props: BookCoverProps): JSX.Element;
