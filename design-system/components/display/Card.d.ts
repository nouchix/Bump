/** Elevated surface on Grille, 16px radius, 1px border. */
export interface CardProps {
  variant?: 'default' | 'outline' | 'sunken' | 'raised';
  /** px. Default 16 */
  padding?: number | string;
  /** Border brightens on hover */
  interactive?: boolean;
  /** Signal→Pulse glow on hover (hero moments only) */
  glow?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
