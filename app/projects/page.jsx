import projectsHero from "@/assets/projects/bgProjects.webp";
import { ImageMedia } from "@/components/ImageMedia";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const ProjectSection = dynamic(
  () => import("@/components/projects/ProjectSection"),
  {
    ssr: false,
    loading: () => (
      <>
        <div className="flex gap-4 max-sm:flex-col max-sm:items-center">
          {[1, 2, 3, 4, 5].map((key, index) => (
            <Skeleton key={key + index} className="h-8 w-36" />
          ))}
        </div>

        <div className="mt-7 flex w-full items-center justify-between">
          <Skeleton className="size-14 rounded-full max-sm:hidden" />

          <Skeleton className="h-[646px] w-3/4 rounded-md  max-sm:w-full" />

          <Skeleton className="size-14 rounded-full max-sm:hidden" />
        </div>
      </>
    ),
  }
);

const page = () => {
  return (
    <section className="xl:padding-x relative">
      {/* Background image**/}
      <ImageMedia
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
