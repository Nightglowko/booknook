import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Reading status. Default "reading". */
  status?: 'reading' | 'finished' | 'want' | 'dnf' | 'favorite';
  /** Override the default label text. */
  children?: React.ReactNode;
}

/** Small status pill with a leading dot, e.g. "Reading", "Finished". */
export function Badge(props: BadgeProps): JSX.Element;
