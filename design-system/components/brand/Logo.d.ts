/**
 * Bump logo — phone pill + AirPod + broadcast arcs, with BUMP wordmark.
 * @startingPoint section="Brand" subtitle="Logo lockups" viewport="700x260"
 */
export interface LogoProps {
  /** horizontal = primary lockup; stacked for app/merch; mark = icon only; wordmark = type only */
  variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark';
  /** dark = for dark backgrounds (default); light = for light backgrounds; signal/white/black = one-colour */
  tone?: 'dark' | 'light' | 'signal' | 'white' | 'black';
  /** Rendered height in px. Default 32 */
  height?: number;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
