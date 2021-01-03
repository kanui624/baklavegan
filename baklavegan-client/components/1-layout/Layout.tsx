// Components
import BVCanvas from '../0-navigation/BVCanvas';

// React Types
import { ReactNode, Fragment, FC } from 'react';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <BVCanvas />
      {children}
    </Fragment>
  );
};

export default Layout;
