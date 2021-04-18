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
import { AboutBookDPData } from "@/components/4-about/1-data/AboutBookDPData";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

// Component Level Types
import { AboutPageDataProps } from "../0-types/AboutPageDataProps";

const AboutBookDP: FC = () => {
  const dispatch = useDispatch();
  const {
    AboutPageLoaded: { pageLoaded },
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
    WindowSize: { width, height },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookDP = useRef();

  const calcSize = (height * 1.25) / 16;
  const conditionalSize = calcSize >= 52 ? 52 : Math.round(calcSize * 2) / 2;

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
      (aboutBookDP.current as any).pageFlip.flipNext();
    } else {
      (aboutBookDP.current as any).pageFlip.flipPrev();
    }
  };

  const handleDisable = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const handleNavDP = (e: any, next: boolean) => {
    handleDispatchPageCount(next);
    handlePageFlip(next);
    handleNavBounce(e.target.alt, "dp");
    handleDisable();
  };

  const handleInitializeBook = () => {
    animateOut(".aboutbookcontainerdp", ".booknavsdp");
    setTimeout(() => {
      dispatch(unloadPage({ pageLoaded: false }));
      dispatch(initializePage({ pageCount: 0 }));
      (aboutBookDP.current as any).pageFlip.turnToPage(0);
    }, 3000);
  };

  const handleInitialLoad = () => {
    animateInInitialLoad(".aboutbookcontainerdp", ".booknavsdp");
    dispatch(loadPage({ pageLoaded: true }));
  };

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBookDP.current as any).pageFlip.turnToPage(pageCount * 2);
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
      handleInitialLoad();
    } else {
      animateInIsLoaded(".aboutbookcontainerdp", ".booknavsdp");
    }

    return () => {
      mounted = false;
    };
  }, [transition]);

  useEffect(() => {
    let mounted = true;
    if (mounted && pageCount === 8) {
      removeNav(".booknavforwarddp");
    } else {
      addNav(".booknavforwarddp");
    }
    if (mounted && pageCount === 0) {
      removeNav(".booknavbackwarddp");
    } else {
      addNav(".booknavbackwarddp");
    }
    return () => {
      mounted = false;
    };
  }, [pageCount]);

  return (
    <div className="dpcontainer">
      <div
        className="aboutbookcontainerdp"
        style={{ width: `${conditionalSize}rem` }}
      >
        <HTMLFlipBook
          ref={aboutBookDP}
          className="aboutbookdp"
          useMouseEvents={false}
          usePortrait={false}
          flippingTime={1500}
          maxShadowOpacity={0}
          size={"stretch"}
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
                  tag={"dp"}
                />
              );
            }
          )}
        </HTMLFlipBook>
      </div>
      <div className="booknavcontainerdp flex justify-between">
        <button
          disabled={pageCount === 0 ? true : disabled}
          className="booknavsdp booknavbackwarddp ml-4"
          onClick={(e) => handleNavDP(e, false)}
        >
          <img src="/3-svgs/about/book-nav.svg" alt="book-nav-backward-dp" />
        </button>
        <button
          disabled={pageCount === 8 ? true : disabled}
          className="booknavsdp booknavforwarddp mr-4"
          onClick={(e) => handleNavDP(e, true)}
        >
          <img src="/3-svgs/about/book-nav.svg" alt="book-nav-forward-dp" />
        </button>
      </div>
    </div>
  );
};

export default AboutBookDP;
