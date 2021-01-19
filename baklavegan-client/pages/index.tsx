// React
import { useEffect, Fragment } from 'react';

// Next
import Image from 'next/image';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../styles/Pages/index.module.scss';

// React Types
import { FC } from 'react';

const BaklaHome: FC = () => {
  const animateLogoIn = () => {
    gsap.to('#animatelogo', { opacity: 1, duration: 4, delay: 1 });
  };

  useEffect(() => {
    animateLogoIn();
  }, []);

  return (
    <Image
      id="animatelogo"
      className={styles.bvlogo}
      src="/2-images/1-index/0-bv-logo.png"
      alt="baklavegan"
      width={1400}
      height={343}
    />
  );
};

export default BaklaHome;
