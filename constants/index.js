import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { img01, img02, img03, img04, img05 } from '../assets/projects'

export const navLinks = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
]

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/brian-segers-swe/',
    icon: <RxLinkedinLogo />,
    name: 'Linkedin',
  },
  {
    href: 'https://github.com/briansegs',
    icon: <RxGithubLogo />,
    name: 'Github',
  },
]

export const heroData = {
  headingText: 'Web Developer',
  headingSubtext:
    'Hi, my name is Brian Segers. I’m a Web Developer based in Pennsylvania, with a focus on front-end development with React and Next.js.',
  buttonText: 'Hire Me',
}

export const servicesData = {
  headingText: 'The modern tools and web technologies I specialize in',
}

export const aboutData = {
  headingText: 'About me',
  paragraph1Part1: "Hi, I'm",
  paragraph1Part1Highlight: 'Brian Segers',
  paragraph1Part2:
    ', a Software Engineer with a background as a 3D Artist. I’ve combined creativity and technical skill throughout my career, starting with crafting virtual landscapes, characters, and 3D printed products before transitioning to web development.',
  paragraph2Part1: 'In my most recent role as a',
  paragraph2Part1Highlight: " Front-end Web Developer on Udacity's Student Experience team",
  paragraph2Part2:
    ', I turned Figma designs into fully functional, interactive web interfaces. I also work as a freelance web developer, building full-stack applications and enhancing front-end features for existing projects.',
  buttonText: 'Hire Me',
}

export const projectsData = {
  headingText: 'Featured projects',
  chipText: 'Web Development',
  cardHeading: 'Stunning designs and User-Friendly Interfaces.',
  buttonText: 'Projects',
}

export const ctaData = {
  headingText: 'Your partner in web development.',
  subtext:
    "I'm here to help you design and develop websites that engage and convert. Contact me to explore how we can work together on your next big project.",
  buttonText: 'Hire Me',
}

export const projects = [
  {
    id: 'project-1',
    type: 'Full-Stack Web Development',
    imgUrl: img01,
    title: 'Dev Collective',
    descriptionTitle: 'Q&A Platform',
    description:
      'Created a StackOverflow inspired application focusing on key functionalities such as user authentication, question submission, answer posting, and upvoting. Utilized React Hooks for state management, Next.js for routing and implemented responsive design using Tailwindcss.',
    gitUrl: 'https://github.com/briansegs/StackFlow',
    liveUrl: 'https://stack-flow-ashy.vercel.app/',
    stack: ['React', 'Tailwindcss', 'Next.js', 'Mongo DB'],
  },
  {
    id: 'project-2',
    type: 'Front-End Web Development',
    imgUrl: img02,
    title: 'Portfolio',
    descriptionTitle: 'Personal Front-end Developer Portfolio',
    description:
      "Designed and developed a fully responsive portfolio website using React.js, Next.js, and Tailwind CSS. The project features a striking and interactive hero section utilizing React Particles, a skills section with smooth animations and transitions, and a stunning featured-projects section leveraging Framer Motion for complex animations. It includes a contact form integrated with React Email and Nodemailer, and a projects page that beautifully displays my work on a card slider. Key skills demonstrated include React state management, Tailwind CSS for styling, Next.js for routing, and Photoshop for all of the website's artwork.",
    gitUrl: 'https://github.com/briansegs/portfolio-03/',
    liveUrl: 'https://briansegers-swe.com',
    stack: ['React', 'Tailwindcss', 'Next.js'],
  },
  {
    id: 'project-3',
    type: 'Front-End Web Development',
    imgUrl: img03,
    title: 'HooBank',
    descriptionTitle: 'Modern Business Landing Page',
    description:
      'Created a fully responsive business landing page using React.js, Vite and Tailwind CSS. This project features a stunning opening section with high-quality images and gradients, business statistics, feature sections with call-to-action buttons, and testimonials. Development covered the complete process from transforming a Figma design into a functional website to deployment. Key skills demonstrated include React functional components, Tailwind CSS for styling, CSS Flexbox for layout, and media queries for responsiveness across all devices.',
    gitUrl: 'https://github.com/briansegs/bank_app/',
    liveUrl: 'https://briansegs.github.io/bank_app/',
    stack: ['React', 'Tailwindcss', 'Vite'],
  },
  {
    id: 'project-4',
    type: 'Front-End Web Development',
    imgUrl: img04,
    title: 'Gericht Restaurant',
    descriptionTitle: 'Fine Dining Restaurant Landing Page',
    description:
      "Developed a fully responsive fine dining restaurant landing page using React.js, transforming a Figma design into a functional website. The project includes a dynamic navigation bar, custom 'About Us' section, today's specials menu, chef's message, full-screen video feature, awards showcase, photo gallery integrated with Instagram, and a comprehensive 'Find Us' section. Utilized CSS Flex and Grid for layout, BEM methodology for CSS organization, and media queries for responsiveness across all devices. The project also features complex gradients and a custom footer with newsletter subscription and contact details.",
    gitUrl: 'https://github.com/briansegs/gericht-restaurant/',
    liveUrl: 'https://briansegs.github.io/gericht-restaurant/',
    stack: ['React', 'CSS 3'],
  },
  {
    id: 'project-5',
    type: 'Front-End Web Development',
    imgUrl: img05,
    title: 'Course Portfolio',
    descriptionTitle: 'Documenting My Front-End Dev Journey',
    description:
      "This site, developed in React, is a living portfolio showcasing my progress, challenges, and successes as I deepen my understanding of Front-End development. Throughout the course, I've applied what I've learned, and I've also explored topics beyond the curriculum, such as routing and tools like Tailwindcss. Here, you'll find examples of labs, projects, and practice exercises, all demonstrating key concepts and techniques.",
    gitUrl: 'https://github.com/briansegs/meta-front-end_react-app',
    liveUrl: 'https://briansegs.github.io/meta-front-end_react-app/',
    stack: ['React', 'Tailwindcss'],
  },
]
