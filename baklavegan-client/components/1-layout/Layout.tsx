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
  const [disabled, setDisabled] = useState(false);

  const tl = gsap.timeline();

  const animateIn = () => {
    gsap.to('.canvas', { display: 'block' });
    tl.to('.canvasbg', { display: 'block' });
    tl.to('.canvasbg', { opacity: 1, duration: 1 });
  };

  const animateOut = () => {
    tl.to('.canvasbg', { opacity: 0, duration: 0.8 });
    tl.to('.canvasbg', { display: 'none' });
    gsap.to('.canvas', { display: 'none', delay: 1 });
  };

  useEffect(() => {
    if (ready && clicked) {
      animateIn();
    } else {
      animateOut();
    }
  }, [clicked, ready]);

  const toggleClick = () => {
    setClicked(!clicked);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <Fragment>
      <button
        className="fixed z-50"
        onClick={() => toggleClick()}
        disabled={disabled}
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
