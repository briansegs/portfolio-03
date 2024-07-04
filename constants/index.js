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
    type: "Front-End Web Development",
    imgUrl: img01,
    title: "Dev Overflow",
    descriptionTitle: "Q&A Platform Clone",
    description:
      "Created a replica of StackOverflow focusing on key functionalities such as user authentication, question submission, answer posting, and upvoting. Utilized React Hooks for state management, Next.js for routing and implemented responsive design using Tailwindcss.",
    gitUrl: "https://github.com/briansegs/personal-blog/",
    liveUrl: "https://briansegs.github.io/personal-blog/",
    stack: ["React", "Tailwindcss", "Next.js", "Mongo DB"],
  },
  {
    id: "project-2",
    type: "Front-End Web Development",
    imgUrl: img02,
    title: "Narnia",
    descriptionTitle: "",
    description: "",
    gitUrl: "https://github.com/briansegs/nike/",
    liveUrl: "https://briansegs.github.io/nike/",
    stack: ["React", "Tailwindcss", "Next.js"],
  },
  {
    id: "project-3",
    type: "Front-End Web Development",
    imgUrl: img03,
    title: "HooBank",
    descriptionTitle: "",
    description: "",
    gitUrl: "https://github.com/briansegs/bank_app/",
    liveUrl: "https://briansegs.github.io/bank_app/",
    stack: ["React", "Tailwindcss", "Vite"],
  },
  {
    id: "project-4",
    type: "Front-End Web Development",
    imgUrl: img04,
    title: "Gericht Restaurant",
    descriptionTitle: "",
    description: "",
    gitUrl: "https://github.com/briansegs/gericht-restaurant/",
    liveUrl: "https://briansegs.github.io/gericht-restaurant/",
    stack: ["React", "CSS 3"],
  },
  {
    id: "project-5",
    type: "Front-End Web Development",
    imgUrl: img05,
    title: "GPT-3",
    descriptionTitle: "",
    description: "",
    gitUrl: "https://github.com/briansegs/gpt-3/",
    liveUrl: "https://briansegs.github.io/gpt-3/",
    stack: ["React", "CSS 3"],
  },
];
