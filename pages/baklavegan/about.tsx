// React
import { Fragment } from "react";

// Components
import AboutBookSP from "@/components/4-about/3-components/AboutBookSP";
import AboutBookDP from "@/components/4-about/3-components/AboutBookDP";
import AboutBookDPP from "@/components/4-about/3-components/AboutBookDPP";

// Custom Hooks
import { useWindowResize } from "../../customhooks/useWindowResize";
// React Types
import { FC } from "react";

const About: FC = () => {
  const [width, height] = useWindowResize();

  return (
    <Fragment>
      {width >= 540 && height >= 720 && height > width ? (
        <AboutBookDPP />
      ) : width > height ? (
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
