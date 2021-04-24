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
    animateOut(".rootmenubutton");
    dispatch(enterMenu({ transition: true }));
    setTimeout(() => {
      toggleClick();
    }, 1000);
  };

  useEffect(() => {
    animateIn(".rootmenuimage", ".rootmenutext", ".invisiblerootbtn");
  }, []);

  return (
    <Fragment>
      <div className="fixed rootmenubutton rootmenuimage opacity-0">
        <Image
          className="rootimage"
          src="/2-images/1-index/1-enter-btn.png"
          layout="fill"
          objectFit="cover"
          alt="enter"
        />
      </div>
      <div className="fixed roottext rootmenubutton rootmenutext opacity-0">
        <h3>enter</h3>
      </div>
      <button
        disabled={disabled}
        className="fixed invisiblerootbtn rootmenubutton"
        onPointerOver={() =>
          rootTrigger ? null : onHoverIn(".rootmenubutton")
        }
        onPointerOut={() =>
          rootTrigger ? null : onHoverOut(".rootmenubutton")
        }
        onClick={() => {
          handleEnterClick();
        }}
      >
        <div className="rootmenubutton rootmenuinvisi" />
      </button>
    </Fragment>
  );
};

export default MenuButtonRoot;
