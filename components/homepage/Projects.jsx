"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import { ExploreCard, TitleText, TypingText } from "../projects";
import { img01, img02, img03, img04, img05 } from "../../assets/projects";

const data = [
  {
    id: "world-1",
    imgUrl: img01,
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: img02,
    title: "Narnia",
  },
  {
    id: "world-3",
    imgUrl: img03,
    title: "Middle Earth",
  },
  {
    id: "world-4",
    imgUrl: img04,
    title: "Westeros",
  },
  {
    id: "world-5",
    imgUrl: img05,
    title: "Pandora",
  },
];

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

        <TypingText
          title={"The latest and greatest"}
          textStyles={
            "font-primary text-xl font-bold tracking-[-0.4px] mt-4 text-center"
          }
        />

        <div className="mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {data.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
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
