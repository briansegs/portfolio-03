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
    animate: "animate-[spin_20s_linear_infinite]",
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

const Logo = () =>
  logos.map((logo) => (
    <div key={logo.name} className="flex flex-col items-center gap-8">
      <p className="font-primary text-lg font-bold tracking-[-0.4px]">
        {logo.name}
      </p>

      <div
        className={`flex flex-col items-center justify-center gap-2 rounded-lg border border-black p-6 opacity-30 hover:opacity-100 ${logo.hover}`}
      >
        <div
          className={`text-8xl ${logo.animate && logo.animate} will-change-contents`}
        >
          {logo.icon}
        </div>
      </div>
    </div>
  ));

const Services = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="mb-12 flex justify-center">
        <h3 className="w-4/6 text-center text-6xl tracking-[-2.5px]">
          The modern tools and web technologies I specialize in
        </h3>
      </div>

      {/* logos */}
      <div className="group relative flex justify-start gap-28 overflow-hidden">
        {/* gradient left */}
        <div className="absolute left-0 top-0 z-10 h-full w-64 bg-gradient-to-r from-white to-transparent" />

        {/* gradient right */}
        <div className="absolute right-0 top-0 z-10 h-full w-64 bg-gradient-to-l from-white to-transparent" />

        {/* logo slide */}
        <div className=" flex animate-slide gap-28">
          <Logo />
        </div>

        {/* logo slide */}
        <div className=" flex animate-slide gap-28">
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default Services;
