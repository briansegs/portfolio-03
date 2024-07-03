"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../../constants/particles_config_02";

const Grid1 = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div className="size-full bg-grid1 bg-contain bg-no-repeat">
      {init && <Particles className="h-full" options={particlesOptions} />}
    </div>
  );
};
export default Grid1;
