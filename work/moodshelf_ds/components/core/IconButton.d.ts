import * as React from 'react';
import { IconProps } from './Icon';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name (see Icon). */
  name: IconProps['name'];
  /** Visual style. Default "ghost". */
  variant?: 'ghost' | 'soft' | 'solid' | 'glass';
  /** Diameter in px. Default 40. */
  size?: number;
  /** Override icon glyph size. */
  iconSize?: number;
  /** Active/selected state (heart fills when active). */
  active?: boolean;
  /** Accessible label. */
  label?: string;
}

/** Circular icon button; "glass" variant is for placing over book imagery. */
export function IconButton(props: IconButtonProps): JSX.Element;
