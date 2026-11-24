/** Segmented filter (pill) or section tabs (underline). */
export interface TabItem { id: string; label: string }
export interface TabsProps {
  items: Array<TabItem | string>;
  value: string;
  onChange?: (id: string) => void;
  variant?: 'pill' | 'underline';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
