// React
import { Fragment } from 'react';

// Next
import Image from 'next/image';
import Link from 'next/link';

// React Types
import { FC } from 'react';

const AboutInfo: FC = () => {
  return (
    <Fragment>
      <div className="aboutinfobg fixed about">
        <Image
          src="/2-images/3-about/3-about-info.png"
          alt="About Baklavegan"
          width={510}
          height={444}
        />
      </div>
      <div className="aboutinfo fixed text-center about abouttext opacity-0">
        <p>
          just a girl from istanbul and a dude from austin that wanted to make a
          gourmet vegan baklava business and advocate for animal rights in the
          process :) we think that leading with compassion and transparency is
          key so if you want to know how the proceeds are used{' '}
          <Link href="/baklavegan/finances">
            <a>
              <u>look here!</u>
            </a>
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default AboutInfo;
