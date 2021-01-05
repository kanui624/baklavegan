// React
import { useState, useEffect, Fragment } from 'react';

// Next
import Link from 'next/link';

// GSAP
import { gsap } from 'gsap';

// Components
import BVCanvas from '../0-navigation/BVCanvas';

// React Types
import { ReactNode, FC } from 'react';

// Styles
import styles from '../../styles/BVCanvas/CanvasContainer.module.scss';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [clicked, setClicked] = useState(true);

  const toggleClick = () => {
    const tl = gsap.timeline();
    setClicked(!clicked);
    if (clicked) {
      tl.to('.canvasanimation', { display: 'block' });
      tl.to('.canvasanimation', { opacity: 1, duration: 0.4 });
    } else {
      tl.to('.canvasanimation', { opacity: 0, duration: 0.5, delay: 0.2 });
      tl.to('.canvasanimation', { display: 'none' });
    }
  };

  return (
    <Fragment>
      <div className="fixed z-50">
        <button onClick={() => toggleClick()}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </button>
      </div>
      <div className={`${styles.canvascontainer} canvasanimation`}>
        <BVCanvas clicked={clicked} toggleClick={toggleClick} />
      </div>
      {children}
    </Fragment>
  );
};

export default Layout;
