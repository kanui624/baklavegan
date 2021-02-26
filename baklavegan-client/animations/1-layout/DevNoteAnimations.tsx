// GSAP
import gsap from 'gsap';

export const showDevNote = (devPage: string) => {
  const showDevNoteTl = gsap.timeline();
  showDevNoteTl.to(devPage, { y: -200, duration: 1.5, ease: 'back.out(1.02)' });
  showDevNoteTl.to(devPage, {
    y: 100,
    delay: 1.7,
    duration: 0.8,
    ease: 'back.in(1.02)',
  });
};
