import ProjectSection from "@/components/projects/ProjectSection";

const page = () => {
  return (
    <section className="xl:padding-x bg-projects bg-cover bg-right bg-no-repeat">
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
