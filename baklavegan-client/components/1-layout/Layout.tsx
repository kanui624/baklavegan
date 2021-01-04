// React
import { useState, useEffect, Fragment } from 'react';

// Next
import Link from 'next/link';

// Components
import BVCanvas from '../0-navigation/BVCanvas';

// React Types
import { ReactNode, FC } from 'react';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Fragment>
      <div className="fixed z-50">
        <button onClick={() => setClicked(!clicked)}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </button>
      </div>
      <BVCanvas clicked={clicked} setClicked={setClicked} />
      {children}
    </Fragment>
  );
};

export default Layout;
