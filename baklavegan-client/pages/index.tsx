// Next
import Image from 'next/image';

// React
import { useEffect } from 'react';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../styles/Pages/index.module.scss';

// React Types
import { FC } from 'react';

const BaklaHome: FC = () => {
  const animateIn = () => {
    gsap.to('.animatelogo', { opacity: 1, duration: 4 });
  };

  useEffect(() => {
    animateIn();
  }, []);

  return (
    <Image
      className={`${styles.bvlogo} animatelogo`}
      src="/2-images/1-index/0-bv-logo.png"
      alt="temp"
      width={1400}
      height={343}
    />
  );
};

export default BaklaHome;
