// React
import { Fragment, useEffect } from 'react';

// Next
import Link from 'next/link';
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import gsap from 'gsap';

// Components
import ContactInfo from '../../components/6-contact/ContactInfo';

// Data
import { socialData } from '../../components/6-contact/SocialData';
import { contactData } from '../../components/6-contact/ContactData';

// Styles
import styles from '../../styles/Pages/4-conact-scss/contact.module.scss';

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

  const animateIn = () => {
    gsap.to('.sociallinkanimate', { y: -200, delay: 1.5, stagger: 0.15 });
    gsap.to('.cardopacity', { opacity: 1 });
    gsap.to(['.questionsto', '.businessto'], {
      x: 1000,
      delay: 0.6,
      stagger: 0.15,
      duration: 1,
    });
    gsap.to(['.infoto', '.socialto'], {
      x: -1000,
      delay: 0.6,
      stagger: 0.15,
      duration: 1,
    });
  };

  const animateOut = () => {
    gsap.to('.sociallinkanimate', {
      y: 200,
      stagger: 0.1,
      delay: 0.5,
      ease: 'bounce.out',
    });
    gsap.to('.cardopacity', { opacity: 0, delay: 0.4, stagger: 0.1 });
    gsap.to(['.questionsto', '.businessto'], {
      x: -800,
      stagger: 0.15,
      duration: 1,
      delay: 0.5,
    });
    gsap.to(['.infoto', '.socialto'], {
      x: 800,
      stagger: 0.15,
      duration: 1,
      delay: 0.5,
    });
  };

  useEffect(() => {
    if (transition) {
      animateOut();
    } else {
      animateIn();
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
              image={`/2-images/5-contact/1-bg/${id}-${name}.jpg`}
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
