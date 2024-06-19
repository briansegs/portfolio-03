"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../constants/particles_config.json";
import ButtonDark from "../ButtonDark";
import avatar from "../../assets/hero/avatar_03.png";
import ButtonBase from "../ButtonBase";

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
      {/* Left image */}
      <div className="relative flex min-h-screen w-full bg-hero bg-center bg-no-repeat">
        {init && <Particles options={particlesOptions} />}

        <Image
          src={avatar}
          alt="avatar"
          className="absolute bottom-0 left-[5%] right-0 mx-auto w-[95%] object-contain mix-blend-screen xl:h-[95%]"
        />
      </div>

      {/* Right text */}
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center xl:mt-14 xl:w-3/5">
        <p className="text-2xl font-medium tracking-[-1px] text-primary">
          Open for work!
        </p>
        <h1 className="mt-7 font-primary text-6xl font-black tracking-[-4px] sm:text-8xl sm:leading-[90px] sm:tracking-[-6px]">
          Front-End <span className="">Web</span> Developer
        </h1>
        <p className=" mb-8 mt-10 w-4/5 border-t-2 border-black pt-4 text-2xl tracking-[-1px]">
          Hi, My name is <span className="bg-yellow-100">Brian Segers</span>. I
          merge function, beauty, and smart design to create outstanding
          products.
        </p>

        <div className="flex items-center gap-4">
          <ButtonBase
            title={"Download CV"}
            styles="border-2 border-black bg-white px-[12px] py-[4px] text-lg font-bold tracking-[-0.4px] text-black hover:bg-black hover:text-white"
          />

          <ButtonDark title={"Hire Me"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
