// React
import { useState, Fragment, useEffect } from 'react';

import { Transition } from 'react-spring/three';

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
  const tl = gsap.timeline();

  useEffect(() => {
    if (ready && clicked) {
      gsap.to('.canvas', { display: 'block' });
      tl.to('.canvasbg', { display: 'block' });
      tl.to('.canvasbg', { opacity: 1 });
    } else {
      gsap.to('.canvas', { display: 'none' });
      tl.to('.canvasbg', { opacity: 0 });
      tl.to('.canvasbg', { display: 'none' });
    }
  }, [clicked, ready]);

  const toggleClick = () => setClicked(!clicked);

  return (
    <Fragment>
      <button
        className="fixed z-50"
        onClick={() => toggleClick()}
        disabled={!ready}
      >
        open
      </button>
      <div className={`${styles.canvasbackground} canvasbg fixed inset-0`} />
      <div className={`${styles.canvascontainer} canvas`}>
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
