// GSAP
import gsap from 'gsap';

export const animateLogoIn = (logoClassIn: string) => {
  gsap.to(logoClassIn, { opacity: 1, duration: 4, delay: 1 });
};

export const animateLogoOut = (logoClassOut: string) => {
  gsap.to(logoClassOut, { opacity: 0, duration: 1 });
};
