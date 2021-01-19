// Next
import Image from 'next/image';

// React
import { useEffect, Fragment } from 'react';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../styles/Pages/index.module.scss';

// React Types
import { FC } from 'react';

const BaklaHome: FC = () => {
  const animateIn = () => {
    gsap.to('.animatelogo', { opacity: 1, duration: 4, delay: 1 });
    gsap.to('.animatebtn', { opacity: 1, duration: 5, delay: 2 });
  };

  useEffect(() => {
    animateIn();
  }, []);

  return (
    <Fragment>
      <Image
        className={`${styles.bvlogo} animatelogo`}
        src="/2-images/1-index/0-bv-logo.png"
        alt="baklavegan"
        width={1400}
        height={343}
      />

      <div className="absolute bottom-28">
        <Image
          src="/2-images/1-index/1-enter-btn.png"
          alt="enter"
          width={150}
          height={188}
        />
      </div>
      <div className={`${styles.entertext} absolute left-auto`}>
        <h3>enter</h3>
      </div>
    </Fragment>
  );
};

export default BaklaHome;
