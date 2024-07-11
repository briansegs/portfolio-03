import Logos from "../services/Logos";
import { servicesData } from "@/constants";

const { headingText } = servicesData;

const Services = () => (
  <section className="max-container max-sm:my-12">
    <div className="mb-14 flex justify-center">
      <h3 className="w-full text-center text-5xl tracking-[-2.5px] sm:w-4/6 sm:text-6xl">
        {headingText}
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

export default Services;
