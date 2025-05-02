export interface AppContextType {
  hoveredIcon: string;
  setHoveredIcon: (icon: string) => void;
  hoveredIcons: string[];
  setHoveredIcons: (labels: string[]) => void;
}
