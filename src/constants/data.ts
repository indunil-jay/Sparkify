import {
  msgallery1,
  msgallery2,
  msgallery3,
  msgallery4,
  msgallery5,
  msgallery6,
} from "../../images";
import { MasonryGalleryType, NavigationTypes } from "./types";

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
