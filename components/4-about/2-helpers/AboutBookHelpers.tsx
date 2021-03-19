import { bounceNav } from "@/animations/4-about/AboutAnimations";

export const handleNavBounce = (targetNav: string, tag: string) => {
  if (targetNav === `book-nav-forward-${tag}`) {
    bounceNav(`.booknavforward${tag}`);
  } else {
    bounceNav(`.booknavbackward${tag}`);
  }
};
