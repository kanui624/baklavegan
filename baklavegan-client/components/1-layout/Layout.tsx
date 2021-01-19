// React
import { useState, Fragment, useEffect } from 'react';

// Next
import { useRouter } from 'next/router';
import Image from 'next/image';

// React Spring
import { useSpring, animated } from 'react-spring';

// GSAP
import { gsap } from 'gsap';

// Components
import MemoBVCanvas from '../0-navigation/BVCanvas';

// React Types
import { ReactNode, FC } from 'react';

// Styles
import styles from '../../styles/Pages/layout.module.scss';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const [disabled, setDisabled] = useState(false);

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

  const initialButtonLoad = () => {
    gsap.to('#menubutton', { opacity: 1, duration: 4, delay: 2 });
  };

  const { y } = useSpring({
    y: menuClicked ? '20rem' : '0rem',
  });

  const toggleClick = () => {
    if (!disabled) {
      setClicked(!clicked);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 2000);
    }
  };

  const handleMenuClick = () => {
    setMenuClicked(true);
    setTimeout(() => {
      toggleClick();
    }, 1.2);
  };

  useEffect(() => {
    initialButtonLoad();
    console.log(router.pathname);
  }, []);

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
          <div className="absolute">{children}</div>
          <button
            id="menubutton"
            className={`${styles.enterbtn} flex justify-center items-center opacity-0`}
            onClick={() => {
              handleMenuClick();
            }}
          >
            <animated.div
              className={`${styles.enterimage} absolute bottom-24`}
              style={{ transform: y.to((y) => `translateY(${y})`) }}
            >
              <Image
                src="/2-images/1-index/1-enter-btn.png"
                alt="enter"
                width={175}
                height={219}
              />
            </animated.div>
            <animated.div
              className={`${styles.entertext} absolute bottom-40`}
              style={{ transform: y.to((y) => `translateY(${y})`) }}
            >
              <h3>enter</h3>
            </animated.div>
          </button>
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

{
  /* <button
  id="menubutton"
  className={`${styles.menubuttonload} fixed`}
  onClick={() => toggleClick()}
  disabled={disabled}
>
  open
</button>; */
}
