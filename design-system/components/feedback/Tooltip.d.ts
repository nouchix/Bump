/** Hover label — Static chip on Void, springs in. */
export interface TooltipProps {
  label: string;
  side?: 'top' | 'bottom';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
