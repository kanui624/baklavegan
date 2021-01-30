// React
import { useEffect, Fragment } from 'react';

// Next
import Image from 'next/image';

// Redux
import { useSelector } from 'react-redux';

// GSAP
import gsap from 'gsap';

// Components
import BabyWalnut from '../../components/4-about/BabyWalnut';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

const About: FC = () => {
  const {
    MenuTransition: { transition },
  } = useSelector<AppState, AppState>((state) => state);

  const treeWalnutTl = gsap.timeline();
  const animateIn = () => {
    treeWalnutTl.to(['.treeattribs', '.babywalnuts'], {
      y: -1000,
      delay: 1,
      duration: 2.3,
      ease: 'back.out(1.07)',
    });
    gsap.fromTo(
      '.babywalnuts',
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        delay: 3,
        ease: 'bounce.out',
      }
    );
  };
  const animateOut = () => {
    gsap.to(['.treeattribs', '.babywalnuts'], {
      y: 100,
      duration: 2,
      ease: 'back.in(1.1)',
    });
  };

  useEffect(() => {
    gsap.to('.attribanimation', {
      rotationZ: -360,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      gsap.to('.attribanimation', {
        rotationZ: 0,
        ease: 'none',
      });
    };
  }, []);

  useEffect(() => {
    if (transition) {
      animateOut();
    } else {
      animateIn();
    }
  }, [transition]);

  return (
    <Fragment>
      <div className="fixed treeattribs">
        <div className="spinnerparent">
          <div className="spinnerchild">
            <div className="attribanimation">
              <Image
                src="/2-images/3-about/0-attribs.png"
                alt="baklavegan product attributes"
                width={700}
                height={592}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed abouttree treeattribs">
        <Image
          src="/2-images/3-about/1-about-tree.png"
          alt="baklatreegan tree"
          width={749}
          height={850}
        />
      </div>
      <BabyWalnut />
      {/* <div className={`${styles.abouttext} fixed text-justify`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          laudantium hic odio laborum soluta nam voluptas repellendus, earum
          architecto id quod porro optio dolores harumx
        </p>
      </div> */}
    </Fragment>
  );
};

export default About;

// Baklavegan was founded in Austin Texas when a native Austinite met a native Istanbulite and shorlty after realized that thier shared passion for food and animal rights could be turned into something special! Thus Baklavegan was born!
// When an Austinite met an Istanbulite, they soon realized that thier
// passion for both food an animal rights could be turned into something
// special... Baklavegan! At BV we're only here to serve you nothing less
// than thoughtfully crafted gourmet dessert and advocate for the well
// being of all species on earth in the process!
