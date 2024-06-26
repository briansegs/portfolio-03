import ProjectSection from "@/components/projects/ProjectSection";

const page = () => {
  return (
    <section className="xl:padding-x bg-projects bg-auto bg-top bg-no-repeat">
      <div className="max-container min-h-screen w-full ">
        <div className="padding flex flex-col items-center">
          <h1 className="py-8 text-6xl tracking-[-2px] text-white max-sm:mt-8 max-sm:text-5xl max-sm:tracking-[-1px]">
            My Projects
          </h1>

          <ProjectSection />
        </div>
      </div>
    </section>
  );
};

export default page;
