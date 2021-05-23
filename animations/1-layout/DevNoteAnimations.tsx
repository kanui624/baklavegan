// GSAP
import gsap from 'gsap';

export const showDevNote = (showNote: string) => {
  const showDevNoteTl = gsap.timeline();
  showDevNoteTl.to(showNote, {
    y: -200,
    opacity: 1,
    duration: 1.5,
    ease: 'back.out(1.02)',
  });
  showDevNoteTl.to(showNote, {
    y: 100,
    opacity: 0,
    delay: 2.5,
    duration: 0.8,
    ease: 'back.in(1.02)',
  });
};

export const hideDevNote = (hideNote: string) => {
  gsap.to(hideNote, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'back.in(1.02)',
  });
};
