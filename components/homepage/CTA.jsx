import ButtonDark from "../ButtonDark";

const CTA = () => (
  <section className="max-container w-full">
    <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-hero p-8 lg:flex-row">
      <dir className="flex flex-col gap-6">
        <h2 className="whitespace-normal text-center font-primary text-4xl font-black tracking-[-2px] text-white sm:text-6xl sm:tracking-[-3px] lg:max-w-lg lg:whitespace-nowrap lg:text-left">
          Your partner in web development.
        </h2>
        <p className="w-full text-center font-primary text-base font-semibold text-slate-100 lg:w-1/2 lg:text-left lg:text-lg">
          I&apos;m here to help you design and develop websites that engage and
          convert. Contact me to explore how we can work together on your next
          big project.
        </p>
      </dir>

      <div className="whitespace-nowrap">
        <ButtonDark title="Hire Me" />
      </div>
    </div>
  </section>
);

export default CTA;
