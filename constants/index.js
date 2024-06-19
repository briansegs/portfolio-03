import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

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
