// React
import { useEffect } from "react";

// Next
import Image from "next/image";

// Redux
import { useDispatch } from "react-redux";
import { enterMenu } from "../../../0-redux/slices/MenuTransitionSlice";

// GSAP Animations
import {
  animateIn,
  animateOut,
} from "../../../animations/0-navigation/RootAnimations";

// Styles
import styles from "../../../4-styles/0-navigation/1-menubutton/menubuttonroot.module.scss";

// React Types
import { FC } from "react";

// Component Level Types
interface MenuButtonRootProps {
  disabled: boolean;
  toggleClick: () => void;
}

const MenuButtonRoot: FC<MenuButtonRootProps> = ({ disabled, toggleClick }) => {
  const dispatch = useDispatch();

  const handleEnterClick = () => {
    animateOut(".rootmenubutton");
    dispatch(enterMenu({ transition: true }));
    setTimeout(() => {
      toggleClick();
    }, 1000);
  };

  useEffect(() => {
    animateIn(".rootmenuimage", ".rootmenutext");
  }, []);

  return (
    <button
      disabled={disabled}
      className={`${styles.enterbtn} flex justify-center items-center`}
      onClick={() => {
        handleEnterClick();
      }}
    >
      <div
        className={`${styles.menurootimage} absolute rootmenubutton rootmenuimage opacity-0`}
      >
        <Image
          src="/2-images/1-index/1-enter-btn.png"
          alt="enter"
          width={135}
          height={169}
        />
      </div>
      <div
        className={`${styles.menuroottext} absolute rootmenubutton rootmenutext opacity-0`}
      >
        <h3>enter</h3>
      </div>
    </button>
  );
};

export default MenuButtonRoot;
