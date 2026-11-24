/** 5-bar breathing equalizer — idle/playing indicator. */
export interface EqualizerProps {
  playing?: boolean;
  bars?: number;
  /** px */
  height?: number;
  color?: string;
  barWidth?: number;
  style?: React.CSSProperties;
}
export declare function Equalizer(props: EqualizerProps): JSX.Element;
