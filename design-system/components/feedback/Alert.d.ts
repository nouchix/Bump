/** Inline message block. success uses Signal tint (brand-positive), error uses deep red. */
export interface AlertProps {
  tone?: 'info' | 'success' | 'error' | 'pulse';
  title?: string;
  /** Override Lucide icon */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;
