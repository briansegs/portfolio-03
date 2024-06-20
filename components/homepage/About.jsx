import ButtonDark from "../ButtonDark";
import ButtonBase from "../ButtonBase";

const About = () => {
  return (
    <section className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col">
      <div className="flex flex-1 flex-col">
        <h2 className="font-primary text-4xl font-black tracking-[-2px] sm:text-6xl sm:tracking-[-3px] lg:max-w-lg">
          About me
        </h2>
        <p className=" mb-4 mt-6 border-t-2 border-black pt-4 text-3xl tracking-[-1px] lg:max-w-lg">
          Hey there! I’m passionate about crafting digital experiences that come
          alive on the web. As a seasoned 3D Artist turned Software Engineer,
          I’ve danced between pixels and code, blending creativity with logic.
          My journey began in the captivating world of visual art, where I
          sculpted virtual landscapes and breathed life into characters.
          However, the allure of the digital canvas led me to pivot toward the
          dynamic realm of web development.
        </p>
        <p className="mb-10 text-3xl tracking-[-1px] lg:max-w-lg">
          In my most recent role as a Front-end Web Developer on Udacity’s
          Student Experience team, I wove together data and pixels, translating
          designs into interactive web interfaces. My toolkit? A symphony of
          languages and tools:
        </p>

        <div className="flex items-center gap-4">
          <ButtonBase
            title={"Download CV"}
            styles="border-2 border-black bg-white px-[12px] py-[4px] text-lg font-bold tracking-[-0.4px] text-black hover:bg-black hover:text-white"
          />

          <ButtonDark title={"Hire Me"} />
        </div>
      </div>
    </section>
  );
};

export default About;
