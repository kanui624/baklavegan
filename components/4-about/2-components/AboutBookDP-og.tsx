// React
import { useEffect, useRef } from "react";

// Next
import Link from "next/link";

// Page Flip
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

// GSAP Animations
import { animateInIsLoaded } from "@/animations/4-about/AboutAnimations";

// Data
import { AboutBookDoublePageData } from "@/components/4-about/1-data/AboutBookDoublePageData";

// React Types
import { FC } from "react";

// Component Level Types
import { AboutBookDataProps } from "../0-types/AboutProps";

interface AboutBookDPProps {
  transition: boolean;
  pageCount: number;
  next: boolean;
  // isLoaded: boolean;
}

const AboutBookDP: FC<AboutBookDPProps> = ({
  transition,
  pageCount,
  next,
  // isLoaded,
}) => {
  const aboutBookDP = useRef();

  // useEffect(() => {
  //   if (pageCount !== 0) {
  //     (aboutBookDP.current as any).pageFlip.turnToPage({
  //       pageNum: pageCount * 2,
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (next) {
  //     (aboutBookDP.current as any).pageFlip.flipNext();
  //   } else {
  //     (aboutBookDP.current as any).pageFlip.flipPrev();
  //   }
  // }, [next, pageCount]);

  useEffect(() => {
    if (transition) {
      setTimeout(() => {
        (aboutBookDP.current as any).pageFlip.turnToPage(0);
      }, 3000);
    }
  }, [transition]);

  return (
    <div className="aboutbookcontainer dp absolute">
      <HTMLFlipBook
        ref={aboutBookDP}
        className="aboutbookdp inset-0 h-full max-w-full"
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
        startZIndex={pageCount * 2}
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
};
export default AboutBookDP;
