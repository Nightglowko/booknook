import * as React from 'react';

/**
 * Pill-shaped primary action button.
 * @startingPoint section="Core" subtitle="Pill buttons in every variant" viewport="700x430"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. Default "primary". */
  variant?: 'primary' | 'secondary' | 'ghost' | 'soft' | 'danger';
  /** Control height. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. */
  full?: boolean;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/** The MoodShelf button — pill-shaped, warm, with a gentle press-shrink. */
export function Button(props: ButtonProps): JSX.Element;
