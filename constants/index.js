import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { img01, img02, img03, img04, img05 } from "../assets/projects";

export const navLinks = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/brian-segers-swe/",
    icon: <RxLinkedinLogo />,
    name: "Linkedin",
  },
  {
    href: "https://github.com/briansegs",
    icon: <RxGithubLogo />,
    name: "Github",
  },
];

export const projects = [
  {
    id: "world-1",
    imgUrl: img01,
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: img02,
    title: "Narnia",
  },
  {
    id: "world-3",
    imgUrl: img03,
    title: "Middle Earth",
  },
  {
    id: "world-4",
    imgUrl: img04,
    title: "Westeros",
  },
  {
    id: "world-5",
    imgUrl: img05,
    title: "Pandora",
  },
];
