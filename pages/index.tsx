// React
import { useEffect, Fragment } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// GSAP Animations
import {
  animateLogoIn,
  animateLogoOut,
} from '../animations/2-index/IndexAnimations';

// Components
import ViewInPortrait from '../components/1-layout/ViewInPortrait';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../redux/store';

const BaklaHome: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  useEffect(() => {
    if (transition) {
      animateLogoOut('.animatelogo');
    } else {
      animateLogoIn('.animatelogo');
    }
  }, [transition]);

  return (
    <Fragment>
      <ViewInPortrait
        classN={'indexviewinportrait'}
        descrip={' baklavegan site '}
      />
      <div className="fixed bvlogo">
        <Image
          className="opacity-0 animatelogo"
          src="/2-images/1-index/0-bv-logo.png"
          alt="Baklavegan"
          width={1400}
          height={343}
        />
      </div>
    </Fragment>
  );
};

export default BaklaHome;
