"use client";

import Particles from "@tsparticles/react";
import particlesOptions from "@/constants/particles_config_02";

const Grid1 = () => {
  return (
    <Particles
      className="left-0 top-0 z-0 m-0 size-full p-0"
      options={particlesOptions}
    />
  );
};
export default Grid1;
