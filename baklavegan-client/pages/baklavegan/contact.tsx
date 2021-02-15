// React
import { Fragment, useEffect } from 'react';

// Next
import Link from 'next/link';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// GSAP Animations
import {
  animateIn,
  animateOut,
} from '../../animations/6-contact/ContactAnimations';

// Components
import ContactInfo from '../../components/6-contact/2-components/ContactInfo';

// Data
import { socialData } from '../../components/6-contact/1-data/SocialData';
import { contactData } from '../../components/6-contact/1-data/ContactData';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

// Component level Types
import {
  SocialDataProps,
  ContactInfoDataProps,
} from '../../components/6-contact/0-types/ContactProps';

const Contact: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  useEffect(() => {
    if (transition) {
      animateOut(
        '.sociallinkanimate',
        '.cardopacity',
        '.questionsto',
        '.businessto',
        '.infoto',
        '.socialto'
      );
    } else {
      animateIn(
        '.sociallinkanimate',
        '.questionsto',
        '.businessto',
        '.infoto',
        '.socialto'
      );
    }
  }, [transition]);

  return (
    <Fragment>
      <div className="fixed">
        {contactData.map(
          ({
            id,
            name,
            link,
            textOne,
            textTwo,
            textThree,
          }: ContactInfoDataProps) => (
            <ContactInfo
              key={id}
              name={name}
              image={`/2-images/0-global/1-infocards/${id}-info-card.jpg`}
              link={link}
              textOne={textOne}
              textTwo={textTwo}
              textThree={textThree}
            />
          )
        )}
      </div>
      <div className={`sociallinks absolute -inset-x-0 container mx-auto`}>
        <div className="flex flex-row justify-evenly socialcontainer">
          {socialData.map(
            ({ id, link, image, width, height }: SocialDataProps) => (
              <Link key={id} href={link}>
                <a className="sociallinkanimate">
                  <Image
                    src={`/2-images/5-contact/0-socials/${image}.png`}
                    alt={image}
                    width={width}
                    height={height}
                  />
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
