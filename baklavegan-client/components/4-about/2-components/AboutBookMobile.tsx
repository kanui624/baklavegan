// React
import { useState, useEffect, useRef, Fragment } from 'react';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { aboutBookMobileData } from '../1-data/AboutBookMobileData';
// React Types
import { FC } from 'react';

// Component Level Types
import { AboutBookProps } from '../0-types/AboutProps';

interface AboutProps {
  setPageCount: (pageCount: number) => void;
  pageCount: number;
}

const AboutBookMobile: FC<AboutProps> = ({ setPageCount, pageCount }) => {
  const [disabled, setDisabled] = useState(false);
  const aboutBook = useRef();

  const handleForward = () => {
    setDisabled(true);
    setPageCount(pageCount + 1);
    (aboutBook.current as any).pageFlip.flipNext();
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const handleBackward = () => {
    setDisabled(true);
    setPageCount(pageCount - 1);
    (aboutBook.current as any).pageFlip.flipPrev();
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  return (
    <Fragment>
      <div className="mobileaboutbookcontainer fixed">
        <HTMLFlipBook
          className="mobileaboutbook inset-0 h-full max-w-full"
          ref={aboutBook}
          flippingTime={1500}
          drawShadow={true}
          usePortrait={false}
          useMouseEvents={false}
          size={'stretch'}
          width={400}
          height={535}
          minWidth={80}
          minHeight={107}
          maxWidth={1000}
          maxHeight={1337}
          autoSize={false}
        >
          {aboutBookMobileData.map(
            ({ id, texta, textb, svg, link }: AboutBookProps) => {
              return (
                <div
                  key={id}
                  className={`aboutpage inset-0 h-full max-w-full text-center `}
                >
                  <div className="flex justify-center items-center h-full flex-col">
                    {texta && (
                      <div
                        className={`page${id}textamobile mobileabouttext px-8 py-8`}
                      >
                        {texta}
                      </div>
                    )}
                    {textb && (
                      <div className={`page${id}textbmobile mobileabouttext`}>
                        {textb}
                      </div>
                    )}
                    {svg && (
                      <img
                        className="aboutmobilesvg px-4"
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
        className="storynavs booknavforward fixed opacity-0"
        onClick={() => handleForward()}
      >
        <img src="/3-svgs/about/story-nav.svg" alt="story-nav" />
      </button>
      <button
        disabled={disabled}
        className="storynavs booknavbackward transform-gpu fixed opacity-0"
        onClick={() => handleBackward()}
      >
        <img src="/3-svgs/about/story-nav.svg" alt="story-nav" />
      </button>
    </Fragment>
  );
};

export default AboutBookMobile;
