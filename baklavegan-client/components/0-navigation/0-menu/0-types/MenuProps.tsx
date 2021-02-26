export interface MenuProps {
  clicked: boolean;
  toggleClick: () => void;
  handleTransition: (devLink?: string) => void;
  setDevPageClicked: any;
}
