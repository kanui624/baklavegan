// React
import { Fragment } from 'react';

// Next
import Image from 'next/image';
import Link from 'next/link';

// Page Flip
// @ts-ignore
import HTMLFlipBook from 'react-pageflip';

// React Types
import { FC } from 'react';

const AboutPages = () => {};

const AboutBook: FC = () => {
  return (
    <HTMLFlipBook
      className="aboutbook fixed"
      width={250}
      height={334}
      showCover={true}
      drawShadow={false}
    >
      <div className="aboutpage pageone text-center">
        <div className="flex justify-center items-center h-full">hey</div>
      </div>
      <div className="aboutpage pagetwo">
        <div className="flex justify-center items-center h-full">hey</div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">hey</div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">hey</div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">hey</div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">hey</div>
      </div>
    </HTMLFlipBook>
  );
};

export default AboutBook;

// <div className="aboutinfopages fixed about">
//   <Image
//     src="/2-images/3-about/3-about-info.png"
//     alt="About Baklavegan"
//     width={250}
//     height={334}
//   />
// </div>;

// <div className="aboutinfo fixed text-center about abouttext opacity-0">
//   <p>
//     just a girl from istanbul and a dude from austin that wanted to make a
//     gourmet vegan baklava business and advocate for animal rights in the
//     process :) we think that leading with compassion and transparency is
//     key so if you want to know how the proceeds are used{' '}
//     <Link href="/baklavegan/finances">
//       <a>
//         <u>look here!</u>
//       </a>
//     </Link>
//   </p>
// </div>;
