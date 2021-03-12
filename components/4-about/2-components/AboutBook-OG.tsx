// React
import { useState, useEffect, forwardRef } from 'react';

// Next
import Link from 'next/link';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// React Types
import { FC } from 'react';

// Component Level Types
import { AboutBookDataProps } from '../0-types/AboutProps';

interface AboutBookProps {
  ref: any;
  data: any;
}

const AboutBook: FC<AboutBookProps> = forwardRef(({ data }, ref) => {
  return (
    <HTMLFlipBook
      ref={ref}
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
      {data.map(({ id, texta, textb, svg, link }: AboutBookDataProps) => {
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
      })}
    </HTMLFlipBook>
  );
});

export default AboutBook;
