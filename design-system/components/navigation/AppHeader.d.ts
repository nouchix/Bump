/** Sticky blurred top bar: wordmark, "100% to artist" badge, Upload + Sign in. */
export interface AppHeaderProps {
  onNavigate?: (page: 'home' | 'upload' | 'login') => void;
  /** Signed-in user shows an avatar instead of Sign in */
  user?: { name: string; avatar?: string; verified?: boolean } | null;
  sticky?: boolean;
  style?: React.CSSProperties;
}
export declare function AppHeader(props: AppHeaderProps): JSX.Element;
