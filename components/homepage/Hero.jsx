"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../constants/particles_config.json";
import ButtonDark from "../ButtonDark";
import avatar from "../../assets/hero/avatar_03.png";
import { Button } from "../ui/button";

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

      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center xl:w-2/5">
        <p className="text-2xl font-medium tracking-[-1px] text-primary">
          Open for work!
        </p>
        <h1 className="mt-7 font-primary text-8xl font-black leading-[95px] tracking-tighter">
          Front-End <span className="text-primary">Web</span> Developer
        </h1>
        <p className=" mb-10 mt-12 w-4/5 border-t-2 border-black pt-5 text-2xl tracking-[-1px]">
          Communication, design, development, and a wealth of unique
          experiences.
        </p>

        <div className="flex items-center gap-2">
          <Button className="border-2 border-black bg-white px-3 py-[10px] font-primary text-lg font-bold capitalize tracking-[-0.4px] text-black hover:bg-black hover:text-white">
            Download CV
          </Button>

          <ButtonDark title={"Hire Me"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
