import ButtonDark from "../ButtonDark";
import Image from "next/image";
import Link from "next/link";
import aboutImg from "../../assets/about/about_img.png";
import SocialLinks from "../SocialLinks";
import DownloadCVBtn from "../DownloadCVBtn";

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
          <Link href={"/Brian Segers Resume.pdf"} target="_blank" download>
            <DownloadCVBtn dark={true} />
          </Link>

          <Link href={"/contact"}>
            <ButtonDark title={"Hire Me"} />
          </Link>
        </div>
        <div className="mt-6 flex gap-4">
          <SocialLinks />
        </div>
      </div>

      <div className="flex h-[930px] w-full flex-1 items-center justify-center rounded-md bg-about bg-auto bg-no-repeat max-xl:my-8">
        <div className="mx-2 my-8 rounded-md bg-white/70 p-4">
          <Image
            src={aboutImg}
            alt="about-image"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
