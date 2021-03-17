// React
import { useState, Fragment, useEffect, useRef } from "react";

// Components
import AboutBookSP from "@/components/4-about/2-components/AboutBookSP";
import AboutBookDP from "@/components/4-about/2-components/AboutBookDP";

// Custom Hooks
import { useWindowResize } from "../../customhooks/useWindowResize";
// React Types
import { FC } from "react";

const About: FC = () => {
  const [width, height] = useWindowResize();
  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Fragment>
      {(width >= 540 && height >= 720) || width > height ? (
        <AboutBookDP />
      ) : (
        <AboutBookSP />
      )}
      {/* <span className="fixed text-4xl text-red-900 bottom-20">
        Window size: {width} x {height}
      </span> */}
    </Fragment>
  );
};

export default About;
