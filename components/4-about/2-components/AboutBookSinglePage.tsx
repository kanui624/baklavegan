// React
import { useState, useEffect, useRef, Fragment } from "react";

// Next
import Link from "next/link";

// Redux
import { useDispatch, useSelector } from "react-redux";
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
import { AboutBookSinglePageData } from "@/components/4-about/1-data/AboutBookSinglePage";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

// Component Level Types
import { AboutBookDataProps } from "../0-types/AboutProps";

interface AboutBookSPProps {
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
}

const AboutBookSinglePage: FC<AboutBookSPProps> = ({
  isLoaded,
  setIsLoaded,
}) => {
  const dispatch = useDispatch();
  const {
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

  const handleNavBounceSP = (targetNav: string) => {
    if (targetNav === "book-nav-forward-sp") {
      bounceNav(".booknavforwardsp");
    } else {
      bounceNav(".booknavbackwardsp");
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
    handleNavBounceSP(e.target.alt);
    handleDisable();
  };

  const handleInitializePageCount = () => {
    setIsLoaded(false);
    setTimeout(() => {
      dispatch(initializePage({ pageCount: 0 }));
      (aboutBookSP.current as any).pageFlip.turnToPage(0);
    }, 3000);
  };

  const handleInitialLoad = async () => {
    await animateInInitialLoad(".aboutbookcontainersp", ".booknavssp");
    setIsLoaded(true);
  };

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBookSP.current as any).pageFlip.turnToPage(pageCount * 2);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    if (transition && mounted) {
      animateOut(".aboutbookcontainersp", ".booknavssp");
      handleInitializePageCount();
    }

    if (!transition && !isLoaded) {
      handleInitialLoad();
    } else {
      animateInIsLoaded(".aboutbookcontainersp", ".booknavssp");
    }

    return () => {
      mounted = false;
    };
  }, [transition]);

  useEffect(() => {
    if (pageCount === 8) {
      removeNav(".booknavforwardsp");
    } else {
      addNav(".booknavforwardsp");
    }
    if (pageCount === 0) {
      removeNav(".booknavbackwardsp");
    } else {
      addNav(".booknavbackwardsp");
    }
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
          {AboutBookSinglePageData.map(
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
        className="booknavssp booknavforwardsp fixed opacity-0"
        onClick={(e) => handleNavSP(e, true)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-forward-sp" />
      </button>
      <button
        disabled={disabled}
        className="booknavssp booknavbackwardsp fixed opacity-0"
        onClick={(e) => handleNavSP(e, false)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-backward-sp" />
      </button>
    </Fragment>
  );
};

export default AboutBookSinglePage;
