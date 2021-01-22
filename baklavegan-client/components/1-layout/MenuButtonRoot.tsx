// React
import { useState, useEffect } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useDispatch } from 'react-redux';
import { enterMenu } from '../../redux/slices/MenuTransitionSlice';

// React Spring
import { useSpring, animated } from 'react-spring';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../../styles/Components/menubuttoninit.module.scss';

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

  const initialEnterButtonLoad = () => {
    gsap.to('#enterbutton', { opacity: 1, duration: 4, delay: 1.5 });
  };

  const { y } = useSpring({
    config: {
      friction: 100,
      mass: 6,
    },
    from: { y: 0 },
    y: enterPlaced ? 0 : 1,
  });

  const handleEnterClick = () => {
    setEnterPlaced(false);
    dispatch(enterMenu({ transition: true }));
    setTimeout(() => {
      toggleClick();
    }, 500);
  };

  useEffect(() => {
    initialEnterButtonLoad();
  }, []);

  return (
    <button
      id="enterbutton"
      disabled={disabled}
      className={`${styles.enterbtn} flex justify-center items-center opacity-0`}
      onClick={() => {
        handleEnterClick();
      }}
    >
      <animated.div
        className={`${styles.enterimage} absolute bottom-24`}
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
        className={`${styles.entertext} absolute bottom-40`}
        style={{
          transform: y
            .to({
              range: [0, 0.5, 1],
              output: ['0rem', '-3rem', '45rem'],
            })
            .to((y) => `translateY(${y})`),
        }}
      >
        <h3>enter</h3>
      </animated.div>
    </button>
  );
};

export default MenuButtonRoot;
