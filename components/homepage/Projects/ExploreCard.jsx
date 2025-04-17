"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/motion";
import { RxGithubLogo } from "react-icons/rx";
import { LuMonitor } from "react-icons/lu";
import Chip from "../../Chip";
import ProjectButton from "../../projects/ProjectButton";
import { ImageMedia } from "../../ImageMedia";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  stack,
  gitUrl,
  liveUrl,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2]  cursor-pointer lg:flex-[0.5]"} flex h-[700px] min-w-[170px] items-center transition-[flex] duration-700 ease-out xl:items-end`}
    onClick={() => handleClick(id)}
  >
    <ImageMedia
      src={imgUrl}
      alt={title}
      blur
      className="absolute size-full rounded-md object-cover"
    />
    {active !== id ? (
      <div className="z-0 flex h-2/5 w-full items-center justify-center rounded-b-md xl:bg-gradient-to-t xl:from-black/90 xl:to-transparent">
        <h3 className="absolute z-0 font-primary text-base font-bold tracking-[-0.4px] text-white sm:text-2xl xl:bottom-20 xl:origin-[0,0] xl:-rotate-90">
          {title}
        </h3>
      </div>
    ) : (
      <div className="absolute bottom-0 w-full flex-col justify-start rounded-b-md bg-[rgba(0,0,0,0.9)] p-4 sm:p-8">
        <div className="mb-0 flex gap-4 lg:mb-4">
          <ProjectButton
            href={gitUrl}
            icon={<RxGithubLogo />}
            styles="bg-white/20 backdrop-blur-sm hover:bg-white/30"
          />

          <ProjectButton
            href={liveUrl}
            icon={<LuMonitor />}
            styles="bg-white/20 backdrop-blur-sm hover:bg-white/30"
          />
        </div>

        <div className="hidden flex-wrap gap-2 whitespace-nowrap lg:flex">
          {stack.map((tech, index) => (
            <Chip
              key={tech + index}
              chipStyles="bg-secondary"
              textStyles="text-black"
              text={tech}
            />
          ))}
        </div>
        <h2 className="hidden text-xl font-bold text-white sm:mt-4 sm:text-3xl lg:block">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
