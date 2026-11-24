/** Centered modal panel (24px radius) over a blurred Void scrim. */
export interface DialogProps {
  open?: boolean;
  /** Lucide icon in a Signal-tinted disc */
  icon?: string;
  title?: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Buttons row — pass flex:1 buttons */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** Render the panel without the fixed overlay (for previews) */
  inline?: boolean;
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
