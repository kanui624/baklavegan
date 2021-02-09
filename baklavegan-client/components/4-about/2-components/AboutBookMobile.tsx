// React
import { useState, useRef, Fragment } from 'react';
// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { aboutBookMobileData } from '../1-data/AboutBookMobileData';
// React Types
import { FC } from 'react';

// Component Level Types
import { AboutBookProps } from '../0-types/AboutProps';

const AboutBookMobile: FC = () => {
  const [disabled, setDisabled] = useState(false);
  const aboutBook = useRef();

  const handleForward = () => {
    setDisabled(true);
    (aboutBook.current as any).pageFlip.flipNext();
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const handleBackward = () => {
    setDisabled(true);
    (aboutBook.current as any).pageFlip.flipPrev();
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  return (
    <Fragment>
      <div className="mobilebookcontainer fixed inset-0 h-full max-w-full">
        <HTMLFlipBook
          className="aboutbookmobile fixed"
          ref={aboutBook}
          flippingTime={1500}
          drawShadow={true}
          usePortrait={false}
          size={'stretch'}
          width={410}
          height={548}
          minWidth={410}
          minHeight={548}
          maxWidth={500}
          maxHeight={669}
        >
          {aboutBookMobileData.map(
            ({ id, texta, textb, svg, link }: AboutBookProps) => {
              return (
                <div
                  key={id}
                  className={`aboutpage-mobile-desktop page${id} text-center `}
                >
                  <div className="flex justify-center items-center h-full flex-col">
                    {texta && (
                      <div
                        className={`page${id}texta abouttextmobile px-8 py-8`}
                      >
                        {texta}
                      </div>
                    )}
                    {textb && (
                      <div className={`page${id}textb abouttextmobile`}>
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
        className="bookbtnf fixed"
        onClick={() => handleForward()}
      >
        f
      </button>
      <button
        disabled={disabled}
        className="bookbtnb fixed"
        onClick={() => handleBackward()}
      >
        b
      </button>
    </Fragment>
  );
};

export default AboutBookMobile;
