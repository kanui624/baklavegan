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
      className="aboutbook fixed transform-gpu"
      width={450}
      height={602}
      drawShadow={false}
      // autoSize={true}
      // mobileScrollSupport={true}
      // size={'stretch'}
      // minWidth={200}
      // maxWidth={400}
      // minHeight={268}
      // maxHeight={535}
    >
      {aboutPageData.map(
        ({ id, texta, textb, image, link }: AboutPageProps) => {
          return (
            <div key={id} className={`aboutpage page${id} text-center`}>
              <div className="flex justify-center items-center h-full ">
                {texta && (
                  <div
                    className={`page${id}texta abouttext transform-gpu -rotate-90`}
                  >
                    {texta}
                  </div>
                )}
                {textb && (
                  <div className={`page${id}textb transform-gpu -rotate-90`}>
                    {textb}
                  </div>
                )}
                {image && (
                  <img
                    className="about-img transform-gpu -rotate-90 "
                    src={`/3-svgs/about/${image}.svg`}
                    alt={image}
                  />
                )}
              </div>
            </div>
          );
        }
      )}
    </HTMLFlipBook>
  );
};

export default AboutBook;
