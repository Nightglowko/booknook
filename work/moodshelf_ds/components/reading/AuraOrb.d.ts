import * as React from 'react';

/**
 * Glowing gradient orb visualizing a reader's emotional mix (their "aura").
 * @startingPoint section="Reading" subtitle="Reading-aura gradient orb" viewport="700x320"
 */
export interface AuraOrbProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 2–4 emotion colors blended into the orb. */
  colors?: string[];
  /** Diameter in px. Default 180. */
  size?: number;
  /** Word rendered inside the orb (e.g. the dominant mood). */
  label?: React.ReactNode;
  /** Small uppercase caption beneath the orb. */
  caption?: React.ReactNode;
}

/** Glowing gradient orb visualizing a reader's emotional mix. */
export function AuraOrb(props: AuraOrbProps): JSX.Element;
