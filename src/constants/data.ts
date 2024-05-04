import { NavigationTypes } from "./types";

export const navigation: NavigationTypes[] = [
  {
    id: 1,
    name: "Home",
    url: "/#section--home",
  },
  {
    id: 2,
    name: "Features",
    url: "#section--features",
  },
  {
    id: 3,
    name: "Blog",
    url: "#section--blog",
  },
  {
    id: 4,
    name: "Support",
    url: "#section--contactus",
  },
  {
    id: 5,
    name: "sign in",
    url: "/#sign-in",
    isMobile: true,
  },
  {
    id: 6,
    name: "sign up",
    url: "/#sign-up",
    isMobile: true,
  },
];
