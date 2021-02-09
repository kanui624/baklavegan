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
      {/* <div className="smbookcontainer fixed">
        <HTMLFlipBook
          className="aboutbooksm fixed"
          ref={aboutBook}
          flippingTime={1500}
          drawShadow={true}
          usePortrait={false}
          useMouseEvents={false}
          width={320}
          height={428}
        >
          {aboutBookMobileData.map(
            ({ id, texta, textb, svg, link }: AboutBookProps) => {
              return (
                <div key={id} className={`aboutpage text-center `}>
                  <div className="flex justify-center items-center h-full flex-col">
                    {texta && (
                      <div className={`page${id}textasm abouttextsm px-8 py-8`}>
                        {texta}
                      </div>
                    )}
                    {textb && (
                      <div className={`page${id}textb abouttextsm`}>
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
      </div> */}
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
                        className={`page${id}textamed mobileabouttext px-8 py-8`}
                      >
                        {texta}
                      </div>
                    )}
                    {textb && (
                      <div className={`page${id}textbmed mobileabouttext`}>
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
