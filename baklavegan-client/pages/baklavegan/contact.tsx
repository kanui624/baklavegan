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

// Styles
import styles from '../../styles/Pages/contact.module.scss';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

// Component level Types
interface SocialDataProps {
  id: number;
  link: string;
  image: string;
  width: number;
  height: number;
}

const Contact: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const bgIn = gsap.timeline();

  const animateSocialsIn = () => {
    gsap.to('.social', { y: -200, delay: 1, stagger: 0.15 });
    bgIn.to('.contact-bg-animation', {
      opacity: 0.7,
      y: -860,
      duration: 1,
      delay: 0.7,
    });
    bgIn.to('.contact-bg-animation', {
      opacity: 1,
      y: -847,
      duration: 1,
    });
  };

  const bgOut = gsap.timeline();

  const animateSocialsOut = () => {
    gsap.to('.social', {
      y: 200,
      stagger: 0.1,
      delay: 0.5,
      ease: 'bounce.out',
    });

    bgOut.to('.contact-bg-animation', {
      y: -900,
      opacity: 0,
      duration: 0.5,
    });

    bgOut.to('.contact-bg-animation', {
      y: 0,
      opacity: 0,
      duration: 1.5,
    });
  };

  useEffect(() => {
    if (transition) {
      animateSocialsOut();
    } else {
      animateSocialsIn();
    }
    console.log(`contact: ${transition}`);
  }, [transition]);

  return (
    <Fragment>
      <div
        className={`${styles.contactbg} fixed contact-bg-animation opacity-0`}
      >
        <Image
          src={`/2-images/5-contact/1-bg/0-contactbg.png`}
          alt={'Contact Page'}
          width={650}
          height={587}
        />
      </div>
      <ContactInfo />
      <div
        className={`${styles.socials} absolute -inset-x-0 container mx-auto`}
      >
        <div className="flex flex-row justify-evenly">
          {socialData.map(
            ({ id, link, image, width, height }: SocialDataProps) => (
              <Link key={id} href={link}>
                <a className="social">
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
