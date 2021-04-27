// React
import { Fragment, useState, useEffect } from "react";

// Next
import Image from "next/image";

// Redux
import { useDispatch } from "react-redux";
import { enterMenu } from "@/redux/slices/MenuTransitionSlice";

// GSAP Animations
import {
  animateIn,
  animateOut,
  onHoverIn,
  onHoverOut,
} from "@/animations/0-navigation/RootAnimations";

// React Types
import { FC } from "react";

// Component Level Types
interface MenuButtonRootProps {
  disabled: boolean;
  toggleClick: () => void;
}

const MenuButtonRoot: FC<MenuButtonRootProps> = ({ disabled, toggleClick }) => {
  const dispatch = useDispatch();
  const [rootTrigger, setRootTrigger] = useState(false);

  const handleEnterClick = () => {
    setRootTrigger(!rootTrigger);
    animateOut(".rootmenuitem");
    dispatch(enterMenu({ transition: true }));
    setTimeout(() => {
      toggleClick();
    }, 1000);
  };

  // useEffect(() => {
  //   animateIn(".rootmenuimage", ".rootmenutext", ".invisiblerootbtn");
  // }, []);

  return (
    <div className="rootmenubutton">
      <div className="absolute rootmenuitem rootmenuimage">
        <Image
          src="/2-images/1-index/1-enter-btn.png"
          layout="fill"
          objectFit="contain"
          alt="enter"
        />
      </div>
      <div className="absolute roottext rootmenuitem rootmenutext">
        <h3>enter</h3>
      </div>
      <button
        disabled={disabled}
        className="absolute invisiblerootbtn rootmenuitem"
        onPointerOver={() => (rootTrigger ? null : onHoverIn(".rootmenuitem"))}
        onPointerOut={() => (rootTrigger ? null : onHoverOut(".rootmenuitem"))}
        onClick={() => {
          handleEnterClick();
        }}
      >
        <div className="rootmenuitem" />
      </button>
    </div>
  );
};

export default MenuButtonRoot;
