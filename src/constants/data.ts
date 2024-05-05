import {
  msgallery1,
  msgallery2,
  msgallery3,
  msgallery4,
  msgallery5,
  msgallery6,
  team1,
  team2,
  team3,
} from "../../images";
import {
  MasonryGalleryType,
  NavigationTypes,
  TeamCard,
  PriceCard,
} from "./types";

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

export const masonaryGallery: MasonryGalleryType[] = [
  {
    id: 1,
    imagePath: msgallery3,
    name: "mansory gallary image-1",
  },
  {
    id: 2,
    imagePath: msgallery5,
    name: "mansory gallary image-2",
  },
  {
    id: 3,
    imagePath: msgallery6,
    name: "mansory gallary image-3",
  },
  {
    id: 4,
    imagePath: msgallery4,
    name: "mansory gallary image-4",
  },
  {
    id: 5,
    imagePath: msgallery2,
    name: "mansory gallary image-5",
  },
  {
    id: 4,
    imagePath: msgallery1,
    name: "mansory gallary image-6",
  },
];

export const teamCards: TeamCard[] = [
  {
    id: 1,
    imagePath: team1,
    username: "Olivia Andrium",
    userrole: "Product Manager",
  },
  {
    id: 1,
    imagePath: team2,
    username: "Jemse Kemorun",
    userrole: "Web Developer",
  },
  {
    id: 1,
    imagePath: team3,
    username: "Avi Pestarica",
    userrole: "Web Designer",
  },
];

export const packages: PriceCard[] = [
  {
    id: 1,
    title: "Starter",
    price: "$49",
    requirement: "No credit card required",
    btnText: "Start for free",
    options: [
      { name: "Basic Website Design" },
      { name: "5 Pages" },
      { name: "Mobile Responsive" },
    ],
    trailDuration: "14 Days",
  },
  {
    id: 2,
    title: "Professional",
    price: "$99",
    requirement: "No credit card required",
    btnText: "Start for free",
    options: [
      { name: "Advanced Website Design" },
      { name: "10 Pages" },
      { name: "E-commerce Integration" },
    ],
    trailDuration: "30 Days",
    btnColorClass: "pricing__card__btn--green",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$299",
    requirement: "Custom quote required",
    btnText: "Contact us",
    options: [
      { name: "Custom Website Design" },
      { name: "Unlimited Pages" },
      { name: "SEO Optimization" },
    ],
    trailDuration: "Custom",
    btnColorClass: "pricing__card__btn--orange",
  },
];
