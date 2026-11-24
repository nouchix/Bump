/**
 * Persistent bottom player — now playing, transport + scrubber, direct-buy pill.
 * @startingPoint section="Music" subtitle="Bottom audio player bar" viewport="1100x120"
 */
export interface PlayerTrack { title: string; artist?: string; coverUrl?: string; priceCents?: number }
export interface PlayerBarProps {
  track: PlayerTrack | null;
  playing?: boolean;
  /** seconds */
  currentTime?: number;
  /** seconds */
  duration?: number;
  onToggle?: () => void;
  onSeek?: (seconds: number) => void;
  onBuy?: () => void;
  /** Pin to viewport bottom */
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function PlayerBar(props: PlayerBarProps): JSX.Element | null;
