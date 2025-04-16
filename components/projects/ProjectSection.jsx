"use client";

import { useState } from "react";

import RoundArrowButton from "@/components/projects/RoundArrowButton";
import ProjectButton from "./ProjectButton";
import Chip from "../Chip";

import { PiArrowFatLeftFill, PiArrowFatRightFill } from "react-icons/pi";
import { CgLinear } from "react-icons/cg";
import { RxGithubLogo } from "react-icons/rx";
import { LuMonitor } from "react-icons/lu";

import { projects } from "@/constants";
import { ImageMedia } from "../ImageMedia";

const ProjectCard = () => {
  const [project, setProject] = useState(projects[0]);
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setProject(
      projects[index - 1] ? projects[index - 1] : projects[projects.length - 1]
    );
    setIndex(projects[index - 1] ? index - 1 : projects.length - 1);
    scrollToTop();
  };

  const handleRightClick = () => {
    setProject(projects[index + 1] ? projects[index + 1] : projects[0]);
    setIndex(projects[index + 1] ? index + 1 : 0);
    scrollToTop();
  };

  const scrollToTop = () => {
    const paragraph = document.getElementById("project-description");
    paragraph.scrollTop = 0;
  };

  return (
    <>
      {/* Projects Menu */}
      <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
        {projects.map((p, idx) => (
          <p
            key={p.id}
            className={`cursor-pointer font-primary text-xl font-bold tracking-[-0.4px] duration-500 ease-out ${p.id === project.id ? "text-black" : "text-black/40"} hover:text-black`}
            onClick={() => {
              setProject(projects[idx]);
              setIndex(idx);
              scrollToTop();
            }}
          >
            {p.title}
          </p>
        ))}
      </div>

      {/* Left Arrow Button */}
      <div className="mt-7 flex w-full items-center justify-between">
        <RoundArrowButton
          icon={<PiArrowFatLeftFill />}
          onClick={() => handleLeftClick()}
        />

        {/* Project Card */}
        <div className="flex min-h-[598px] w-3/4 flex-col-reverse gap-8 rounded-md bg-white p-6 max-sm:w-full xl:flex-row ">
          {/* Left Text */}
          <div className="flex w-full flex-col justify-between gap-6 xl:w-2/5">
            <div className="flex flex-col justify-between gap-6">
              {/* Project Type Chip */}
              <Chip
                chipStyles="bg-slate-300"
                textStyles="text-black text-base sm:text-lg"
                text={project.type}
                icon={<CgLinear />}
              />

              {/* Project Title */}
              <div className="mb-8">
                <p className="text-5xl tracking-[-1px]">{project.title}</p>
              </div>

              <div className="min-h-[228px]">
                {/* Project Description Title */}
                <p className="mb-2 font-primary text-lg font-extrabold tracking-[-0.4px]">
                  {project.descriptionTitle}
                </p>

                {/* Project Description */}
                <p
                  id="project-description"
                  className="custom-scrollbar h-[168px] overflow-y-scroll pr-1 font-primary text-lg leading-6 tracking-[-0.4px]"
                >
                  {project.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              {/* Project Tech Stack */}
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

              {/* Project Links */}
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

          {/* Right Image */}
          <div className="w-full xl:w-3/5">
            <ImageMedia
              src={project.imgUrl}
              alt={project.title}
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Right Arrow Button */}
        <RoundArrowButton
          icon={<PiArrowFatRightFill />}
          onClick={() => handleRightClick()}
        />
      </div>
    </>
  );
};

export default ProjectCard;
