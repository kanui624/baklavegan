// React
import { useState, useEffect, useRef, Fragment } from "react";

// Next
import Link from "next/link";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPage, unloadPage } from "@/redux/slices/AboutPageLoadedSlice";
import {
  nextPage,
  prevPage,
  initializePage,
} from "@/redux/slices/AboutPageCountSlice";

// GSAP Animations
import {
  animateInInitialLoad,
  animateInIsLoaded,
  animateOut,
  addNav,
  removeNav,
  bounceNav,
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
import { AboutBookDataProps } from "../0-types/AboutProps";

const AboutBookDP: FC = () => {
  const dispatch = useDispatch();
  const {
    AboutPageLoaded: { pageLoaded },
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookDP = useRef();

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

  const handleNavBounceDP = (targetNav: string) => {
    if (targetNav === "book-nav-forward-dp") {
      bounceNav(".booknavforwarddp");
    } else {
      bounceNav(".booknavbackwarddp");
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
    handleNavBounceDP(e.target.alt);
    handleDisable();
  };

  const handleInitializeBook = async () => {
    await animateOut(".aboutbookcontainerdp", ".booknavsdp");
    dispatch(unloadPage({ pageLoaded: false }));
    dispatch(initializePage({ pageCount: 0 }));
    (aboutBookDP.current as any).pageFlip.turnToPage(0);
  };

  const handleInitialLoad = async () => {
    await animateInInitialLoad(".aboutbookcontainerdp", ".booknavsdp");
    dispatch(loadPage({ pageLoaded: true }));
  };

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBookDP.current as any).pageFlip.turnToPage(pageCount * 2);
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
      animateInIsLoaded(".aboutbookcontainerdp", ".booknavsdp");
    }

    return () => {
      mounted = false;
      setDisabled(false);
    };
  }, [transition]);

  useEffect(() => {
    if (pageCount === 8) {
      removeNav(".booknavforwarddp");
    } else {
      addNav(".booknavforwardsp");
    }
    if (pageCount === 0) {
      removeNav(".booknavbackwarddp");
    } else {
      addNav(".booknavbackwarddp");
    }
    return () => {
      setDisabled(false);
    };
  }, [pageCount]);

  return (
    <Fragment>
      <div className="aboutbookcontainerdp doublepage absolute">
        <HTMLFlipBook
          ref={aboutBookDP}
          className="aboutbook inset-0 h-full max-w-full"
          useMouseEvents={false}
          flippingTime={1500}
          usePortrait={false}
          maxShadowOpacity={1}
          autoSize={false}
          size={"stretch"}
          width={400}
          height={535}
          minWidth={80}
          minHeight={107}
          maxWidth={1000}
          maxHeight={1337}
        >
          {AboutBookDPData.map(
            ({ id, texta, textb, svg, link }: AboutBookDataProps) => {
              return (
                <div
                  key={id}
                  className={`aboutpage inset-0 h-full max-w-full text-center `}
                >
                  <div className="flex justify-center items-center h-full flex-col">
                    {texta && (
                      <div className={`page${id}texta abouttext px-8 py-8`}>
                        {texta}{" "}
                        {link && (
                          <Link href={`/baklavegan/${link}`}>
                            <a className="aboutbooklink">
                              <u>{link}</u>
                            </a>
                          </Link>
                        )}{" "}
                        {textb && textb}
                      </div>
                    )}
                    {svg && (
                      <img
                        className={`svg${id} aboutsvg opacity-90`}
                        src={`/3-svgs/about/${svg}.svg`}
                        alt={svg}
                      />
                    )}
                  </div>
                </div>
              );
            }
          )}
        </HTMLFlipBook>
      </div>
      <button
        disabled={disabled}
        className="booknavsdp booknavforwarddp fixed opacity-0"
        onClick={(e) => handleNavDP(e, true)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-forward-dp" />
      </button>
      <button
        disabled={disabled}
        className="booknavsdp booknavbackwarddp fixed opacity-0"
        onClick={(e) => handleNavDP(e, false)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-backward-dp" />
      </button>
    </Fragment>
  );
};

export default AboutBookDP;
