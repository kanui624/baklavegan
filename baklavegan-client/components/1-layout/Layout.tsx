// React
import { useState, Fragment, useEffect } from 'react';

// Next
import { useRouter } from 'next/router';

// GSAP
import { gsap } from 'gsap';

// Components
import MemoBVCanvas from '../0-navigation/BVCanvas';
import MenuButtonRoot from './MenuButtonRoot';
import MenuButtonPage from './MenuButtonPage';

// React Types
import { ReactNode, FC } from 'react';

// Styles
import styles from '../../styles/Pages/layout.module.scss';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [ready, setReady] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const root = useRouter().pathname === '/' ? true : false;

  const bgTl = gsap.timeline();
  const canvasTl = gsap.timeline();

  const animateMenuIn = () => {
    canvasTl.to('#canvas', { display: 'block' });
    canvasTl.to('#canvas', { opacity: '1', duration: 0.7 });
    bgTl.to('#canvasbg', { display: 'block' });
    bgTl.to('#canvasbg', { opacity: 1, duration: 1 });
  };

  const animateMenuOut = () => {
    bgTl.to('#canvasbg', { opacity: 0, duration: 0.8, delay: 0.5 });
    bgTl.to('#canvasbg', { display: 'none' });
    gsap.to('#canvas', { display: 'none', delay: 1.5 });
  };

  const toggleClick = () => {
    if (!disabled) {
      setClicked(!clicked);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (ready && clicked) {
      animateMenuIn();
    } else {
      animateMenuOut();
    }
  }, [clicked, ready]);

  return (
    <Fragment>
      <div className="fixed inset-0 h-full max-w-full">
        <div className="flex justify-center items-center container mx-auto h-full">
          {children}
          {root ? (
            <MenuButtonRoot disabled={disabled} toggleClick={toggleClick} />
          ) : (
            <MenuButtonPage
              clicked={clicked}
              disabled={disabled}
              toggleClick={toggleClick}
            />
          )}
        </div>
      </div>
      <div
        id="canvasbg"
        className={`${styles.canvasbackground} fixed inset-0`}
      />
      <div id="canvas" className={`${styles.canvascontainer} absolute`}>
        <MemoBVCanvas
          clicked={clicked}
          toggleClick={toggleClick}
          onCompile={() => setReady(true)}
        />
      </div>
    </Fragment>
  );
};

export default Layout;
