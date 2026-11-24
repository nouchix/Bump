/** Transient confirmation. Rises in with ease-out-expo. */
export interface ToastProps {
  title: string;
  message?: string;
  /** Lucide icon in the colored disc */
  icon?: string;
  tone?: 'signal' | 'pulse' | 'neutral';
  action?: string;
  onAction?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
