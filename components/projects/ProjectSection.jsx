"use client";

import { useState } from "react";
import { projects } from "@/constants";
import Image from "next/image";
import RoundArrowButton from "@/components/projects/RoundArrowButton";
import { PiArrowFatLeftFill, PiArrowFatRightFill } from "react-icons/pi";
import { CgLinear } from "react-icons/cg";
import Chip from "../Chip";
import ProjectButton from "./ProjectButton";
import { RxGithubLogo } from "react-icons/rx";
import { LuMonitor } from "react-icons/lu";

const ProjectCard = () => {
  const [project, setProject] = useState(projects[0]);
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setProject(
      projects[index - 1] ? projects[index - 1] : projects[projects.length - 1]
    );
    setIndex(projects[index - 1] ? index - 1 : projects.length - 1);
  };

  const handleRightClick = () => {
    setProject(projects[index + 1] ? projects[index + 1] : projects[0]);
    setIndex(projects[index + 1] ? index + 1 : 0);
  };

  return (
    <>
      <div className="flex gap-4">
        {projects.map((p, idx) => (
          <p
            key={p.id}
            className={`cursor-pointer font-primary text-xl font-bold tracking-[-0.4px] ${p.id === project.id ? "text-white" : "text-white/40"} hover:text-white`}
            onClick={() => {
              setProject(projects[idx]);
              setIndex(idx);
            }}
          >
            {p.title}
          </p>
        ))}
      </div>

      <div className="mt-7 flex w-full items-center justify-between">
        <RoundArrowButton
          icon={<PiArrowFatLeftFill />}
          onClick={() => handleLeftClick()}
        />

        <div className="flex min-h-[598px] w-3/4 gap-8 rounded-md bg-white p-6 ">
          <div className="flex w-2/5 flex-col justify-between gap-6">
            <div className="flex flex-col justify-between gap-6">
              <Chip
                chipStyles="bg-slate-300"
                textStyles="text-black text-base sm:text-lg"
                text="Front-End Web Development"
                icon={<CgLinear />}
              />
              <div className="mb-8">
                <p className="text-5xl tracking-[-1px]">{project.title}</p>
              </div>

              <div className="h-[228px]">
                <p className="mb-2 font-primary text-lg font-extrabold tracking-[-0.4px]">
                  {project.descriptionTitle}
                </p>
                <p className="font-primary text-lg leading-6 tracking-[-0.4px]">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="flex min-h-20 flex-wrap items-end gap-2 whitespace-nowrap">
                {project.stack.map((tech, index) => (
                  <Chip
                    key={tech + index}
                    chipStyles="bg-secondary h-fit"
                    textStyles="text-black"
                    text={tech}
                  />
                ))}
              </div>
              <div className="flex gap-4 border-t-2 border-black pt-4">
                <div className="">
                  <ProjectButton
                    href={project.gitUrl}
                    icon={<RxGithubLogo />}
                    styles="bg-black/75 backdrop-blur-sm hover:bg-black/50"
                  />
                </div>
                <div className="">
                  <ProjectButton
                    href={project.liveUrl}
                    icon={<LuMonitor />}
                    styles="bg-black/75 backdrop-blur-sm hover:bg-black/50"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-3/5">
            <Image
              src={project.imgUrl}
              alt={project.title}
              className="size-full object-cover"
            />
          </div>
        </div>

        <RoundArrowButton
          icon={<PiArrowFatRightFill />}
          onClick={() => handleRightClick()}
        />
      </div>
    </>
  );
};

export default ProjectCard;
