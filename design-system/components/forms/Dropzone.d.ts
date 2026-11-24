/** Dashed drop target for audio and cover-art uploads. Border turns Signal on hover/drag. */
export interface DropzoneProps {
  /** Lucide icon. Default "music" */
  icon?: string;
  title?: string;
  hint?: string;
  /** When set, shows the chosen file name with a check icon */
  fileName?: string;
  accept?: string;
  onFile?: (file: File) => void;
  /** Smaller variant for secondary uploads (cover art) */
  compact?: boolean;
  style?: React.CSSProperties;
}
export declare function Dropzone(props: DropzoneProps): JSX.Element;
