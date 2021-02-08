// React
import { useState, useEffect } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useDispatch } from 'react-redux';
import { enterMenu } from '../../../redux/slices/MenuTransitionSlice';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../../../styles/0-navigation/1-menubutton/menubuttonroot.module.scss';

// React Types
import { FC } from 'react';

// Component Level Types
interface MenuButtonRootProps {
  disabled: boolean;
  toggleClick: () => void;
}

const MenuButtonRoot: FC<MenuButtonRootProps> = ({ disabled, toggleClick }) => {
  const dispatch = useDispatch();
  const [enterPlaced, setEnterPlaced] = useState(true);

  const inTl = gsap.timeline();

  const animateIn = () => {
    gsap.to(['.rootmenuimage', '.rootmenutext'], {
      y: -350,
      delay: 2,
      duration: 2.3,
      ease: 'back.out(1.2)',
    });
    inTl.to('.rootmenuimage', {
      opacity: 1,
      delay: 2,
      duration: 2.3,
    });
    inTl.to('.rootmenutext', {
      opacity: 0.8,
      duration: 2,
    });
  };

  const animateOut = () => {
    gsap.to('.rootmenubutton', {
      y: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'back.in(1.5)',
    });
  };

  const handleEnterClick = () => {
    animateOut();
    dispatch(enterMenu({ transition: true }));
    setTimeout(() => {
      toggleClick();
    }, 1000);
  };

  useEffect(() => {
    animateIn();
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
