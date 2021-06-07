// React
import { useEffect, Fragment } from "react";

// Redux
import { useSelector } from "react-redux";

// Components
import BaklavaCard from "@/components/3-baklava/2-components/BaklavaCard";
import BaklaTree from "@/components/3-baklava/2-components/Baklatree";

// GSAP Animations
import {
  animateIn,
  animateOut,
  spinAttributes,
  stopSpinAttributes,
} from "@/animations/3-baklava/BaklatreeAnimations";

// React Types
import { FC } from "react";

// Redux Types
import { AppState } from "@/redux/store";
import Baklatree from "@/components/3-baklava/2-components/Baklatree";

const Baklava: FC = () => {
  // const {
  //   MenuTransition: { transition },
  // } = useSelector<AppState, AppState>((state) => state);

  // useEffect(() => {
  //   spinAttributes(".attribanimation");

  //   return () => {
  //     stopSpinAttributes(".attribanimation");
  //   };
  // }, []);

  // useEffect(() => {
  //   if (transition) {
  //     animateOut(".baklatree", ".treeattribs", ".babywalnuts");
  //   } else {
  //     animateIn(".baklatree", ".treeattribs", ".babywalnuts");
  //   }
  // }, [transition]);

  return (
    <Fragment>
      <Baklatree />
      <BaklavaCard />
    </Fragment>
  );
};

export default Baklava;
