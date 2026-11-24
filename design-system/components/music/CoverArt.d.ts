/** Square cover art with disc placeholder and optional hover play overlay. */
export interface CoverArtProps {
  src?: string;
  alt?: string;
  size?: number;
  radius?: number | string;
  playing?: boolean;
  /** Show the play/pause overlay on hover */
  showPlay?: boolean;
  onPlay?: () => void;
  style?: React.CSSProperties;
}
export declare function CoverArt(props: CoverArtProps): JSX.Element;
