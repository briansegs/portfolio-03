"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import { ExploreCard } from "../projects";
import { projects } from "@/constants";
import ButtonDark from "../ButtonDark";
import { CgLinear } from "react-icons/cg";

const Projects = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className="flex flex-col items-center justify-center">
      <h3 className="mb-16 w-full text-center text-5xl tracking-[-2px] text-white sm:w-4/6 sm:text-7xl">
        Featured projects
      </h3>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" max-container flex w-full flex-col rounded-md bg-white p-6"
      >
        {/* ^ remove mx-auto and 2xl:max-w-screen-xl. add max-container to make container match the rest of the site */}

        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex w-fit items-center gap-2 rounded-md bg-secondary px-[12px] py-[6px]">
              <CgLinear />
              <p className=" font-primary text-lg font-bold tracking-[-0.4px] text-black">
                Front-End Web Development
              </p>
            </div>

            <h3 className="text-5xl tracking-[-2px] sm:text-6xl">
              Stunning designs and User-Friendly Interfaces.
            </h3>
          </div>

          <div className="flex h-[116px] flex-col justify-end whitespace-nowrap">
            <ButtonDark title={"Hire Me"} />
          </div>
        </div>

        <div className="mt-8 flex min-h-[70vh] flex-col gap-5 lg:flex-row">
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
