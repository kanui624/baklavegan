// React
import { useState, useEffect, useRef, Fragment } from "react";

// Redux
import { useSelector } from "react-redux";

// GSAP Animations
import {
  animateIn,
  animateOut,
  addNav,
  removeNav,
  bounceNav,
} from "@/animations/4-about/AboutAnimations";

// Components
import AboutBook from "@/components/4-about/2-components/AboutBook";
import ViewInPortrait from "@/components/1-layout/ViewInPortrait";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

const About: FC = () => {
  const {
    WindowSize: { width, height },
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const aboutBook = useRef();
  const [pageCount, setPageCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const determineNavBounce = (targetNav: string) => {
    if (targetNav === "book-nav-forward") {
      bounceNav(".booknavforward");
    } else {
      bounceNav(".booknavbackward");
    }
  };

  const handleNav = (e: any, next: boolean) => {
    if (next) {
      (aboutBook.current as any).pageFlip.flipNext();
      setPageCount(pageCount + 1);
    } else {
      (aboutBook.current as any).pageFlip.flipPrev();
      setPageCount(pageCount - 1);
    }
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
        setPageCount(0);
        (aboutBook.current as any).pageFlip.turnToPage(0);
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
      <ViewInPortrait
        classN={"aboutviewinportrait"}
        descrip={" about story "}
      />
      <div className="aboutbookcontainer absolute">
        <AboutBook ref={aboutBook} width={width} height={height} />
      </div>
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
      {/* <h1 className="fixed text-8xl text-red-900 bottom-20">
        width: {width} height: {height}
      </h1> */}
    </Fragment>
  );
};

export default About;
