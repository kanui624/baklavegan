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
      rotationZ: -360,
      duration: 20,
      ease: 'none',
      repeat: -1,
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
    <div className="fixed">
      <div className={`${styles.parent}`}>
        <div className={`${styles.child}`}>
          <div className={`attribanimation`}>
            <Image
              src="/2-images/3-about/0-rotate-attrib/0-attribs.png"
              alt="baklavegan product attributes"
              width={800}
              height={677}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div className={`${styles.attribs} fixed`} />; */
}
