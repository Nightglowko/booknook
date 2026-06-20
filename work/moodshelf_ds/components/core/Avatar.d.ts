import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image URL. Omit to render initials. */
  src?: string;
  /** Full name — drives initials and tint when no image. */
  name?: string;
  /** Diameter in px. Default 44. */
  size?: number;
  /** Show the candlelight ring. Default true. */
  ring?: boolean;
}

/** Reader avatar with a warm gold ring; initials fallback on a tinted plate. */
export function Avatar(props: AvatarProps): JSX.Element;
