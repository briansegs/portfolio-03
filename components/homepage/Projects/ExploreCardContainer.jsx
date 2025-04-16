"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";
import ExploreCard from "./ExploreCard";
import { projects } from "@/constants";

const ExploreCardContainer = () => {
  const [active, setActive] = useState("project-1");

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-8 flex min-h-[70vh] flex-col gap-5 xl:flex-row"
    >
      {projects.map((project, index) => (
        <ExploreCard
          key={project.id}
          {...project}
          index={index}
          active={active}
          handleClick={setActive}
        />
      ))}
    </motion.div>
  );
};

export default ExploreCardContainer;
