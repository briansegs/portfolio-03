import ButtonDark from "../ButtonDark";

const Hero = () => {
  return (
    <section className="max-container flex min-h-screen w-full flex-col justify-center gap-10 p-2 xl:flex-row">
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="text-[28px] tracking-[-1px] text-red-400">
          Open for work!
        </p>
        <h1 className="hero-h1 mt-10 font-jost">
          Front-End <span className="text-red-400">Web</span> Developer
        </h1>
        <p className=" mb-14 mt-10 w-4/5 border-t-2 border-black pt-10 text-[28px] tracking-[-1px]">
          Communication, design, development, and a wealth of unique
          experiences.
        </p>
        <ButtonDark title={"Hire Me"} />
      </div>

      <div></div>
    </section>
  );
};

export default Hero;
