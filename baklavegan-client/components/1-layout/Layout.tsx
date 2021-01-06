// React
import { useState, Fragment, useEffect, useMemo } from 'react';

// Next
import Link from 'next/link';

// GSAP
import { gsap } from 'gsap';

// Components
import MemoBVCanvas from '../0-navigation/BVCanvas';

// React Types
import { ReactNode, FC } from 'react';

// Styles
import styles from '../../styles/BVCanvas/CanvasContainer.module.scss';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!clicked && ready) {
      gsap.to('.canvasanimation', { display: 'none' });
    } else {
      gsap.to('.canvasanimation', { display: 'block' });
    }
  }, [clicked, ready]);

  const toggleClick = () => setClicked(!clicked);

  return (
    <Fragment>
      <button className="fixed z-50" onClick={() => toggleClick()}>
        hey
        {/* <Link href="/">
            <a>Home</a>
          </Link> */}
      </button>

      <div className={`${styles.canvascontainer} canvasanimation`}>
        <MemoBVCanvas
          clicked={clicked}
          toggleClick={toggleClick}
          onCompile={() => setReady(true)}
        />
      </div>
      {children}
    </Fragment>
  );
};

export default Layout;
