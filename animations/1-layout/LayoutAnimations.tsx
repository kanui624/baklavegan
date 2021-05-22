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
  canvasTl.to(canvasIn, { opacity: '1', duration: 3 });
  bgTl.to(canvasBgIn, { display: 'block' });
  bgTl.to(canvasBgIn, { opacity: 1, duration: 1 });
};

export const animateMenuOut = (canvasOut: string, canvasBgOut: string) => {
  bgTl.to(canvasBgOut, { opacity: 0, duration: 0.8, delay: 0.5 });
  bgTl.to(canvasBgOut, { display: 'none' });
  gsap.to(canvasOut, { display: 'none', delay: 1.5 });
};
