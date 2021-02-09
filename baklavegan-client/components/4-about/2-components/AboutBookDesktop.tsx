// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { aboutBookDesktopData } from '../1-data/AboutBookDesktopData';
// React Types
import { FC } from 'react';

// Component Level Types
import { AboutBookProps } from '../0-types/AboutProps';

const AboutBook: FC = () => {
  return (
    <HTMLFlipBook
      className="aboutbook fixed transform-gpu inset-0 h-full max-w-full"
      width={500}
      height={669}
      drawShadow={true}
      // usePotrait={true}
      // showCover={true}
      size={'stretch'}
      minWidth={300}
      minHeight={401}
      maxWidth={500}
      maxHeight={669}
    >
      {aboutBookDesktopData.map(
        ({ id, texta, textb, image, link }: AboutBookProps) => {
          return (
            <div key={id} className={`aboutpage page${id} text-center`}>
              <div className="flex justify-center items-center h-full ">
                {texta && (
                  <div className={`page${id}texta abouttext`}>{texta}</div>
                )}
                {textb && <div className={`page${id}textb`}>{textb}</div>}
                {image && (
                  <img
                    className="about-img px-4"
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
