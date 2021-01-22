// React
import { useEffect } from 'react';

// Next
import Link from 'next/link';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import gsap from 'gsap';

// Styles
import styles from '../../styles/Pages/contact.module.scss';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

const ContactInfo: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const animateInfoIn = () => {
    gsap.to('.a', { opacity: 1, delay: 2.3, stagger: 0.1 });
  };

  const animateInfoOut = () => {
    gsap.to('.a', {
      opacity: 0,
    });
  };

  useEffect(() => {
    if (transition) {
      animateInfoOut();
    } else {
      animateInfoIn();
    }
  }, [transition]);

  return (
    <div className={`${styles.contactinfo} fixed`}>
      <div className="grid grid-rows-4 gap-3 px-4">
        <div className={styles.questions}>
          <p className="a text-center opacity-0">have a question?</p>
          <p className={`${styles.link} text-center a opacity-0`}>
            check out our{' '}
            <Link href="/baklavegan/faq">
              <a>
                <u className={styles.link}>faq</u>
              </a>
            </Link>{' '}
            page!
          </p>
        </div>
        <div>
          <p className="a text-center opacity-0">
            can't find what you're looking for?
          </p>
          <p className={`${styles.link} text-center a opacity-0`}>
            email us at{' '}
            <Link href="/baklavegan/faq">
              <a>
                <u className={styles.link}>info@baklavegan.com</u>
              </a>
            </Link>
          </p>
        </div>
        <div className={styles.business}>
          <p className="a text-center opacity-0">
            wanna do some baklabusiness?
          </p>
          <p className={`${styles.link} text-center a opacity-0`}>
            reach out to{' '}
            <Link href="/baklavegan/faq">
              <a>
                <u className={styles.link}>sales@baklavegan.com</u>
              </a>
            </Link>
          </p>
        </div>
        <div className={styles.followus}>
          <p className="a text-center opacity-0">
            just wanna see what we're up to?
          </p>
          <p className={`${styles.link} text-center a opacity-0`}>
            follow any of our socials below!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
