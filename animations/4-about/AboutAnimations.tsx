import gsap from 'gsap';

gsap.config({
  nullTargetWarn: false,
});

export const animateInInitialLoad = (
  inInitClassOne: string,
  inInitClassTwo: string
) => {
  gsap.fromTo(
    [inInitClassOne, inInitClassTwo],
    { y: 1200 },
    {
      y: 0,
      delay: 1.5,
      duration: 2,
      ease: 'back.out(1.07)',
      stagger: 0.15,
    }
  );
};

export const animateInIsLoaded = (
  inLoadedClassOne: string,
  inLoadedClassTwo?: string
) => {
  const isLoadedTL = gsap.timeline();
  isLoadedTL.fromTo(
    [inLoadedClassOne, inLoadedClassTwo],
    { y: 1200, opacity: 0 },
    { y: 0, duration: 0 }
  );
  isLoadedTL.to([inLoadedClassOne, inLoadedClassTwo], {
    opacity: 1,
    duration: 0,
  });
};

export const animateOut = (outClassOne: string, outClassTwo: string) => {
  gsap.to([outClassOne, outClassTwo], {
    y: 1200,
    duration: 1.8,
    ease: 'back.in(1.1)',
    stagger: 0.15,
  });
};

export const addNav = (addNavClass: string) => {
  gsap.to(addNavClass, {
    visibility: 'visible',
  });

  gsap.to(addNavClass, {
    opacity: 1,
    duration: 1,
    delay: 0.7,
  });
};

export const removeNav = (removeNavClass: string) => {
  gsap.to(removeNavClass, {
    opacity: 0,
    duration: 0.5,
    delay: 0.7,
  });
  gsap.to(removeNavClass, {
    visibility: 'hidden',
    delay: 1,
  });
};

export const bounceNav = (bounceClass: string) => {
  const bounceTl = gsap.timeline();
  bounceTl.to(bounceClass, {
    scale: 0.8,
    duration: 0.1,
    delay: 0.1,
    ease: 'elastic.out(1, 0.1)',
  });
  bounceTl.to(bounceClass, {
    scale: 1,
    duration: 1.5,
    ease: 'elastic.out(1, 0.1)',
  });
};
