import * as React from 'react';

/**
 * Soft warm surface plate — the base of most MoodShelf UI.
 * @startingPoint section="Core" subtitle="Surface cards in four tones" viewport="700x430"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface tone. Default "paper". */
  tone?: 'paper' | 'raised' | 'sunken' | 'inverse';
  /** Inner padding. Default "md". */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover for tappable cards. */
  interactive?: boolean;
  children?: React.ReactNode;
}

/** Soft warm surface plate — the base container for most MoodShelf UI. */
export function Card(props: CardProps): JSX.Element;
