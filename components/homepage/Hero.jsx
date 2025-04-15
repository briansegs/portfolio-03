import Link from "next/link";
import ButtonDark from "../ButtonDark";
import DownloadCVBtn from "../DownloadCVBtn";

import Image from "next/image";
import avatar from "../../assets/hero/avatar_03.png";
import bgHero from "../../assets/hero/bg_01.png";
import { heroData } from "@/constants";
import { lazy } from "react";
import Head from "next/head";

const ParticleContainer = lazy(() => import("./ParticleContainer"), {
  ssr: false,
  loading: () => null,
});

const { headingText, headingSubtext, buttonText } = heroData;

const Hero = () => (
  <section className="size-full bg-hero bg-cover bg-no-repeat px-8 sm:px-16">
    {/* Preload Hero Background */}
    <Head>
      <link rel="preload" as="image" href={bgHero} />
    </Head>

    {/* Background Image */}
    <Image
      src={bgHero}
      alt="Hero Background"
      fill
      priority
      placeholder="blur"
      className="-z-10 object-cover"
    />

    {/* Particles */}
    {/* <Suspense
      fallback={
        <div className="absolute inset-0 animate-pulse bg-hero opacity-30" />
      }
    >
      <ParticleContainer />
    </Suspense> */}

    <ParticleContainer />

    <div className="max-container flex min-h-screen w-full items-center">
      {/* Text */}
      <div className="absolute z-0 flex w-[310px] flex-col sm:w-fit">
        <h1 className="ml-0 w-full font-primary text-6xl font-black leading-[55px] tracking-[-3px] text-white sm:ml-[-8px] sm:w-[670px] sm:text-8xl sm:leading-[90px] sm:tracking-[-6px]">
          {headingText}
        </h1>
        <p className="my-7 w-full border-t-2 border-white pt-4 text-2xl tracking-[-0.5px] text-white sm:w-[500px] sm:text-3xl sm:tracking-[-1px]">
          {headingSubtext}
        </p>

        <div className="flex w-fit items-center gap-4">
          <Link href={"/Brian Segers Resume.pdf"} target="_blank" download>
            <DownloadCVBtn dark={false} />
          </Link>

          <Link href={"/contact"}>
            <ButtonDark title={buttonText} />
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="absolute bottom-0 right-40">
        <div className="hidden xl:flex xl:max-w-none">
          <Image
            src={avatar}
            alt="avatar"
            width={650}
            height={720}
            priority
            quality={75}
            className="h-[820px] w-[750px] mix-blend-screen max-[1600px]:h-[720px] max-[1600px]:w-[650px]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
