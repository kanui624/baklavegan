// React
import { useState, useEffect, useRef, Fragment } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPage, unloadPage } from "@/redux/slices/AboutPageLoadedSlice";
import {
  nextPage,
  prevPage,
  initializePage,
} from "@/redux/slices/AboutPageCountSlice";

// Components
import AboutPage from "./AboutPage";

// Helpers
import { handleNavBounce } from "../2-helpers/AboutBookHelpers";

// GSAP Animations
import {
  animateInInitialLoad,
  animateInIsLoaded,
  animateOut,
  addNav,
  removeNav,
} from "@/animations/4-about/AboutAnimations";

// Page Flip
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

// Data
import { AboutBookSPData } from "@/components/4-about/1-data/AboutBookSPData";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

// Component Level Types
import { AboutPageDataProps } from "../0-types/AboutPageDataProps";

const AboutBookSP: FC = () => {
  const dispatch = useDispatch();
  const {
    AboutPageLoaded: { pageLoaded },
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookSP = useRef();

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
    handleDispatchPageCount(next);
    handlePageFlip(next);
    handleNavBounce(e.target.alt, "sp");
    handleDisable();
  };

  const handleInitializeBook = () => {
    animateOut(".aboutbookcontainersp", ".booknavssp");
    setTimeout(() => {
      dispatch(unloadPage({ pageLoaded: false }));
      dispatch(initializePage({ pageCount: 0 }));
      (aboutBookSP.current as any).pageFlip.turnToPage(0);
    }, 3000);
  };

  const handleInitialLoad = () => {
    animateInInitialLoad(".aboutbookcontainersp", ".booknavssp");
    setTimeout(() => {
      dispatch(loadPage({ pageLoaded: true }));
    }, 2000);
  };

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBookSP.current as any).pageFlip.turnToPage(pageCount * 2);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (transition && mounted) {
      handleInitializeBook();
    }

    if (!transition && !pageLoaded && mounted) {
      handleInitialLoad();
    } else {
      animateInIsLoaded(".aboutbookcontainersp", ".booknavssp");
    }

    return () => {
      mounted = false;
    };
  }, [transition]);

  useEffect(() => {
    setDisabled(true);
    setDisabled(false);
    let mounted = true;
    if (mounted && pageCount === 8) {
      removeNav(".booknavforwardsp");
    } else {
      addNav(".booknavforwardsp");
    }
    if (mounted && pageCount === 0) {
      removeNav(".booknavbackwardsp");
    } else {
      addNav(".booknavbackwardsp");
    }
    return () => {
      setDisabled(false);
      mounted = false;
    };
  }, [pageCount]);

  return (
    <Fragment>
      <div className="aboutbookcontainersp singlepage absolute">
        <HTMLFlipBook
          ref={aboutBookSP}
          className="aboutbook inset-0 h-full max-w-full"
          useMouseEvents={false}
          flippingTime={1500}
          usePortrait={false}
          maxShadowOpacity={0}
          autoSize={false}
          size={"stretch"}
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
                />
              );
            }
          )}
        </HTMLFlipBook>
      </div>
      <button
        disabled={disabled}
        className="booknavssp booknavforwardsp fixed"
        onClick={(e) => handleNavSP(e, true)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-forward-sp" />
      </button>
      <button
        disabled={disabled}
        className="booknavssp booknavbackwardsp fixed"
        onClick={(e) => handleNavSP(e, false)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-backward-sp" />
      </button>
    </Fragment>
  );
};

export default AboutBookSP;
