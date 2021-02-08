// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { aboutBookData } from './1-data/AboutBookData';
// React Types
import { FC } from 'react';

// Component Level Types
import { AboutBookProps } from './0-types/AboutProps';

const AboutBook: FC = () => {
  return (
    <HTMLFlipBook
      className="aboutbook fixed transform-gpu inset-0 h-full max-w-full"
      width={205}
      height={274}
      drawShadow={false}
      usePotrait={false}
      // showCover={true}
      size={'stretch'}
      minWidth={205}
      minHeight={274}
      // maxWidth={250}
      // maxHeight={334}
    >
      {aboutBookData.map(
        ({ id, texta, textb, image, link }: AboutBookProps) => {
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
