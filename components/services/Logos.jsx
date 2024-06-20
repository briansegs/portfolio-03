import {
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const logos = [
  {
    name: "HTML 5",
    icon: <RiHtml5Fill />,
    color: "text-[#e34c26]",
  },
  {
    name: "CSS 3",
    icon: <FaCss3Alt />,
    color: "text-[#264de4]",
  },
  {
    name: "Javascript",
    icon: <RiJavascriptFill />,
    color: "text-[#f0bd4f]",
  },
  {
    name: "React",
    icon: <RiReactjsFill />,
    color: "text-[#61DBFB]",
    animate: "animate-[spin_20s_linear_infinite]",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    color: "text-[#000000]",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    color: "text-[#a5f3fc]",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-[#00ED64]",
  },
];

const Logos = () =>
  logos.map((logo) => (
    <div key={logo.name} className="flex flex-col items-center gap-8">
      <p className="font-primary text-lg font-bold tracking-[-0.4px]">
        {logo.name}
      </p>

      <div
        className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-black p-6 opacity-100 hover:opacity-100 sm:opacity-30 ${logo.color}`}
      >
        <div
          className={`text-8xl ${logo.animate && logo.animate} will-change-contents`}
        >
          {logo.icon}
        </div>
      </div>
    </div>
  ));

export default Logos;
