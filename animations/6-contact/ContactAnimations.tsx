// GSAP
import gsap from 'gsap';

gsap.config({
  nullTargetWarn: false,
});

export const animateIn = (
  linksIn: string,
  questionsIn: string,
  businessIn: string,
  infoIn: string,
  socialIn: string
) => {
  gsap.fromTo(
    linksIn,
    { y: 300 },
    {
      y: 0,
      duration: 1,
      delay: 1.6,
      stagger: 0.15,
      ease: 'back.out(1.02)',
    }
  );
  gsap.fromTo(
    [questionsIn, businessIn],
    { x: 1650 },
    {
      x: 20,
      opacity: 1,
      delay: 0.6,
      stagger: 0.15,
      duration: 1.5,
      ease: 'back.out(.75)',
    }
  );
  gsap.fromTo(
    [infoIn, socialIn],
    { x: -1650 },
    {
      x: -20,
      opacity: 1,
      delay: 0.6,
      stagger: 0.15,
      duration: 1.5,
      ease: 'back.out(.75)',
    }
  );
};

export const animateOut = (
  linksOut: string,
  cardOpacityOut: string,
  questionsOut: string,
  businessOut: string,
  infoOut: string,
  socialOut: string
) => {
  gsap.to(linksOut, {
    y: 200,
    stagger: 0.1,
    delay: 0.5,
    ease: 'back.in(.75)',
  });
  gsap.to(cardOpacityOut, { opacity: 0, delay: 0.4, stagger: 0.1 });
  gsap.to([questionsOut, businessOut], {
    x: -500,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    delay: 0.3,
    ease: 'back.in(.75)',
  });
  gsap.to([infoOut, socialOut], {
    x: 500,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    delay: 0.3,
    ease: 'back.in(.75)',
  });
};
