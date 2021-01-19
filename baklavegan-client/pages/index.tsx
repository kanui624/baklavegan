// Next
import Image from 'next/image';

// React
import { useState, useEffect, Fragment } from 'react';

// React Spring
import { useSpring, animated } from 'react-spring';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../styles/Pages/index.module.scss';

// React Types
import { FC } from 'react';

const BaklaHome: FC = () => {
  const [enter, setEnter] = useState(false);
  const [pointerOver, setPointerOver] = useState(false);

  const animateIn = () => {
    gsap.to('.animatelogo', { opacity: 1, duration: 4, delay: 1 });
    gsap.to('.animatebtn', { opacity: 1, duration: 4, delay: 2 });
  };

  const handlePointerOver = (over: boolean) => {
    if (over) {
      setPointerOver(true);
      document.body.style.cursor = 'pointer';
    } else {
      setPointerOver(false);
      document.body.style.cursor = 'default';
    }
  };

  const { y } = useSpring({ y: enter ? '20rem' : '0rem' });

  useEffect(() => {
    animateIn();
  }, []);

  return (
    <Fragment>
      <div className="absolute">
        <Image
          className={`${styles.bvlogo} animatelogo`}
          src="/2-images/1-index/0-bv-logo.png"
          alt="baklavegan"
          width={1400}
          height={343}
        />
      </div>
      <button
        className={`${styles.enterbtn} flex justify-center items-center opacity-0 animatebtn`}
        onPointerOver={() => handlePointerOver(true)}
        onClick={() => {
          setEnter(true);
        }}
      >
        <animated.div
          className={`${styles.enterimage} absolute bottom-24`}
          style={{ transform: y.to((y) => `translateY(${y})`) }}
        >
          <Image
            src="/2-images/1-index/1-enter-btn.png"
            alt="enter"
            width={175}
            height={219}
          />
        </animated.div>
        <animated.div
          className={`${styles.entertext} absolute bottom-40`}
          style={{ transform: y.to((y) => `translateY(${y})`) }}
        >
          <h3>enter</h3>
        </animated.div>
      </button>
    </Fragment>
  );
};

export default BaklaHome;
