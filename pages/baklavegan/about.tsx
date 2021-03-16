// React
import { useState, useEffect, useRef, Fragment } from "react";

// Components
import AboutBookSP from "@/components/4-about/2-components/AboutBookSP-og";
import AboutBookDP from "@/components/4-about/2-components/AboutBookDP-og";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  initializePage,
} from "@/redux/slices/AboutPageCountSlice";

// GSAP Animations
import {
  animateInInitialLoad,
  animateOut,
  addNav,
  removeNav,
  bounceNav,
} from "@/animations/4-about/AboutAnimations";

// Custom Hooks
import { useWindowResize } from "../../customhooks/useWindowResize";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

const About: FC = () => {
  // const dispatch = useDispatch();
  // const {
  //   AboutPageCount: { pageCount },
  //   MenuTransition: { transition },
  // } = useSelector<AppState, AppState>((state) => state);

  const [width, height] = useWindowResize();

  // const [isLoaded, setIsLoaded] = useState(false);
  const aboutBookSP = useRef();
  const [next, setNext] = useState(false);

  const dispatchPageCount = (flipPage: boolean) => {
    if (flipPage) {
      dispatch(nextPage({ pageCount: pageCount + 1 }));
    } else {
      dispatch(prevPage({ pageCount: pageCount - 1 }));
    }
  };

  // const determineNavBounce = (targetNav: string) => {
  //   if (targetNav === "book-nav-forward") {
  //     bounceNav(".booknavforward");
  //   } else {
  //     bounceNav(".booknavbackward");
  //   }
  // };

  // const handleNav = (e: any, flip: boolean) => {
  //   dispatchPageCount(flip);
  //   setNext(flip);
  //   determineNavBounce(e.target.alt);
  //   setDisabled(true);
  //   setTimeout(() => {
  //     setDisabled(false);
  //   }, 1500);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000);
  // }, []);

  useEffect(() => {
    if (transition) {
      animateOut(".aboutbookcontainer", ".booknavs");
      setTimeout(() => {
        dispatch(initializePage({ pageCount: 0 }));
      }, 3000);
    }

    // else {
    //   animateInInitialLoad(".aboutbookcontainer", ".booknavs");
    // }
  }, [transition]);

  useEffect(() => {
    if (pageCount === 8) {
      removeNav(".booknavforward");
    } else {
      addNav(".booknavforward");
    }
    if (pageCount === 0) {
      removeNav(".booknavbackward");
    } else {
      addNav(".booknavbackward");
    }
  }, [pageCount]);

  return (
    <Fragment>
      {(width >= 540 && height >= 720) || width > height ? (
        <AboutBookDP
          transition={transition}
          pageCount={pageCount}
          next={next}
          // isLoaded={isLoaded}
        />
      ) : (
        <AboutBookSP
          transition={transition}
          pageCount={pageCount}
          next={next}
          ref={aboutBookSP}
          // isLoaded={isLoaded}
        />
      )}

      {/* <span className="fixed text-4xl text-red-900 bottom-20">
        Window size: {width} x {height}
      </span> */}
    </Fragment>
  );
};

export default About;
