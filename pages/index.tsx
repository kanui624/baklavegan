// React
import { useEffect } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import { gsap } from 'gsap';

// Styles
import styles from '../styles/2-index-scss/index.module.scss';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../redux/store';

const BaklaHome: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const animateLogoIn = () => {
    gsap.to('.animatelogo', { opacity: 1, duration: 4, delay: 1 });
  };

  const animateLogoOut = () => {
    gsap.to('.animatelogo', { opacity: 0, duration: 1 });
  };

  useEffect(() => {
    if (transition) {
      animateLogoOut();
    } else {
      animateLogoIn();
    }
  }, [transition]);

  return (
    <div className="fixed">
      <Image
        className="opacity-0 animatelogo"
        src="/2-images/1-index/0-bv-logo.png"
        alt="Baklavegan"
        width={1400}
        height={343}
      />
    </div>
  );
};

export default BaklaHome;
