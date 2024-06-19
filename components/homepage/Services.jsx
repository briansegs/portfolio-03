// logos
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const logos = [
  {
    name: "HTML 5",
    icon: <RiHtml5Fill />,
  },
  {
    name: "CSS 3",
    icon: <RiCss3Fill />,
  },
  {
    name: "Javascript",
    icon: <RiJavascriptFill />,
  },
  {
    name: "React",
    icon: <RiReactjsFill />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
];

const Services = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col items-center gap-20">
        <h3 className="text-6xl tracking-[-2.5px]">My Technologies</h3>

        <div className="flex flex-row gap-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-black px-8 py-4"
            >
              <p className="font-primary text-lg font-bold tracking-[-0.4px]">
                {logo.name}
              </p>
              <div className="text-8xl">{logo.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
