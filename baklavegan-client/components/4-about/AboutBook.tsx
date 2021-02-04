// Next
import Image from 'next/image';
import Link from 'next/link';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { aboutPageData } from './AboutPageData';
// React Types
import { FC } from 'react';

// Component Level Types
import { AboutPageProps } from './0-types/AboutProps';

const AboutBook: FC = () => {
  return (
    <HTMLFlipBook
      className="aboutbook fixed"
      width={400}
      height={535}
      drawShadow={false}
    >
      {aboutPageData.map(
        ({ id, texta, textb, image, link }: AboutPageProps) => {
          return (
            <div key={id} className={`aboutpage page${id} text-center`}>
              <div className="flex justify-center items-center h-full flex-col">
                <div className={`page${id}texta`}>{texta}</div>
                {textb && <div className={`page${id}textb`}>{textb}</div>}
              </div>
            </div>
          );
        }
      )}
    </HTMLFlipBook>
  );
};

export default AboutBook;
