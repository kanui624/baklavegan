// React
import { useState, useEffect } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useDispatch } from 'react-redux';
import { enterMenu, exitMenu } from '../../redux/slices/MenuTransitionSlice';

// React Spring
import { useSpring, animated } from 'react-spring';

// Styles
import styles from '../../styles/Components/menubuttonpage.module.scss';

// React Types
import { FC } from 'react';

// Component Level Types
interface MenuButtonPageProps {
  clicked: boolean;
  disabled: boolean;
  toggleClick: () => void;
}

const MenuButtonPage: FC<MenuButtonPageProps> = ({
  clicked,
  disabled,
  toggleClick,
}) => {
  const dispatch = useDispatch();
  const [menuPlaced, setMenuPlaced] = useState(true);
  const [delay, setDelay] = useState(false);

  const { y } = useSpring({
    config: {
      friction: menuPlaced ? 250 : 170,
      mass: menuPlaced ? 3 : 10,
      clamp: true,
    },
    from: { y: 0 },
    y: menuPlaced ? 0 : 1,
    delay: delay ? 0 : 800,
  });

  const handleMenuClick = () => {
    setMenuPlaced(!menuPlaced);
    dispatch(enterMenu({ transition: true }));
    setDelay(true);
    setTimeout(() => {
      toggleClick();
    }, 800);
  };

  useEffect(() => {
    if (clicked) {
      setMenuPlaced(true);
    } else {
      setMenuPlaced(false);
      setDelay(false);
    }
  }, [clicked]);

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
        className={`${styles.menuimage} absolute`}
        style={{
          transform: y
            .to({
              range: [0, 0.5, 0.75, 1],
              output: ['0rem', '2rem', '-21rem', '-20rem'],
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
        className={`${styles.menutext} absolute `}
        style={{
          transform: y
            .to({
              range: [0, 0.5, 0.75, 1],
              output: ['0rem', '3rem', '-18rem', '-16rem'],
            })
            .to((y) => `translateY(${y})`),
        }}
      >
        <h3>menu</h3>
      </animated.div>
    </button>
  );
};

export default MenuButtonPage;
