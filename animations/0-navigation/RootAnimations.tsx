// GSAP
import gsap from "gsap";

const inTl = gsap.timeline();

export const animateIn = (
  rootImageIn: string,
  rootTextIn: string,
  rootInvisiIn: string
) => {
  gsap.fromTo(
    [rootImageIn, rootTextIn, rootInvisiIn],
    { y: 300 },
    {
      y: 0,
      delay: 2,
      duration: 3,
      ease: "back.out(1.2)",
      stagger: 0.1,
    }
  );
  inTl.to(rootImageIn, {
    opacity: 1,
    delay: 2,
    duration: 2.3,
  });
  inTl.to(rootTextIn, {
    opacity: 0.8,
    duration: 2,
  });
};

export const animateOut = (rootBtnOut: string) => {
  gsap.to(rootBtnOut, {
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "back.in(1.5)",
  });
};

export const onHoverIn = (rootMenuHoverIn: string) => {
  gsap.to(rootMenuHoverIn, {
    y: -10,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(2.5)",
  });
};

export const onHoverOut = (rootMenuHoverOut: string) => {
  gsap.to(rootMenuHoverOut, {
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(2.5)",
  });
};
