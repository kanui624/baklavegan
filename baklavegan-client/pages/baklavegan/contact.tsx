// React
import { Fragment, useEffect } from 'react';

// Next
import Link from 'next/link';
import Image from 'next/image';

// GSAP
import gsap from 'gsap';

// Data
import { socialData } from '../../components/6-contact/SocialData';

// Styles
import styles from '../../styles/Pages/contact.module.scss';

// React Types
import { FC } from 'react';

// Component level Types
interface SocialDataProps {
  id: number;
  link: string;
  image: string;
  width: number;
  height: number;
}

const Contact: FC = () => {
  const animateSocialsIn = () => {
    gsap.from('.social', { y: 200, delay: 1.1, stagger: 0.2 });
  };

  useEffect(() => {
    animateSocialsIn();
  }, []);

  return (
    <Fragment>
      <div className="fixed">
        <div className="grid grid-rows-3 gap-10 px-4">
          <div className={styles.questions}>
            <p className="text-center text-4xl">have a question?</p>
            <p className="text-center text-4xl">
              maybe it's already been answered on our{' '}
              <Link href="/baklavegan/faq">
                <a>
                  <u>faq</u>
                </a>
              </Link>{' '}
              page
            </p>
            <p className="text-center text-4xl">
              if not, shoot us an email at{' '}
              <Link href="/baklavegan/faq">
                <a>
                  <u>info@baklavegan.com</u>
                </a>
              </Link>
            </p>
            <p className="text-center text-4xl">we'll be glad to help!</p>
          </div>
          <div className={styles.business}>
            <p className="text-center text-4xl">
              wanna put us in your dessert boxes?
            </p>
            <p className="text-center text-4xl">we'd love to partner up!</p>
            <p className="text-center text-4xl">
              reach out to{' '}
              <Link href="/baklavegan/faq">
                <a>
                  <u>sales@baklavegan.com</u>
                </a>
              </Link>
            </p>
            <p className="text-center text-4xl">let's do some baklabusiness!</p>
          </div>
          <div className={styles.followus}>
            <p className="text-center text-4xl">
              just wanna stay posted with what we're up to?
            </p>
            <p className="text-center text-4xl">
              follow us on any or all of our socials below!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 -inset-x-0 container mx-auto">
        <div className="flex flex-row justify-evenly">
          {socialData.map(
            ({ id, link, image, width, height }: SocialDataProps) => (
              <Link key={id} href={link}>
                <a className="social">
                  <Image
                    src={`/2-images/5-contact/${image}.png`}
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
