"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import ExploreCard from "../projects/ExploreCard";
import { projects, projectsData } from "@/constants";
import ButtonDark from "../ButtonDark";
import { CgLinear } from "react-icons/cg";
import Chip from "../Chip";

const { headingText, chipText, cardHeading } = projectsData;

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <section className="max-container flex flex-col items-center justify-center">
      <h3 className="mb-16 w-full text-center text-5xl tracking-[-2px] text-white sm:w-4/6 sm:text-6xl lg:text-7xl">
        {headingText}
      </h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex w-full flex-col rounded-md bg-white p-6"
      >
        <div className="flex w-full items-start justify-between gap-4 max-sm:mb-2 max-sm:flex-col sm:items-center">
          <div className="flex flex-col gap-4">
            <Chip
              chipStyles="bg-slate-300"
              textStyles="text-black text-base sm:text-lg"
              text={chipText}
              icon={<CgLinear />}
            />

            <h3 className="text-4xl tracking-[-2px] sm:text-5xl lg:text-6xl">
              {cardHeading}
            </h3>
          </div>

          <div className="flex h-full flex-col justify-end whitespace-nowrap sm:h-[116px]">
            <Link href={"/projects"}>
              <ButtonDark title={"Projects"} />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex min-h-[70vh] flex-col gap-5 xl:flex-row">
          {projects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
