// React
import { useState, useEffect, Fragment } from "react";

// Components
import AboutBook from "@/components/4-about/2-components/AboutBook";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  initializePage,
} from "@/redux/slices/AboutPageCountSlice";

// Data
import { AboutBookSinglePageData } from "@/components/4-about/1-data/AboutBookSinglePage";
import { AboutBookDoublePageData } from "@/components/4-about/1-data/AboutBookDoublePage";

// GSAP Animations
import {
  animateIn,
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
  const dispatch = useDispatch();
  const {
    AboutPageCount: { pageCount },
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const [width, height] = useWindowResize();
  const [next, setNext] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const dispatchPageCount = (flipPage: boolean) => {
    if (flipPage) {
      dispatch(nextPage({ pageCount: pageCount + 1 }));
    } else {
      dispatch(prevPage({ pageCount: pageCount - 1 }));
    }
  };

  const determineNavBounce = (targetNav: string) => {
    if (targetNav === "book-nav-forward") {
      bounceNav(".booknavforward");
    } else {
      bounceNav(".booknavbackward");
    }
  };

  const handleNav = (e: any, flip: boolean) => {
    dispatchPageCount(flip);
    setNext(flip);
    determineNavBounce(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  useEffect(() => {
    if (transition) {
      animateOut(".aboutbookcontainer", ".booknavs");
      setTimeout(() => {
        dispatch(initializePage({ pageCount: 0 }));
      }, 3000);
    } else {
      animateIn(".aboutbookcontainer", ".booknavs");
    }
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
        <AboutBook
          transition={transition}
          pageCount={pageCount}
          data={AboutBookDoublePageData}
          next={next}
          tag={"dp"}
        />
      ) : (
        <AboutBook
          transition={transition}
          pageCount={pageCount}
          data={AboutBookSinglePageData}
          next={next}
          tag={"sp"}
        />
      )}
      <button
        disabled={disabled}
        className="booknavs booknavforward fixed opacity-0"
        onClick={(e) => handleNav(e, true)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-forward" />
      </button>
      <button
        disabled={disabled}
        className="booknavs booknavbackward fixed opacity-0"
        onClick={(e) => handleNav(e, false)}
      >
        <img src="/3-svgs/about/book-nav.svg" alt="book-nav-backward" />
      </button>
      {/* <span className="fixed text-4xl text-red-900 bottom-20">
        Window size: {width} x {height}
      </span> */}
    </Fragment>
  );
};

export default About;
