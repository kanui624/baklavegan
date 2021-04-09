// GSAP
import gsap from "gsap";

export const animateIn = (pageMenuBtnIn: string) => {
  gsap.to(pageMenuBtnIn, {
    y: -200,
    stagger: 0.15,
    delay: 2.2,
    duration: 0.8,
    ease: "back.out(2.5)",
  });
};

export const animateOut = (pageMenuBtnOut: string) => {
  gsap.to(pageMenuBtnOut, {
    y: -100,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.in(2.5)",
  });
};

export const onHoverIn = (pageMenuHoverIn: string) => {
  gsap.to(pageMenuHoverIn, {
    y: -210,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(2.5)",
  });
};

export const onHoverOut = (pageMenuHoverOut: string) => {
  gsap.to(pageMenuHoverOut, {
    y: -200,
    stagger: 0.15,
    duration: 0.8,
    ease: "back.out(2.5)",
  });
};
