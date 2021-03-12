// React
import { useState, useEffect, useRef, Fragment } from 'react';

// Next
import Link from 'next/link';

// Redux
import { useSelector } from 'react-redux';

// GSAP Animations
import {
  animateIn,
  animateOut,
  addNav,
  removeNav,
  bounceNav,
} from '@/animations/4-about/AboutAnimations';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { AboutBookSinglePageData } from '@/components/4-about/1-data/AboutBookSinglePage';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Types
import { AboutBookDataProps } from '../0-types/AboutProps';

const AboutBookSinglePage: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookSP = useRef();
  const [pageCount, setPageCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const determineNavBounceSP = (targetNav: string) => {
    if (targetNav === 'book-nav-forward-sp') {
      bounceNav('.booknavforwardsp');
    } else {
      bounceNav('.booknavbackwardsp');
    }
  };

  const handleNavSP = (e: any, next: boolean) => {
    if (next) {
      (aboutBookSP.current as any).pageFlip.flipNext();
      setPageCount(pageCount + 1);
    } else {
      (aboutBookSP.current as any).pageFlip.flipPrev();
      setPageCount(pageCount - 1);
    }
    determineNavBounceSP(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  // useEffect(() => {
  //   if (transition) {
  //     animateOut('.aboutbookcontainersp', '.booknavssp');
  //     setTimeout(() => {
  //       setPageCount(0);
  //       (aboutBookSP.current as any).pageFlip.turnToPage(0);
  //     }, 3000);
  //   } else {
  //     animateIn('.aboutbookcontainersp', '.booknavssp');
  //   }
  // }, [transition]);

  useEffect(() => {
    if (pageCount === 8) {
      removeNav('.booknavforwardsp');
    } else {
      addNav('.booknavforwardsp');
    }
    if (pageCount === 0) {
      removeNav('.booknavbackwardsp');
    } else {
      addNav('.booknavbackwardsp');
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
          size={'stretch'}
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
                        {texta}{' '}
                        {link && (
                          <Link href={`/baklavegan/${link}`}>
                            <a className="aboutbooklink">
                              <u>{link}</u>
                            </a>
                          </Link>
                        )}{' '}
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
