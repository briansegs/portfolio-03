import ProjectSection from "@/components/projects/ProjectSection";
import projectsHero from "@/assets/projects/bgProjects.webp";
import Image from "next/image";

const page = () => {
  return (
    <section className="xl:padding-x relative">
      {/* Background image**/}
      <Image
        src={projectsHero}
        alt="Projects Hero"
        fill
        priority
        placeholder="blur"
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
