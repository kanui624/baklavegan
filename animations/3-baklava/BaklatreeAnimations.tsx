// GSAP
import gsap from "gsap";

gsap.config({
  nullTargetWarn: false,
});

const treeWalnutTl = gsap.timeline();
export const animateIn = (
  baklaTreeIn: string,
  treeAttribsIn: string,
  babyWalnutsIn: string
) => {
  treeWalnutTl.to([baklaTreeIn, treeAttribsIn, babyWalnutsIn], {
    y: -1000,
    delay: 1,
    duration: 2.3,
    ease: "back.out(1.07)",
  });
  gsap.fromTo(
    babyWalnutsIn,
    { scale: 0 },
    {
      scale: 1,
      duration: 1,
      stagger: 0.2,
      delay: 3,
      ease: "bounce.out",
    }
  );
};

export const animateOut = (
  baklaTreeOut: string,
  treeAttribsOut: string,
  babyWalnutsOut: string
) => {
  gsap.to([baklaTreeOut, treeAttribsOut, babyWalnutsOut], {
    y: 100,
    duration: 2,
    ease: "back.in(1.1)",
  });
};

export const spinAttributes = (spinAttributes: string) => {
  gsap.to(spinAttributes, {
    rotationZ: -360,
    duration: 20,
    ease: "none",
    repeat: -1,
  });
};

export const stopSpinAttributes = (stopSpinAttributes: string) => {
  gsap.to(stopSpinAttributes, {
    rotationZ: 0,
    ease: "none",
  });
};
