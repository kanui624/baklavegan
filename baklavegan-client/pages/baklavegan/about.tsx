// React
import { useState, useEffect } from 'react';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import gsap from 'gsap';

// Components
import AboutBookMobile from '../../components/4-about/2-components/AboutBookMobile';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

const About: FC = () => {
  const [pageCount, setPageCount] = useState(0);
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const animateIn = () => {
    gsap.to(['.mobileaboutbookcontainer', '.storynavs'], {
      y: -470,
      delay: 1,
      duration: 2.3,
      ease: 'back.out(1.07)',
      stagger: 0.15,
    });
  };

  const animateOut = () => {
    gsap.to(['.mobileaboutbookcontainer', '.storynavs'], {
      y: 100,
      duration: 2,
      ease: 'back.in(1.1)',
      stagger: 0.15,
    });
  };

  useEffect(() => {
    if (transition) {
      animateOut();
    } else {
      animateIn();
    }
  }, [transition]);

  useEffect(() => {
    if (pageCount === 0) {
      gsap.to('.booknavbackward', {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to('.booknavbackward', {
        display: 'none',
        delay: 1,
      });
    } else {
      gsap.to('.booknavbackward', {
        display: 'block',
      });
      gsap.to('.booknavbackward', {
        opacity: 1,
        duration: 0.5,
      });
    }

    if (pageCount === 8) {
      gsap.to('.booknavforward', {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to('.booknavforward', {
        display: 'none',
        delay: 1,
      });
    } else {
      gsap.to('.booknavforward', {
        display: 'block',
      });
      gsap.to('.booknavforward', {
        opacity: 1,
        duration: 0.5,
        delay: 1,
      });
    }
  }, [pageCount]);

  return <AboutBookMobile setPageCount={setPageCount} pageCount={pageCount} />;
};

export default About;
