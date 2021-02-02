// React
import { Fragment } from 'react';

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
      width={250}
      height={334}
      drawShadow={false}
    >
      {aboutPageData.map(({ id, text, image, link }: AboutPageProps) => {
        return (
          <div key={id} className={`aboutpage page${id}`}>
            <div className="flex justify-center items-center h-full">
              {text}
            </div>
          </div>
        );
      })}
    </HTMLFlipBook>
  );
};

export default AboutBook;

{
  /* <div className="aboutpage pagetwo">
        <div className="flex justify-center items-center h-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          eos dolor perferendis velit eligendi unde quia quaerat ab nihil nulla
          deserunt excepturi ea atque rerum culpa, placeat necessitatibus
          delectus animi?
        </div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non
          blanditiis nesciunt consequuntur quod aliquam quos a molestiae
          repudiandae pariatur laboriosam voluptate soluta et autem ducimus,
          repellendus id est tenetur!
        </div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptate quidem officiis odit quae id! Atque hic laborum, modi
          laudantium, porro ut quas temporibus ad unde earum ex quis itaque.
        </div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
          eligendi ratione ex nobis, quia hic iure inventore delectus numquam
          libero modi neque minus provident possimus error a, voluptates
          sapiente unde.
        </div>
      </div>
      <div className="aboutpage">
        <div className="flex justify-center items-center h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          blanditiis porro iusto maiores minima, nam laborum, voluptates
          asperiores perferendis et praesentium impedit accusamus dicta?
          Pariatur sequi officiis saepe explicabo iste?
        </div>
      </div> */
}

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
