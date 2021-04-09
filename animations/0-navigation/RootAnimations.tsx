// GSAP
import gsap from "gsap";

const inTl = gsap.timeline();

export const animateIn = (rootImageIn: string, rootTextIn: string) => {
  gsap.to([rootImageIn, rootTextIn], {
    y: -350,
    delay: 2,
    duration: 2.3,
    ease: "back.out(1.2)",
  });
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
    y: 0,
    stagger: 0.15,
    duration: 1,
    ease: "back.in(1.5)",
  });
};
