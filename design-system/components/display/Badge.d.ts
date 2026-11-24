/** Small status label. pulse = verified artist; signal = commerce/active; live = solid Signal. */
export interface BadgeProps {
  tone?: 'neutral' | 'signal' | 'pulse' | 'success' | 'live';
  /** Leading Lucide icon */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
