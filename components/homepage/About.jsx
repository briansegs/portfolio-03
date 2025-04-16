import ButtonDark from "../ButtonDark";
import Link from "next/link";
import aboutImg from "../../assets/about/about_img.webp";
import SocialLinks from "../SocialLinks";
import DownloadCVBtn from "../DownloadCVBtn";
import { aboutData } from "@/constants";
import { ImageMedia } from "../ImageMedia";

const {
  headingText,
  paragraph1Part1,
  paragraph1Part1Highlight,
  paragraph1Part2,
  paragraph2Part1,
  paragraph2Part1Highlight,
  paragraph2Part2,
  buttonText,
} = aboutData;

const About = () => {
  return (
    <section className="max-container flex w-full items-center justify-between gap-10 max-xl:flex-col">
      <div className="flex flex-1 flex-col">
        <h2 className="font-primary text-4xl font-black tracking-[-2px] sm:text-6xl sm:tracking-[-3px] xl:max-w-lg">
          {headingText}
        </h2>
        <p className=" mb-4 mt-6 border-t-2 border-black pt-4 text-3xl tracking-[-1px] xl:max-w-lg">
          {paragraph1Part1}{" "}
          <span className="bg-yellow-100">{paragraph1Part1Highlight}</span>
          {paragraph1Part2}
        </p>
        <p className="mb-10 text-3xl tracking-[-1px] xl:max-w-lg">
          {paragraph2Part1}{" "}
          <span className="bg-yellow-100">{paragraph2Part1Highlight}</span>
          {paragraph2Part2}
        </p>

        <div className="flex items-center gap-4">
          <Link href={"/Brian Segers Resume.pdf"} target="_blank" download>
            <DownloadCVBtn dark={true} />
          </Link>

          <Link href={"/contact"}>
            <ButtonDark title={buttonText} />
          </Link>
        </div>
        <div className="mt-6 flex gap-4">
          <SocialLinks />
        </div>
      </div>

      <div className="flex h-[930px] w-full flex-1 items-center justify-center rounded-md bg-about bg-auto bg-no-repeat max-xl:my-8">
        <div className="mx-2 my-8 rounded-md bg-white/70 p-4">
          <ImageMedia
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
