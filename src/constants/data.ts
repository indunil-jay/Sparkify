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
  TestimonialCard,
} from "./types";

export const navigation: NavigationTypes[] = [
  {
    id: 1,
    name: "Pricing",
    url: "#section--pricing",
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
    url: "#sign-in",
    isMobile: true,
  },
  {
    id: 6,
    name: "sign up",
    url: "#sign-up",
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
    price: "49",
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
    price: "99.9",
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
    price: "299",
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

export const testimonailCards: TestimonialCard[] = [
  {
    id: 1,
    header: "Outstanding Web Development Services",
    text: "I am thrilled with the results achieved by the team at Sparkify. They listened attentively to my requirements and delivered a website that exceeded my expectations. The attention to detail and the level of professionalism demonstrated throughout the project were exceptional. I highly recommend Sparkify for anyone looking for top-notch web development services.",
    imagePath: team1,
    username: "Emily Thompson",
    location: "New York, USA",
  },
  {
    id: 2,
    header: "Exceptional UX/UI Design Services",
    text: "Working with Sparkify was a game-changer for our business. Their team of designers meticulously crafted a stunning user interface for our website, resulting in a significant increase in user engagement and conversions. We were impressed by their creativity, professionalism, and dedication to delivering outstanding results.",
    imagePath: team2,
    username: "John Smith",
    location: "London, UK",
  },
  {
    id: 3,
    header: "Efficient Digital Marketing Strategies",
    text: "Sparkify's digital marketing services have been instrumental in driving traffic to our website and boosting our online presence. Their strategic approach, coupled with their in-depth knowledge of the latest trends in digital marketing, has helped us reach our target audience effectively and achieve remarkable results. We highly recommend Sparkify to anyone looking to grow their business online.",
    imagePath: team3,
    username: "Sarah Johnson",
    location: "Sydney, Australia",
  },
];
