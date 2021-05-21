// React
import { useState, useEffect, useRef, Fragment } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadPage, unloadPage } from '@/redux/slices/AboutPageLoadedSlice';
import {
  nextPage,
  prevPage,
  initializePage,
} from '@/redux/slices/AboutPageCountSlice';

// Components
import AboutPage from './AboutPage';

// Helpers
import { handleNavBounce } from '../2-helpers/AboutBookHelpers';

// GSAP Animations
import {
  animateInInitialLoad,
  animateInIsLoaded,
  animateOut,
  addNav,
  removeNav,
} from '@/animations/4-about/AboutAnimations';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { AboutBookDPData } from '@/components/4-about/1-data/AboutBookDPData';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Types
import { AboutPageDataProps } from '../0-types/AboutPageDataProps';

const AboutBookDPP: FC = () => {
  const dispatch = useDispatch();
  const {
    AboutPageLoaded: { pageLoaded },
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
    WindowSize: { width },
    PageClicked: { pageClicked },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookDPP = useRef();

  const [disabled, setDisabled] = useState(false);

  const handleDispatchPageCount = (dispatchCount: boolean) => {
    if (dispatchCount) {
      dispatch(nextPage({ pageCount: pageCount + 1 }));
    } else {
      dispatch(prevPage({ pageCount: pageCount - 1 }));
    }
  };

  const handlePageFlip = (pageFlip: boolean) => {
    if (pageFlip) {
      (aboutBookDPP.current as any).pageFlip.flipNext();
    } else {
      (aboutBookDPP.current as any).pageFlip.flipPrev();
    }
  };

  const handleDisable = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const handleNavDPP = (e: any, next: boolean) => {
    handleDispatchPageCount(next);
    handlePageFlip(next);
    handleNavBounce(e.target.alt, 'dpp');
    handleDisable();
  };

  const handleInitializeBook = () => {
    animateOut('.aboutbookcontainerdpp', '.booknavsdpp');
    setTimeout(() => {
      dispatch(unloadPage({ pageLoaded: false }));
      dispatch(initializePage({ pageCount: 0 }));
      (aboutBookDPP.current as any).pageFlip.turnToPage(0);
    }, 3000);
  };

  const handleInitialLoad = () => {
    animateInInitialLoad('.aboutbookcontainerdpp', '.booknavsdpp');
    dispatch(loadPage({ pageLoaded: true }));
  };

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBookDPP.current as any).pageFlip.turnToPage(pageCount * 2);
    }
    return () => {
      setDisabled(false);
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (transition && mounted) {
      handleInitializeBook();
    }

    if (!transition && !pageLoaded && mounted) {
      if (pageClicked === 'about' || pageClicked === '') {
        handleInitialLoad();
      }
    } else {
      animateInIsLoaded('.aboutbookcontainerdpp', '.booknavsdpp');
    }

    return () => {
      mounted = false;
    };
  }, [transition]);

  useEffect(() => {
    let mounted = true;
    if (mounted && pageCount === 8) {
      removeNav('.booknavforwarddpp');
    } else {
      addNav('.booknavforwarddpp');
    }
    if (mounted && pageCount === 0) {
      removeNav('.booknavbackwarddpp');
    } else {
      addNav('.booknavbackwarddpp');
    }
    return () => {
      mounted = false;
    };
  }, [pageCount]);

  return (
    <div className="dppcontainer fixed">
      <div className="aboutbookcontainerdpp" style={{ width: width }}>
        <HTMLFlipBook
          ref={aboutBookDPP}
          className="aboutbook inset-0 h-full max-w-full"
          useMouseEvents={false}
          flippingTime={1500}
          maxShadowOpacity={1}
          size={'stretch'}
          width={400}
          height={535}
          minWidth={80}
          minHeight={107}
          maxWidth={1000}
          maxHeight={1337}
        >
          {AboutBookDPData.map(
            ({ id, texta, textb, svg, link }: AboutPageDataProps) => {
              return (
                <AboutPage
                  key={id}
                  id={id}
                  texta={texta}
                  textb={textb}
                  svg={svg}
                  link={link}
                  tag={'dpp'}
                />
              );
            }
          )}
        </HTMLFlipBook>
      </div>
      <div
        className="booknavcontainerdpp flex justify-between"
        style={{ width: width }}
      >
        <button
          disabled={pageCount === 0 ? true : disabled}
          className="booknavsdpp ml-4"
          onClick={(e) => handleNavDPP(e, false)}
        >
          <img
            className="booknavbackwarddpp"
            src="/3-svgs/about/book-nav.svg"
            alt="book-nav-backward-dpp"
          />
        </button>
        <button
          disabled={pageCount === 8 ? true : disabled}
          className="booknavsdpp mr-4"
          onClick={(e) => handleNavDPP(e, true)}
        >
          <img
            className="booknavforwarddpp"
            src="/3-svgs/about/book-nav.svg"
            alt="book-nav-forward-dpp"
          />
        </button>
      </div>
    </div>
  );
};

export default AboutBookDPP;
