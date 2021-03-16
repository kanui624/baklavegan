// React
import { useEffect, useRef, forwardRef } from "react";

// Next
import Link from "next/link";

// Page Flip
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

// GSAP Animations
import { animateInIsLoaded } from "@/animations/4-about/AboutAnimations";

// Data
import { AboutBookSinglePageData } from "@/components/4-about/1-data/AboutBookSinglePageData";

// React Types
import { FC } from "react";

// Component Level Types
import { AboutBookDataProps } from "../0-types/AboutProps";

interface AboutBookSPProps {
  transition: boolean;
  pageCount: number;
  next: boolean;
  // isLoaded: boolean;
  ref: any;
}

const AboutBookSP: FC<AboutBookSPProps> = forwardRef(
  (
    {
      transition,
      pageCount,
      next,
      // isLoaded,
    },
    ref
  ) => {
    // const aboutBookSP = useRef();

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

    return (
      <div className="aboutbookcontainer sp absolute">
        <HTMLFlipBook
          ref={ref}
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
    );
  }
);
export default AboutBookSP;
