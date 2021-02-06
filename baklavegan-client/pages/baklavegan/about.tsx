// React
import { useEffect, Fragment } from 'react';

// Next
import Image from 'next/image';

// Components
import AboutBook from '../../components/4-about/AboutBook';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

const About: FC = () => {
  return (
    <Fragment>
      <AboutBook />
    </Fragment>
  );
};

export default About;
