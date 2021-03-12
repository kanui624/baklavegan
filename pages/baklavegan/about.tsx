// React
import { useState, useEffect, Fragment } from "react";

// Components
import AboutBookSinglePage from "@/components/4-about/2-components/AboutBookSinglePage";
import AboutBookDoublePage from "@/components/4-about/2-components/AboutBookDoublePage";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "@/redux/slices/AboutPageCountSlice";

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
  } = useSelector<AppState, AppState>((state) => state);

  const [width, height] = useWindowResize();
  const [next, setNext] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const dispatchPageCount = (flipPage: boolean) => {
    if (flipPage) {
      dispatch(nextPage({ pageCount: pageCount + 1 }));
    } else {
      dispatch(nextPage({ pageCount: pageCount - 1 }));
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
    setNext(flip);
    dispatchPageCount(flip);
    determineNavBounce(e.target.alt);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1500);
  };

  return (
    <Fragment>
      {width >= 540 && height >= 720 ? (
        <AboutBookDoublePage />
      ) : width > height ? (
        <AboutBookDoublePage />
      ) : (
        <AboutBookSinglePage next={next} />
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
