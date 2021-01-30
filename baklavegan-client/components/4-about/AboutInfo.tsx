// React
import { Fragment } from 'react';

// Next
import Image from 'next/image';

// React Types
import { FC } from 'react';

const AboutInfo: FC = () => {
  return (
    <Fragment>
      <Image
        src="/2-images/0-global/1-infocards/0-info-card.png"
        alt="About Baklavegan"
        width={40}
        height={53}
      />
      <Image
        src="/2-images/0-global/1-infocards/1-info-card.png"
        alt="About Baklavegan"
        width={40}
        height={53}
      />
    </Fragment>
  );
};

export default AboutInfo;
