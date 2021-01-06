// React
import { useState, Fragment, useEffect } from 'react';

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

  const bgTl = gsap.timeline();
  const canvasTl = gsap.timeline();

  const animateIn = () => {
    canvasTl.to('#canvas', { display: 'block' });
    canvasTl.to('#canvas', { opacity: '1', duration: 0.7 });
    bgTl.to('#canvasbg', { display: 'block' });
    bgTl.to('#canvasbg', { opacity: 1, duration: 1 });
  };

  const animateOut = () => {
    bgTl.to('#canvasbg', { opacity: 0, duration: 0.8, delay: 0.5 });
    bgTl.to('#canvasbg', { display: 'none' });
    gsap.to('#canvas', { display: 'none', delay: 1 });
  };

  const buttonTl = gsap.timeline();

  const initialButtonLoad = () => {
    buttonTl.to('#menubutton', { display: 'block', delay: 2 });
    buttonTl.to('#menubutton', { opacity: 1, duration: 0.5 });
  };

  useEffect(() => {
    initialButtonLoad();
  }, []);

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
        id="menubutton"
        className={`${styles.menubuttonload} fixed z-50`}
        onClick={() => toggleClick()}
        disabled={disabled}
      >
        open
      </button>
      <div
        id="canvasbg"
        className={`${styles.canvasbackground}  fixed inset-0`}
      />
      <div id="canvas" className={`${styles.canvascontainer} `}>
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
