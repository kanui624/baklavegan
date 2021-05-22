// GSAP
import gsap from 'gsap';

const bgTl = gsap.timeline();
const canvasTl = gsap.timeline();

// export const animateMenuIn = (canvasIn: string, canvasBgIn: string) => {
//   canvasTl.to(canvasIn, { display: 'block' });
//   canvasTl.to(canvasIn, { opacity: '1', duration: 0.7 });
//   bgTl.to(canvasBgIn, { display: 'block' });
//   bgTl.to(canvasBgIn, { opacity: 1, duration: 1 });
// };

// export const animateMenuOut = (canvasOut: string, canvasBgOut: string) => {
//   bgTl.to(canvasBgOut, { opacity: 0, duration: 0.8, delay: 0.5 });
//   bgTl.to(canvasBgOut, { display: 'none' });
//   gsap.to(canvasOut, { display: 'none', delay: 1.5 });
// };

export const animateMenuIn = (canvasIn: string, canvasBgIn: string) => {
  canvasTl.to(canvasIn, { display: 'block' });
  canvasTl.to(canvasIn, { opacity: '1', duration: 2 });
  // gsap.fromTo(
  //   canvasIn,
  //   { y: 1000, opacity: 0 },
  //   {
  //     y: 0,
  //     opacity: 1,
  //     delay: 1,
  //     duration: 2.3,
  //     ease: 'back.out(1.07)',
  //     stagger: 0.15,
  //   }
  // );
  bgTl.to(canvasBgIn, { display: 'block' });
  bgTl.to(canvasBgIn, { opacity: 1, duration: 1 });
};

export const animateMenuOut = (canvasOut: string, canvasBgOut: string) => {
  bgTl.to(canvasBgOut, { opacity: 0, duration: 0.8, delay: 0.5 });
  bgTl.to(canvasBgOut, { display: 'none' });
  gsap.to(canvasOut, { display: 'none', delay: 1.5 });
  // gsap.to(canvasOut, {
  //   y: 1000,
  //   duration: 2,
  //   ease: 'back.in(1.1)',
  //   stagger: 0.15,
  // });
};
