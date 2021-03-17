import gsap from "gsap";

gsap.config({
  nullTargetWarn: false,
});

export const animateInInitialLoad = (
  inInitClassOne: string,
  inInitClassTwo: string
) => {
  gsap.fromTo(
    [inInitClassOne, inInitClassTwo],
    { y: 0 },
    {
      y: -1000,
      delay: 1,
      duration: 2.3,
      ease: "back.out(1.07)",
      stagger: 0.15,
    }
  );
};

export const animateInIsLoaded = (
  inLoadedClassOne: string,
  inLoadedClassTwo: string
) => {
  const isLoadedTL = gsap.timeline();
  isLoadedTL.fromTo(
    [inLoadedClassOne, inLoadedClassTwo],
    { y: 0, opacity: 0 },
    { y: -1000, duration: 0 }
  );
  isLoadedTL.to([inLoadedClassOne, inLoadedClassTwo], {
    opacity: 1,
    duration: 0,
  });
};

export const animateOut = (outClassOne: string, outClassTwo: string) => {
  gsap.to([outClassOne, outClassTwo], {
    y: 100,
    duration: 2,
    ease: "back.in(1.1)",
    stagger: 0.15,
  });
};

export const addNav = (addNavClass: string) => {
  gsap.to(addNavClass, {
    display: "block",
  });
  gsap.to(addNavClass, {
    opacity: 1,
    duration: 1,
    delay: 0.8,
  });
};

export const removeNav = (removeNavClass: string) => {
  gsap.to(removeNavClass, {
    opacity: 0,
    duration: 0.5,
    delay: 1,
  });
  gsap.to(removeNavClass, {
    display: "none",
    delay: 1,
  });
};

export const bounceNav = (bounceClass: string) => {
  const bounceTl = gsap.timeline();
  bounceTl.to(bounceClass, {
    scale: 0.8,
    duration: 0.1,
    delay: 0.1,
    ease: "elastic.out(1, 0.1)",
  });
  bounceTl.to(bounceClass, {
    scale: 1,
    duration: 1.5,
    ease: "elastic.out(1, 0.1)",
  });
};
