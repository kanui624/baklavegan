import gsap from 'gsap';

export const removeNav = (removeNavClass: string) => {
  gsap.to(removeNavClass, {
    opacity: 0,
    duration: 0.5,
    delay: 1,
  });
  gsap.to(removeNavClass, {
    display: 'none',
    delay: 1,
  });
};

export const addNav = (addNavClass: string) => {
  gsap.to(addNavClass, {
    display: 'block',
  });
  gsap.to(addNavClass, {
    opacity: 1,
    duration: 1,
    delay: 0.8,
  });
};
