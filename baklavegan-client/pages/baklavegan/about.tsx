// React
import { useEffect } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import gsap from 'gsap';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

// Styles
import styles from '../../styles/Pages/3-about-scss/about.module.scss';

const About: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const animateIn = () => {};
  const animateOut = () => {};
  const startAttribRotation = () => {
    gsap.to('.attribanimation', {
      rotationZ: 360,
      transformOrigin: '50%, 50%',
      repeat: -1,
      duration: 15,
      ease: 'none',
    });
  };

  useEffect(() => {
    if (transition) {
      animateOut();
    } else {
      animateIn();
      startAttribRotation();
    }
  }, []);
  return (
    <Image
      className={`${styles.attribs} attribanimation fixed`}
      src="/2-images/3-about/0-rotate-attrib/0-attribs.png"
      alt="baklavegan product attributes"
      width={1000}
      height={846}
    />
  );
};

export default About;
