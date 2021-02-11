// React
import { useState, useEffect, Fragment } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useDispatch } from 'react-redux';
import { enterMenu } from '../../../redux/slices/MenuTransitionSlice';

// GSAP
import gsap from 'gsap';

// Styles
import styles from '../../../styles/0-navigation/1-menubutton/menubuttonpage.module.scss';

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
  const [pageTrigger, setPageTrigger] = useState(true);

  const animateIn = () => {
    gsap.to('.pagemenubutton', {
      y: -200,
      stagger: 0.15,
      delay: 2.2,
      duration: 0.8,
      ease: 'back.out(2.5)',
    });
  };

  const animateOut = () => {
    gsap.to('.pagemenubutton', {
      y: -100,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.in(2.5)',
    });
  };

  const onHoverIn = () => {
    gsap.to('.pagemenubutton', {
      y: -210,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(2.5)',
    });
  };

  const onHoverOut = () => {
    gsap.to('.pagemenubutton', {
      y: -200,
      stagger: 0.15,
      duration: 0.8,
      ease: 'back.out(2.5)',
    });
  };

  const handleMenuClick = () => {
    setPageTrigger(!pageTrigger);
    dispatch(enterMenu({ transition: true }));
    setTimeout(() => {
      toggleClick();
    }, 800);
  };

  useEffect(() => {
    if (clicked) {
      setPageTrigger(true);
    } else {
      setPageTrigger(false);
    }
  }, [clicked]);

  useEffect(() => {
    if (pageTrigger) {
      animateOut();
    } else {
      animateIn();
    }
  }, [pageTrigger]);

  return (
    <Fragment>
      <div className={`${styles.menupageimage} absolute pagemenubutton`}>
        <Image
          src="/2-images/1-index/1-enter-btn.png"
          alt="enter"
          width={175}
          height={219}
        />
      </div>
      <div className={`${styles.menupagetext} absolute pagemenubutton`}>
        <h3>menu</h3>
      </div>
      <button
        disabled={disabled}
        className={`${styles.menubtn} flex justify-center items-center`}
        onPointerOver={() => (pageTrigger ? null : onHoverIn())}
        onPointerOut={() => (pageTrigger ? null : onHoverOut())}
        onClick={() => {
          handleMenuClick();
        }}
      >
        <div className={`${styles.invisiblemenubtn} pagemenubutton absolute`} />
      </button>
    </Fragment>
  );
};

export default MenuButtonPage;
