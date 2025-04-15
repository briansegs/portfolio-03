import ProjectSection from "@/components/projects/ProjectSection";
import projectsHero from "@/assets/projects/bg_06.png";
import Image from "next/image";
import Head from "next/head";

const page = () => {
  return (
    <section className="xl:padding-x relative">
      {/* Preload the background image */}
      <Head>
        <link rel="preload" as="image" href={projectsHero.src} />
      </Head>

      {/* Background image**/}
      <Image
        src={projectsHero}
        alt="Projects Hero"
        fill
        priority
        className="-z-10 object-cover object-right"
      />

      <div className="max-container min-h-screen w-full ">
        <div className="padding flex flex-col items-center">
          <h1 className="pb-8 pt-6 text-6xl tracking-[-2px] text-black max-sm:mt-10 max-sm:text-5xl max-sm:tracking-[-1px]">
            My Projects
          </h1>

          <ProjectSection />
        </div>
      </div>
    </section>
  );
};

export default page;
