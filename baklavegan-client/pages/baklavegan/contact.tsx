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
    gsap.to('.socials', { y: -200, delay: 1, stagger: 0.15 });
    gsap.to(['.questions'], {
      x: 1000,
      delay: 1.5,
      stagger: 0.15,
      duration: 1,
    });
  };

  const animateOut = () => {
    gsap.to('.socials', {
      y: 200,
      stagger: 0.1,
      delay: 0.5,
      ease: 'bounce.out',
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
      <div className="absolute">
        {contactData.map(
          ({
            id,
            name,
            textOne,
            textTwo,
            textThree,
            link,
          }: ContactInfoDataProps) => (
            <ContactInfo
              key={id}
              id={id}
              name={name}
              textOne={textOne}
              textTwo={textTwo}
              textThree={textThree}
              link={link}
              image={`/2-images/5-contact/1-bg/${id}-${name}.jpg`}
              initialBgPos={`${name}bg`}
              textOnePos={`${name}textone`}
              textTwoPos={`${name}texttwo`}
              textThreePos={`${name}textthree`}
              linkPos={`${name}link`}
              animateFrom={name}
            />
          )
        )}
      </div>
      <div
        className={`${styles.socials} absolute -inset-x-0 container mx-auto`}
      >
        <div className="flex flex-row justify-evenly">
          {socialData.map(
            ({ id, link, image, width, height }: SocialDataProps) => (
              <Link key={id} href={link}>
                <a className="socials">
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
