// React
import { useState, useEffect, useRef, Fragment } from 'react';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import gsap from 'gsap';

// GSAP Animations
import {
  addNav,
  removeNav,
  bounceNav,
} from '../../components/4-about/2-animations/AboutNavAnimations';

// Components
import AboutBook from '../../components/4-about/3-components/AboutBook';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

const About: FC = () => {
  const {
    WindowSize: { width, height },
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBook = useRef();
  const [pageCount, setPageCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const animateIn = () => {
    gsap.to(['.aboutbookcontainer', '.storynavs'], {
      y: -1000,
      delay: 1,
      duration: 2.3,
      ease: 'back.out(1.07)',
      stagger: 0.15,
    });
  };

  const animateOut = () => {
    gsap.to(['.aboutbookcontainer', '.storynavs'], {
      y: 100,
      duration: 2,
      ease: 'back.in(1.1)',
      stagger: 0.15,
    });
  };

  const clickedNav = (targetNav: string) => {
    if (targetNav === 'story-nav-forward') {
      bounceNav('.booknavforward');
    } else {
      bounceNav('.booknavbackward');
    }
  };

  const handleForward = (e: any) => {
    (aboutBook.current as any).pageFlip.flipNext();
    setPageCount(pageCount + 1);
    clickedNav(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  const handleBackward = (e: any) => {
    (aboutBook.current as any).pageFlip.flipPrev();
    setPageCount(pageCount - 1);
    clickedNav(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  useEffect(() => {
    if (transition) {
      animateOut();
    } else {
      animateIn();
    }
  }, [transition]);

  useEffect(() => {
    if (pageCount === 8) {
      removeNav('.booknavforward');
    } else {
      addNav('.booknavforward');
    }
    if (pageCount === 0) {
      removeNav('.booknavbackward');
    } else {
      addNav('.booknavbackward');
    }
  }, [pageCount]);

  return (
    <Fragment>
      <div className="aboutbookcontainer fixed">
        <AboutBook ref={aboutBook} width={width} />
      </div>
      <button
        disabled={disabled}
        className="storynavs booknavforward fixed opacity-0"
        onClick={(e) => handleForward(e)}
      >
        <img src="/3-svgs/about/story-nav.svg" alt="story-nav-forward" />
      </button>
      <button
        disabled={disabled}
        className="storynavs booknavbackward fixed opacity-0"
        onClick={(e) => handleBackward(e)}
      >
        <img src="/3-svgs/about/story-nav.svg" alt="story-nav-backward" />
      </button>
    </Fragment>
  );
};

export default About;

// // React
// import { useState, useEffect, Fragment } from 'react';

// // Redux
// import { useSelector } from 'react-redux';

// // GSAP
// import gsap from 'gsap';

// // Components
// import AboutBookContainer from '../../components/4-about/2-components/AboutBookContainer';

// // React Types
// import { FC } from 'react';

// // Redux Types
// import { AppState } from '../../redux/store';

// const About: FC = () => {
//   const {
//     WindowSize: { width, height },
//   } = useSelector<AppState, AppState>((state) => state);

//   console.log(width, height);
//   return <AboutBookContainer />;
// };

// export default About;
