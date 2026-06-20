import * as React from 'react';
import { IconProps } from './Icon';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon name. */
  icon?: IconProps['name'];
  /** "search" renders a full pill with a default search icon. */
  variant?: 'default' | 'search';
  /** Style for the outer wrapper. */
  wrapStyle?: React.CSSProperties;
}

/** Text/search field on sunken paper; border warms to gold on focus. */
export function Input(props: InputProps): JSX.Element;
