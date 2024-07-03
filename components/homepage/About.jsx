import ButtonDark from "../ButtonDark";
import ButtonBase from "../ButtonBase";
import Image from "next/image";
import Link from "next/link";
import aboutImg from "../../assets/about/about-img-04.png";
import SocialLinks from "../SocialLinks";

const About = () => {
  return (
    <section className="max-container flex w-full items-center justify-between gap-10 max-xl:flex-col">
      <div className="flex flex-1 flex-col">
        <h2 className="font-primary text-4xl font-black tracking-[-2px] sm:text-6xl sm:tracking-[-3px] xl:max-w-lg">
          About me
        </h2>
        <p className=" mb-4 mt-6 border-t-2 border-black pt-4 text-3xl tracking-[-1px] xl:max-w-lg">
          Hey there! I&#39;m passionate about crafting digital experiences that
          come alive on the web. As{" "}
          <span className="bg-yellow-100">
            a seasoned 3D Artist turned Software Engineer
          </span>
          , I&#39;ve danced between pixels and code, blending creativity with
          logic. My journey began in the captivating world of visual art, where
          I sculpted virtual landscapes and breathed life into characters.
          However, the allure of the digital canvas led me to pivot toward the
          dynamic realm of web development.
        </p>
        <p className="mb-10 text-3xl tracking-[-1px] xl:max-w-lg">
          In{" "}
          <span className="bg-yellow-100">
            my most recent role as a Front-end Web Developer on Udacity&#39;s
            Student Experience team
          </span>
          , I wove together data and pixels, translating designs into
          interactive web interfaces.
        </p>

        <div className="flex items-center gap-4">
          <ButtonBase
            title={"Download CV"}
            styles="border-2 border-black bg-white px-[12px] py-[4px] text-lg font-bold tracking-[-0.4px] text-black hover:bg-black hover:text-white"
          />

          <Link href={"/contact"}>
            <ButtonDark title={"Hire Me"} />
          </Link>
        </div>
        <div className="mt-6 flex gap-4">
          <SocialLinks />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center max-xl:my-8">
        <Image
          src={aboutImg}
          alt="about-image"
          className="rounded-md object-contain"
        />
      </div>
    </section>
  );
};

export default About;
