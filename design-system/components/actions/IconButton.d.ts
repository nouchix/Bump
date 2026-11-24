/** Circular icon-only control — play/pause, transport, close, overflow. */
export interface IconButtonProps {
  /** Lucide icon name */
  icon: string;
  /** Accessible label (also shown as native title) */
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'soft' | 'static';
  /** sm 32, md 40, lg 56 */
  size?: 'sm' | 'md' | 'lg';
  /** Fill the glyph (play/pause) */
  filled?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
