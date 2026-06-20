import * as React from 'react';

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
}

export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Options as strings or {value,label} objects. */
  options: Array<string | SegmentedOption>;
  /** Currently selected value. */
  value: string;
  /** Called with the newly selected value. */
  onChange?: (value: string) => void;
}

/** Pill segmented control for view/filter switches; active segment carries the gold wash. */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
