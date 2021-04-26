// React
import { useEffect, Fragment } from "react";

// Next
import Image from "next/image";

// Redux
import { useSelector } from "react-redux";

// GSAP Animations
import {
  animateLogoIn,
  animateLogoOut,
} from "@/animations/2-index/IndexAnimations";

// Custom Hooks
import { useWindowResize } from "../customhooks/useWindowResize";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";

const BaklaHome: FC = () => {
  const [width, height] = useWindowResize();

  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  useEffect(() => {
    if (transition) {
      animateLogoOut(".animatelogo");
    } else {
      animateLogoIn(".animatelogo");
    }
  }, [transition]);

  return (
    <div className="fixed bvlogo">
      <Image
        className="opacity-0 animatelogo"
        src="/2-images/1-index/0-bv-logo.png"
        alt="Baklavegan"
        layout="fill"
        objectFit="cover"
      />
      <span className="fixed text-4xl bottom-20">
        {width} x {height}
      </span>
    </div>
  );
};

export default BaklaHome;
