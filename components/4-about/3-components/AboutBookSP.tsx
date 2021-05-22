// React
import { useState, useEffect, useRef, Fragment } from 'react';

// Next
import { useRouter } from 'next/router';

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
import { AboutBookSPData } from '@/components/4-about/1-data/AboutBookSPData';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Types
import { AboutPageDataProps } from '../0-types/AboutPageDataProps';

const AboutBookSP: FC = () => {
  const dispatch = useDispatch();
  const {
    AboutPageLoaded: { pageLoaded },
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
    WindowSize: { width },
    PageClicked: { pageClicked },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookSP = useRef();
  const calcSize = (width * 2) / 16;
  const remWidth = Math.round(calcSize * 2) / 2;

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
      (aboutBookSP.current as any).pageFlip.flipNext();
    } else {
      (aboutBookSP.current as any).pageFlip.flipPrev();
    }
  };

  const handleDisable = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const handleNavSP = (e: any, next: boolean) => {
    handleDisable();
    handleDispatchPageCount(next);
    handlePageFlip(next);
    handleNavBounce(e.target.alt, 'sp');
  };

  const handleInitializeBook = () => {
    animateOut('.aboutbookcontainersp', '.booknavssp');
    setTimeout(() => {
      dispatch(unloadPage({ pageLoaded: false }));
      dispatch(initializePage({ pageCount: 0 }));
      (aboutBookSP.current as any).pageFlip.turnToPage(0);
    }, 3000);
  };

  const handleInitialLoad = () => {
    animateInInitialLoad('.aboutbookcontainersp', '.booknavssp');
    setTimeout(() => {
      dispatch(loadPage({ pageLoaded: true }));
    }, 2000);
  };

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBookSP.current as any).pageFlip.turnToPage(pageCount * 2);
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
      animateInIsLoaded('.aboutbookcontainersp', '.booknavssp');
    }

    return () => {
      mounted = false;
    };
  }, [transition]);

  useEffect(() => {
    let mounted = true;

    if (mounted && pageCount === 8) {
      removeNav('.booknavforwardsp');
    } else {
      addNav('.booknavforwardsp');
    }
    if (mounted && pageCount === 0) {
      removeNav('.booknavbackwardsp');
    } else {
      addNav('.booknavbackwardsp');
    }
    return () => {
      mounted = false;
    };
  }, [pageCount]);

  return (
    <div className="spcontainer fixed">
      <div className="aboutbookcontainersp" style={{ width: `${remWidth}rem` }}>
        <HTMLFlipBook
          ref={aboutBookSP}
          className="aboutbooksp h-full max-w-full"
          useMouseEvents={false}
          flippingTime={1500}
          maxShadowOpacity={0}
          size={'stretch'}
          width={400}
          height={535}
          minWidth={80}
          minHeight={107}
          maxWidth={1000}
          maxHeight={1337}
        >
          {AboutBookSPData.map(
            ({ id, texta, textb, svg, link }: AboutPageDataProps) => {
              return (
                <AboutPage
                  key={id}
                  id={id}
                  texta={texta}
                  textb={textb}
                  svg={svg}
                  link={link}
                  tag={'sp'}
                />
              );
            }
          )}
        </HTMLFlipBook>
      </div>
      <div
        className="booknavcontainersp flex justify-between"
        style={{ width: width }}
      >
        <button
          disabled={pageCount === 0 ? true : disabled}
          className="booknavssp ml-4"
          onClick={(e) => handleNavSP(e, false)}
        >
          <img
            className="booknavbackwardsp"
            src="/3-svgs/about/book-nav.svg"
            alt="book-nav-backward-sp"
          />
        </button>
        <button
          disabled={pageCount === 8 ? true : disabled}
          className="booknavssp mr-4"
          onClick={(e) => handleNavSP(e, true)}
        >
          <img
            className="booknavforwardsp"
            src="/3-svgs/about/book-nav.svg"
            alt="book-nav-forward-sp"
          />
        </button>
      </div>
    </div>
  );
};

export default AboutBookSP;
