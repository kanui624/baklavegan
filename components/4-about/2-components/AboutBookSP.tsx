// React
import { useEffect, useState, useRef, Fragment } from "react";

// Next
import Link from "next/link";

// Page Flip
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

// GSAP Animations
import {
  animateInInitialLoad,
  animateOut,
  addNav,
  removeNav,
  bounceNav,
} from "@/animations/4-about/AboutAnimations";

// Data
import { AboutBookSinglePageData } from "@/components/4-about/1-data/AboutBookSinglePageData";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

// Component Level Types
import { AboutBookDataProps } from "../0-types/AboutProps";

interface AboutBookSPProps {
  transition: boolean;
  pageCount: number;
  next: boolean;
  // isLoaded: boolean;
  ref: any;
}

const AboutBookSP: FC<AboutBookSPProps> = ({}) => {
  const aboutBookSP = useRef();

  const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  //   if (pageCount !== 0) {
  //     (aboutBookSP.current as any).pageFlip.turnToPage({
  //       pageNum: pageCount * 2,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (next) {
  //     (aboutBookSP.current as any).pageFlip.flipNext();
  //   } else {
  //     (aboutBookSP.current as any).pageFlip.flipPrev();
  //   }
  // }, [next, pageCount]);

  // useEffect(() => {
  //   if (transition) {
  //     setTimeout(() => {
  //       ref.current.pageFlip.turnToPage(0);
  //     }, 3000);
  //   }
  // }, [transition]);

  const dispatch = useDispatch();
  const {
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const dispatchPageCount = (flipPage: boolean) => {
    if (flipPage) {
      dispatch(nextPage({ pageCount: pageCount + 1 }));
    } else {
      dispatch(prevPage({ pageCount: pageCount - 1 }));
    }
  };

  const determineNavBounce = (targetNav: string) => {
    if (targetNav === "book-nav-forward") {
      bounceNav(".booknavforward");
    } else {
      bounceNav(".booknavbackward");
    }
  };

  const handleNav = (e: any, flip: boolean) => {
    dispatchPageCount(flip);
    setNext(flip);
    determineNavBounce(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  return (
    <Fragment>
      <div className="aboutbookcontainer sp absolute">
        <HTMLFlipBook
          ref={aboutBookSP}
          className="aboutbooksp inset-0 h-full max-w-full"
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
          startZIndex={pageCount * 2}
        >
          {AboutBookSinglePageData.map(
            ({ id, texta, textb, svg, link }: AboutBookDataProps) => {
              return (
                <div
                  key={id}
                  className="aboutpage inset-0 h-full max-w-full text-center"
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
        className="booknavs booknavforward fixed opacity-0"
        onClick={(e) => handleNavSP(e, true)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-forward" />
      </button>
      <button
        disabled={disabled}
        className="booknavs booknavbackward fixed opacity-0"
        onClick={(e) => handleNavSP(e, false)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-backward" />
      </button>
    </Fragment>
  );
};
export default AboutBookSP;
