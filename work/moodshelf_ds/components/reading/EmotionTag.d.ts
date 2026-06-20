import * as React from 'react';

/**
 * The signature MoodShelf element — a handwritten, color-coded emotion tag.
 * @startingPoint section="Reading" subtitle="Handwritten emotion tags" viewport="700x150"
 */
export interface EmotionTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Named emotion → drives the hue. */
  emotion?: 'joy' | 'heartbreak' | 'comfort' | 'longing' | 'eerie' | 'tender' | 'wonder' | 'rage';
  /** Override fill color (any CSS color). */
  color?: string;
  /** Size. Default "md". */
  size?: 'sm' | 'md' | 'lg';
  /** If provided, renders a × remove affordance. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

/** Handwritten, color-coded emotion tag — the signature MoodShelf element. */
export function EmotionTag(props: EmotionTagProps): JSX.Element;
