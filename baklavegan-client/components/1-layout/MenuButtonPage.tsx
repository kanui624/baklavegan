// React
import { useState, useEffect } from 'react';

// Next
import Image from 'next/image';

// React Spring
import { useSpring, animated } from 'react-spring';

// GSAP
import { gsap } from 'gsap';

// React Types
import { FC } from 'react';

// Styles
import styles from '../../styles/Components/menubuttonpage.module.scss';

// Component Level Types
interface MenuButtonPageProps {
  toggleClick: () => void;
  disabled: boolean;
}

const MenuButtonPage: FC<MenuButtonPageProps> = ({ disabled, toggleClick }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const { y } = useSpring({
    config: {
      friction: 100,
      mass: 3,
    },
    from: { y: 0 },
    y: menuClicked ? 1 : 0,
  });

  const handleMenuClick = () => {
    setMenuClicked(true);
    setTimeout(() => {
      toggleClick();
    }, 650);
  };

  return (
    <button
      id="menubutton"
      disabled={disabled}
      className={`${styles.menubtn} flex justify-center items-center`}
      onClick={() => {
        handleMenuClick();
      }}
    >
      <animated.div
        className={`${styles.menuimage} absolute bottom-24`}
        style={{
          transform: y
            .to({
              range: [0, 0.5, 1],
              output: ['0rem', '-2rem', '40rem'],
            })
            .to((y) => `translateY(${y})`),
        }}
      >
        <Image
          src="/2-images/1-index/1-enter-btn.png"
          alt="enter"
          width={175}
          height={219}
        />
      </animated.div>
      <animated.div
        className={`${styles.menutext} absolute bottom-40`}
        style={{
          transform: y
            .to({
              range: [0, 0.5, 1],
              output: ['0rem', '-2rem', '40rem'],
            })
            .to((y) => `translateY(${y})`),
        }}
      >
        <h3>menu</h3>
      </animated.div>
    </button>
    // <p>
    //   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam
    //   perferendis nisi architecto ut minus beatae ipsa, nemo maiores fugit,
    //   veniam officiis sint? Aperiam provident magnam itaque odio quisquam sunt.
    // </p>
  );
};

export default MenuButtonPage;
