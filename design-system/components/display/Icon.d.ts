/** Lucide icon wrapper. 2px stroke, rounded caps/joins, 24×24 grid. Requires the Lucide UMD script on the page. */
export interface IconProps {
  /** Lucide icon name, kebab or Pascal case: "play", "shopping-cart", "Disc3" */
  name: string;
  /** Pixel size. Default 20 */
  size?: number;
  /** Default 2 (brand standard) */
  strokeWidth?: number;
  color?: string;
  /** Pass "currentColor" for filled glyphs (play/pause in players) */
  fill?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
