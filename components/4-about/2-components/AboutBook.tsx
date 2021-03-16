// React
import { useEffect, useRef } from "react";

// Next
import Link from "next/link";

// Page Flip
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

// Data
import { AboutBookSinglePageData } from "@/components/4-about/1-data/AboutBookSinglePageData";
import { AboutBookDoublePageData } from "@/components/4-about/1-data/AboutBookDoublePageData";

// React Types
import { FC } from "react";

// Component Level Types
import { AboutBookDataProps } from "../0-types/AboutProps";

interface AboutBookProps {
  transition: boolean;
  pageCount: number;
  data: any;
  next: boolean;
  tag: string;
}

const AboutBook: FC<AboutBookProps> = ({
  transition,
  pageCount,
  data,
  next,
  tag,
}) => {
  const aboutBook = useRef();

  useEffect(() => {
    if (pageCount !== 0) {
      (aboutBook.current as any).pageFlip.turnToPage({
        pageNum: pageCount * 2,
      });
    }
  }, []);

  useEffect(() => {
    if (next) {
      (aboutBook.current as any).pageFlip.flipNext();
    } else {
      (aboutBook.current as any).pageFlip.flipPrev();
    }
  }, [next, pageCount]);

  useEffect(() => {
    if (transition) {
      setTimeout(() => {
        (aboutBook.current as any).pageFlip.turnToPage(0);
      }, 3000);
    }
  }, [transition]);

  return (
    <div className={`aboutbookcontainer ${tag} absolute`}>
      <HTMLFlipBook
        ref={aboutBook}
        className={`aboutbook${tag} inset-0 h-full max-w-full`}
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
        {data.map(({ id, texta, textb, svg, link }: AboutBookDataProps) => {
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
        })}
      </HTMLFlipBook>
    </div>
  );
};
export default AboutBook;
