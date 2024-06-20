import Logos from "../services/Logos";

const Services = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="mb-12 flex justify-center">
        <h3 className="w-4/6 text-center text-6xl tracking-[-2.5px]">
          The modern tools and web technologies I specialize in
        </h3>
      </div>

      {/* logos */}
      <div className="group relative flex justify-start gap-28 overflow-hidden">
        {/* gradient left */}
        <div className="absolute left-0 top-0 z-10 h-full w-64 bg-gradient-to-r from-white to-transparent" />

        {/* gradient right */}
        <div className="absolute right-0 top-0 z-10 h-full w-64 bg-gradient-to-l from-white to-transparent" />

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
