/**
 * Primary action control. Springs to 96% on press ("the Bump").
 * @startingPoint section="Actions" subtitle="Bump button — primary, soft, ghost" viewport="700x340"
 */
export interface ButtonProps {
  /** primary = Signal fill (one per view). soft = Signal tint for secondary money actions. pulse = Pulse fill, sparingly. */
  variant?: 'primary' | 'secondary' | 'soft' | 'outline' | 'ghost' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  /** Leading Lucide icon name */
  icon?: string;
  /** Trailing Lucide icon name */
  iconRight?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Fully rounded — used for inline commerce buttons ("Buy Track") */
  pill?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
