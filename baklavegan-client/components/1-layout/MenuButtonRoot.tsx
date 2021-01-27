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
    gsap.to('.enterbutton', {
      opacity: 1,
      duration: 4,
      delay: 2,
      stagger: 0.2,
    });
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
      disabled={disabled}
      className={`${styles.enterbtn} enterbutton flex justify-center items-center opacity-0`}
      onClick={() => {
        handleEnterClick();
      }}
    >
      <animated.div
        className={`${styles.enterimage} absolute bottom-36`}
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
          width={135}
          height={169}
        />
      </animated.div>
      <animated.div
        className={`${styles.entertext} absolute`}
        style={{
          transform: y
            .to({
              range: [0, 0.5, 1],
              output: ['0rem', '-3rem', '45rem'],
            })
            .to((y) => `translateY(${y})`),
        }}
      >
        <h3 className="enterbutton opacity-0">enter</h3>
      </animated.div>
    </button>
  );
};

export default MenuButtonRoot;
