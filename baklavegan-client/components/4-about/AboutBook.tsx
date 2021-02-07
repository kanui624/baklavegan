// Next
import Image from 'next/image';
import Link from 'next/link';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// Data
import { aboutPageData } from './AboutPageData';
// React Types
import { FC, forwardRef } from 'react';

// Component Level Types
import { AboutPageProps } from './0-types/AboutProps';

// interface AboutPagePropProps {
//   number: number;
//   texta: string;
//   textb?: string;
//   image?: string;
//   link?: string;
// }

// const AboutPage: FC<AboutPagePropProps> = forwardRef((props, ref) => {
//   return (
//     <div ref={ref} className={`aboutpage page${props.number} text-center`}>
//       <div className="flex justify-center items-center h-full ">
//         {props.texta && (
//           <div
//             className={`page${props.number}texta abouttext transform-gpu -rotate-90`}
//           >
//             {props.texta}
//           </div>
//         )}
//         {props.textb && (
//           <div className={`page${props.number}textb transform-gpu -rotate-90`}>
//             {props.textb}
//           </div>
//         )}
//         {props.image && (
//           <img
//             className="about-img transform-gpu -rotate-90 "
//             src={`/3-svgs/about/${props.image}.svg`}
//             alt={props.image}
//           />
//         )}
//       </div>
//     </div>
//   );
// });

// const AboutBook: FC = () => {
//   return (
//     <HTMLFlipBook
//       className="aboutbook fixed transform-gpu"
//       width={450}
//       height={602}
//     >
//       {/* {aboutPageData.map(
//         ({ id, texta, textb, image, link }: AboutPageProps) => {
//           return (
//             <AboutPage
//               key={id}
//               number={id}
//               texta={texta}
//               textb={textb}
//               image={image}
//               link={link}
//             />
//           );
//         }
//       )} */}

//       <AboutPage
//         number={1}
//         texta={'hey'}
//         textb={'heytwo'}
//         image={'image'}
//         link={'link'}
//       />
//     </HTMLFlipBook>
//   );
// };

// export default AboutBook;
