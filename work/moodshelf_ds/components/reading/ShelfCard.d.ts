import * as React from 'react';
import { BookCoverPalette } from './BookCover';

export interface ShelfBook {
  title?: string;
  author?: string;
  src?: string;
  palette?: BookCoverPalette;
}

/**
 * Themed-shelf preview tile — covers leaning on a wooden ledge.
 * @startingPoint section="Reading" subtitle="Themed shelf preview tile" viewport="700x260"
 */
export interface ShelfCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shelf name, e.g. "books that destroyed me". */
  name: string;
  /** Book count shown beside the name. */
  count?: number;
  /** Up to 4 books shown leaning on the ledge. */
  books?: ShelfBook[];
  /** "inverse" for a dark moody shelf tile. */
  tone?: 'paper' | 'inverse';
  onClick?: () => void;
}

/** Themed-shelf preview tile — covers leaning on a wooden ledge. */
export function ShelfCard(props: ShelfCardProps): JSX.Element;
