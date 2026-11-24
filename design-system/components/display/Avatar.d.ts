/** Round artist/listener avatar. Verified artists get the Pulse ring. */
export interface AvatarProps {
  src?: string;
  /** Used for alt text and initials fallback */
  name?: string;
  size?: number;
  /** Pulse ring frame */
  verified?: boolean;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
