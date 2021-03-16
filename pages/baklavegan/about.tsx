// React
import { useState, Fragment, useEffect, useRef } from "react";

// Components
import AboutBookSinglePage from "@/components/4-about/2-components/AboutBookSinglePage";
import AboutBookDoublePage from "@/components/4-about/2-components/AboutBookDoublePage";

// Custom Hooks
import { useWindowResize } from "../../customhooks/useWindowResize";
// React Types
import { FC } from "react";

const About: FC = () => {
  const [width, height] = useWindowResize();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Fragment>
      {(width >= 540 && height >= 720) || width > height ? null : (
        <AboutBookSinglePage isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      )}
      {/* <span className="fixed text-4xl text-red-900 bottom-20">
        Window size: {width} x {height}
      </span> */}
    </Fragment>
  );
};

export default About;
