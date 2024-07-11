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

export const heroData = {
  headingText: "Front-End Web Developer",
  headingSubtext:
    "Hi, my name is Brian Segers I'm passionate about creating beautiful and functional websites. If you're looking for a dedicated front-end engineer, let's connect and bring your vision to life!",
};

export const servicesData = {
  headingText: "The modern tools and web technologies I specialize in",
};

export const aboutData = {
  headingText: "About me",
  paragraph1Part1:
    "Hey there! I'm passionate about crafting digital experiences that come alive on the web. As",
  paragraph1Part1Highlight: "a seasoned 3D Artist turned Software Engineer",
  paragraph1Part2:
    ", I've danced between pixels and code, blending creativity with logic. My journey began in the captivating world of visual art, where I sculpted virtual landscapes and breathed life into characters. However, the allure of the digital canvas led me to pivot toward the dynamic realm of web development.",
  paragraph2Part1: "In",
  paragraph2Part1Highlight:
    "my most recent role as a Front-end Web Developer on Udacity's Student Experience team",
  paragraph2Part2:
    ", I wove together data and pixels, translating designs into interactive web interfaces.",
};

export const projectsData = {
  headingText: "Featured projects",
  chipText: "Front-End Web Development",
  cardHeading: "Stunning designs and User-Friendly Interfaces.",
};

export const ctaData = {
  headingText: "Your partner in web development.",
  subtext:
    "I'm here to help you design and develop websites that engage and convert. Contact me to explore how we can work together on your next big project.",
};

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
    title: "Portfolio",
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
