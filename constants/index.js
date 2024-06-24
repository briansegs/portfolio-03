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
    id: "project-1",
    imgUrl: img01,
    title: "The Hogwarts",
    gitUrl: "https://github.com/briansegs/personal-blog/",
    liveUrl: "https://briansegs.github.io/personal-blog/",
    stack: [
      "React",
      "Tailwindcss",
      "Next.js",
      "HTML 5",
      "CSS 3",
      "Javascript",
      "Mongo DB",
    ],
  },
  {
    id: "project-2",
    imgUrl: img02,
    title: "Narnia",
    gitUrl: "https://github.com/briansegs/nike/",
    liveUrl: "https://briansegs.github.io/nike/",
    stack: ["React", "Tailwindcss", "Next.js", "HTML 5", "CSS 3", "Javascript"],
  },
  {
    id: "project-3",
    imgUrl: img03,
    title: "Middle Earth",
    gitUrl: "https://github.com/briansegs/bank_app/",
    liveUrl: "https://briansegs.github.io/bank_app/",
    stack: ["React", "Tailwindcss", "HTML 5", "CSS 3"],
  },
  {
    id: "project-4",
    imgUrl: img04,
    title: "Westeros",
    gitUrl: "https://github.com/briansegs/gericht-restaurant/",
    liveUrl: "https://briansegs.github.io/gericht-restaurant/",
    stack: ["React", "HTML 5", "CSS 3"],
  },
  {
    id: "project-5",
    imgUrl: img05,
    title: "Pandora",
    gitUrl: "https://github.com/briansegs/gpt-3/",
    liveUrl: "https://briansegs.github.io/gpt-3/",
    stack: ["HTML 5", "CSS 3"],
  },
];
