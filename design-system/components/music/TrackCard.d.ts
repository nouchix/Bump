/**
 * Track tile for the browse grid — cover, title, artist, price, stream + buy actions.
 * @startingPoint section="Music" subtitle="Track tile with stream and buy" viewport="700x260"
 */
export interface TrackCardProps {
  title: string;
  artist: string;
  coverUrl?: string;
  /** 0 = free stream */
  priceCents?: number;
  /** Artist is verified (Pulse check) */
  verified?: boolean;
  /** This track is loaded in the player */
  active?: boolean;
  playing?: boolean;
  onPlay?: () => void;
  onBuy?: () => void;
  style?: React.CSSProperties;
}
export declare function TrackCard(props: TrackCardProps): JSX.Element;
