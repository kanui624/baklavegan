// Next
import Image from 'next/image';

// React Types
import { FC } from 'react';

// Styles
import styles from '../../styles/Pages/3-about-scss/about.module.scss';

const About: FC = () => {
  return (
    <>
      <Image
        className="fixed"
        src="/1-menuops/1-back/4-animalrights-b.png"
        alt="temp"
        width={500}
        height={500}
      />
      <div className="fixed">
        <h3 className={`${styles.about}`}>Baklavegan Recipe:</h3>
        <br />
        <p className={`${styles.about} ${styles.aboutingrdients}`}>
          - 1 vegan istanbulite
          <br />
          - 1 vegan austinite
          <br />
          - 1 passion for food
          <br />
          - 1 love for animals
          <br />
          - 1 fiery romance (optional)
          <br />
        </p>
      </div>
    </>
  );
};

export default About;

// <div className="relative border-4 border-black">
//   <p className="flex">
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
//     omnis veniam magni ullam, dolor eius? Ex commodi assumenda neque
//     corrupti iure velit laborum id beatae, laudantium consequuntur eaque
//     quisquam suscipit.
//   </p>
// </div>;

// Next

//     <Image
//   src="/2-menuops/1-back/4-animalrights-b.png"
//   alt="temp"
//   width={500}
//   height={500}
// />

//
//
