/** Text input on Void with Signal focus ring. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Inline text before the value, e.g. "$" */
  prefix?: string;
  /** Leading Lucide icon */
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
  inputStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
