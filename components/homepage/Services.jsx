import Logos from "../services/Logos";

const Services = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="mb-10 flex justify-center">
        <h3 className="w-full text-center text-5xl tracking-[-2.5px] sm:w-4/6 sm:text-6xl">
          The modern tools and web technologies I specialize in
        </h3>
      </div>

      {/* logos */}
      <div className="group relative flex justify-start gap-28 overflow-hidden">
        {/* gradient left */}
        <div className="absolute left-0 top-0 z-10 hidden h-full w-64 bg-gradient-to-r from-white to-transparent sm:inline-block" />

        {/* gradient right */}
        <div className="absolute right-0 top-0 z-10 hidden h-full w-64 bg-gradient-to-l from-white to-transparent sm:inline-block" />

        {/* logo slide */}
        <div className=" flex animate-slide gap-28">
          <Logos />
        </div>

        {/* logo slide */}
        <div className=" flex animate-slide gap-28">
          <Logos />
        </div>
      </div>
    </section>
  );
};

export default Services;
