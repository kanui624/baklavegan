export interface CanvasProps {
  clicked: boolean;
  toggleClick: () => void;
  handleTransition: (devLink?: string) => void;
  onCompile: () => void;
  setDevPageClicked: any;
}
