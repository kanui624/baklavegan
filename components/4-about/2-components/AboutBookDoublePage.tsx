// React
import { useState, useEffect, useRef, forwardRef, Fragment } from 'react';

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
import { AboutBookDoublePageData } from '@/components/4-about/1-data/AboutBookDoublePage';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '@/redux/store';

// Component Level Types
import { AboutBookDataProps } from '../0-types/AboutProps';

const AboutBookDoublePage: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBookDP = useRef();
  const [pageCount, setPageCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const determineNavBounceDP = (targetNav: string) => {
    if (targetNav === 'book-nav-forward-dp') {
      bounceNav('.booknavforwarddp');
    } else {
      bounceNav('.booknavbackwarddp');
    }
  };

  const handleNavDP = (e: any, next: boolean) => {
    if (next) {
      (aboutBookDP.current as any).pageFlip.flipNext();
      setPageCount(pageCount + 1);
    } else {
      (aboutBookDP.current as any).pageFlip.flipPrev();
      setPageCount(pageCount - 1);
    }
    determineNavBounceDP(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  useEffect(() => {
    if (transition) {
      animateOut('.aboutbookcontainer', '.booknavsdp');
      setTimeout(() => {
        setPageCount(0);
        (aboutBookDP.current as any).pageFlip.turnToPage(0);
      }, 3000);
    } else {
      animateIn('.aboutbookcontainer', '.booknavsdp');
    }
  }, [transition]);

  useEffect(() => {
    if (pageCount === 8) {
      removeNav('.booknavforwarddp');
    } else {
      addNav('.booknavforwarddp');
    }
    if (pageCount === 0) {
      removeNav('.booknavbackwarddp');
    } else {
      addNav('.booknavbackwarddp');
    }
  }, [pageCount]);

  return (
    <Fragment>
      <div className="aboutbookcontainer doublepage absolute">
        <HTMLFlipBook
          ref={aboutBookDP}
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
          {AboutBookDoublePageData.map(
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

export default AboutBookDoublePage;
