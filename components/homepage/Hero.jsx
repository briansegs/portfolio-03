"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../constants/particles_config.json";
import ButtonDark from "../ButtonDark";
import avatar from "../../assets/hero/avatar_03.png";

const Hero = () => {
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
    <section className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row">
      <div className="relative flex min-h-screen w-full bg-hero bg-center bg-no-repeat">
        {init && <Particles options={particlesOptions} />}

        <Image
          src={avatar}
          alt="avatar"
          className="absolute bottom-0 left-[5%] right-0 mx-auto w-[95%] object-contain mix-blend-screen"
        />
      </div>

      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="text-[28px] tracking-[-1px] text-red-400">
          Open for work!
        </p>
        <h1 className="hero-h1 mt-10 font-jost">
          Front-End <span className="text-red-400">Web</span> Developer
        </h1>
        <p className=" mb-14 mt-10 w-4/5 border-t-2 border-black pt-10 text-[28px] tracking-[-1px]">
          Communication, design, development, and a wealth of unique
          experiences.
        </p>
        <ButtonDark title={"Hire Me"} />
      </div>
    </section>
  );
};

export default Hero;
