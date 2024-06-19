// logos
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
    hover: "hover:text-[#e34c26]",
  },
  {
    name: "CSS 3",
    icon: <FaCss3Alt />,
    hover: "hover:text-[#264de4]",
  },
  {
    name: "Javascript",
    icon: <RiJavascriptFill />,
    hover: "hover:text-[#f0bd4f]",
  },
  {
    name: "React",
    icon: <RiReactjsFill />,
    hover: "hover:text-[#61DBFB]",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
    hover: "hover:text-[#000000]",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    hover: "hover:text-[#a5f3fc]",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    hover: "hover:text-[#00ED64]",
  },
];

const Services = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col items-center gap-16">
        <h3 className="text-6xl tracking-[-2.5px]">My Technologies</h3>

        <div className="flex flex-row gap-8 ">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-4">
              <p className="font-primary text-lg font-bold tracking-[-0.4px]">
                {logo.name}
              </p>
              <div
                className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-black p-6 opacity-40 hover:opacity-100 ${logo.hover}`}
              >
                <div className={`text-8xl `}>{logo.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
