// React
import { useEffect, useRef, forwardRef } from 'react';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// GSAP Animations
import { removeNav, addNav } from '../2-animations/AboutNavAnimations';

// Data
import { aboutBookMobileData } from '../1-data/AboutBookMobileData';
import { aboutBookLargeDeviceData } from '../1-data/AboutBookLargeDeviceData';

// React Types
import { FC } from 'react';

// Component Level Types
import { AboutBookProps } from '../0-types/AboutProps';

interface AboutBookMobileProps {
  ref: any;
  width: number;
}

const AboutBookMobile: FC<AboutBookMobileProps> = forwardRef(
  ({ width }, ref) => {
    const dataToMap =
      width >= 768 ? aboutBookMobileData : aboutBookLargeDeviceData;
    return (
      <HTMLFlipBook
        ref={ref}
        className="mobileaboutbook inset-0 h-full max-w-full"
        useMouseEvents={false}
        flippingTime={1500}
        usePortrait={false}
        drawShadow={true}
        autoSize={false}
        size={'stretch'}
        width={400}
        height={535}
        minWidth={80}
        minHeight={107}
        maxWidth={1000}
        maxHeight={1337}
      >
        {dataToMap.map(({ id, texta, textb, svg, link }: AboutBookProps) => {
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
                    className={`svg${id} aboutmobilesvg px-4`}
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
  }
);

export default AboutBookMobile;

// // React
// import { useState, useEffect, useRef, Fragment } from 'react';

// // Redux
// import { useSelector } from 'react-redux';

// // Page Flip
// // @ts-ignore
// import HTMLFlipBook from 'react-pageflip';

// // GSAP
// import gsap from 'gsap';

// // Data
// import { aboutBookMobileData } from '../1-data/AboutBookMobileData';

// // React Types
// import { FC } from 'react';

// // Redux Types
// import { AppState } from '../../../redux/store';

// // Component Level Types
// import { AboutBookProps } from '../0-types/AboutProps';

// const AboutBookContainer: FC = () => {
//   const aboutBook = useRef();
//   const [pageCount, setPageCount] = useState(0);
//   const [disabled, setDisabled] = useState(false);

//   const {
//     MenuTransition: { transition },
//   } = useSelector<AppState, AppState>((state) => state);

//   const animateIn = () => {
//     gsap.to(['.mobileaboutbookcontainer', '.storynavs'], {
//       y: -1000,
//       delay: 1,
//       duration: 2.3,
//       ease: 'back.out(1.07)',
//       stagger: 0.15,
//     });
//   };

//   const animateOut = () => {
//     gsap.to(['.mobileaboutbookcontainer', '.storynavs'], {
//       y: 100,
//       duration: 2,
//       ease: 'back.in(1.1)',
//       stagger: 0.15,
//     });
//   };

//   const bounce = (targetNav: string) => {
//     let bounceClass;
//     if (targetNav === 'story-nav-forward') {
//       bounceClass = '.booknavforward';
//     } else {
//       bounceClass = '.booknavbackward';
//     }
//     const bounceTl = gsap.timeline();
//     bounceTl.to(`${bounceClass}`, {
//       scale: 0.8,
//       duration: 0.1,
//       delay: 0.1,
//       ease: 'elastic.out(1, 0.1)',
//     });
//     bounceTl.to(`${bounceClass}`, {
//       scale: 1,
//       duration: 1.5,
//       ease: 'elastic.out(1, 0.1)',
//     });
//   };

//   const removeNav = (removeNavClass: string) => {
//     gsap.to(`${removeNavClass}`, {
//       opacity: 0,
//       duration: 0.5,
//       delay: 1,
//     });
//     gsap.to(`${removeNavClass}`, {
//       display: 'none',
//       delay: 1,
//     });
//   };

//   const addNav = (addNavClass: string) => {
//     gsap.to(`${addNavClass}`, {
//       display: 'block',
//     });
//     gsap.to(`${addNavClass}`, {
//       opacity: 1,
//       duration: 1,
//       delay: 0.8,
//     });
//   };

//   useEffect(() => {
//     if (transition) {
//       animateOut();
//     } else {
//       animateIn();
//     }
//   }, [transition]);

//   useEffect(() => {
//     if (pageCount === 8) {
//       removeNav('.booknavforward');
//     } else {
//       addNav('.booknavforward');
//     }
//     if (pageCount === 0) {
//       removeNav('.booknavbackward');
//     } else {
//       addNav('.booknavbackward');
//     }
//   }, [pageCount]);

//   const handleForward = (e: any) => {
//     bounce(e.target.alt);
//     setDisabled(true);
//     setPageCount(pageCount + 1);
//     (aboutBook.current as any).pageFlip.flipNext();
//     setTimeout(() => {
//       setDisabled(false);
//     }, 1500);
//   };

//   const handleBackward = (e: any) => {
//     bounce(e.target.alt);
//     setDisabled(true);
//     setPageCount(pageCount - 1);
//     (aboutBook.current as any).pageFlip.flipPrev();
//     setTimeout(() => {
//       setDisabled(false);
//     }, 1500);
//   };

//   return (
//     <Fragment>
//       <div className="mobileaboutbookcontainer fixed">
//         <HTMLFlipBook
//           className="mobileaboutbook inset-0 h-full max-w-full"
//           ref={aboutBook}
//           flippingTime={1500}
//           drawShadow={true}
//           usePortrait={false}
//           useMouseEvents={false}
//           size={'stretch'}
//           width={400}
//           height={535}
//           minWidth={80}
//           minHeight={107}
//           maxWidth={1000}
//           maxHeight={1337}
//           autoSize={false}
//         >
//           {aboutBookMobileData.map(
//             ({ id, texta, textb, svg, link }: AboutBookProps) => {
//               return (
//                 <div
//                   key={id}
//                   className={`aboutpage inset-0 h-full max-w-full text-center `}
//                 >
//                   <div className="flex justify-center items-center h-full flex-col">
//                     {texta && (
//                       <div
//                         className={`page${id}textamobile mobileabouttext px-8 py-8`}
//                       >
//                         {texta}
//                       </div>
//                     )}
//                     {textb && (
//                       <div className={`page${id}textbmobile mobileabouttext`}>
//                         {textb}
//                       </div>
//                     )}
//                     {svg && (
//                       <img
//                         className={`svg${id} aboutmobilesvg px-4`}
//                         src={`/3-svgs/about/${svg}.svg`}
//                         alt={svg}
//                       />
//                     )}
//                   </div>
//                 </div>
//               );
//             }
//           )}
//         </HTMLFlipBook>
//       </div>
//       <button
//         disabled={disabled}
//         className="storynavs booknavforward fixed opacity-0"
//         onClick={(e) => handleForward(e)}
//       >
//         <img src="/3-svgs/about/story-nav.svg" alt="story-nav-forward" />
//       </button>
//       <button
//         disabled={disabled}
//         className="storynavs booknavbackward fixed opacity-0"
//         onClick={(e) => handleBackward(e)}
//       >
//         <img src="/3-svgs/about/story-nav.svg" alt="story-nav-backward" />
//       </button>
//     </Fragment>
//   );
// };

// export default AboutBookContainer;
