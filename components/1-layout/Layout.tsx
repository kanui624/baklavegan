// React
import { useState, Fragment, useEffect } from 'react';

// Next
import { useRouter } from 'next/router';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { exitMenu } from '@/redux/slices/MenuTransitionSlice';
import { setPageClicked } from '@/redux/slices/PageClickedSlice';

// GSAP Animations
import {
  animateMenuIn,
  animateMenuOut,
} from '@/animations/1-layout/LayoutAnimations';
import {
  showDevNote,
  hideDevNote,
} from '@/animations/1-layout/DevNoteAnimations';

// Components
import MemoBVCanvas from '../0-navigation/0-menu/5-canvas/BVCanvas';
import MenuButtonRoot from '../0-navigation/1-menubutton/MenuButtonRoot';
import MenuButtonPage from '../0-navigation/1-menubutton/MenuButtonPage';
import DevNote from './DevNote';

// Custom Hooks
import { useWindowResize } from '../../customhooks/useWindowResize';

// Styles
import styles from '@/styles/1-layout-scss/layout.module.scss';

// React Types
import { ReactNode, FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Types
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  // Global State
  const {
    PageClicked: { pageClicked },
  } = useSelector<AppState, AppState>((state) => state);

  // Define Global State Dispatch
  const dispatch = useDispatch();

  // Local State
  const [ready, setReady] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // Custom Hooks
  const [width, height] = useWindowResize();

  // Determine Root URL Path
  const root = useRouter().pathname === '/' ? true : false;

  // Initiate Menu Transition
  const toggleClick = () => {
    if (!disabled) {
      setClicked(!clicked);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 2000);
    }
  };

  // Define Global State Dispatch Function
  const dispatchPageClicked = (selectedPage: string) => {
    dispatch(setPageClicked({ pageClicked: selectedPage }));
  };

  // const handleTransition = (devLink?: string) => {
  //     dispatch(exitMenu({ transition: false }));
  // };

  // Handle Transition in and out of Menu
  const handleTransition = (devLink: string) => {
    dispatchPageClicked(devLink);
    if (devLink === 'about' || devLink === 'contact') {
      dispatch(exitMenu({ transition: false }));
      hideDevNote('.devnotetext');
    } else {
      showDevNote('.devnotetext');
    }
  };

  // Disable Status on Component Mount
  const initialDisableStatus = () => {
    setTimeout(() => {
      setDisabled(false);
    }, 4000);
  };

  useEffect(() => {
    initialDisableStatus();
  }, []);

  useEffect(() => {
    if (ready && clicked) {
      animateMenuIn('#canvas', '#canvasbg');
    } else {
      animateMenuOut('#canvas', '#canvasbg');
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
          handleTransition={handleTransition}
          onCompile={() => setReady(true)}
        />
      </div>
      <DevNote pageClicked={pageClicked} />
      {/* <span className="fixed text-4xl bottom-20">
        {width} x {height}
      </span> */}
    </Fragment>
  );
};

export default Layout;
