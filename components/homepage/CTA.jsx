import Link from "next/link";
import ButtonDark from "../ButtonDark";
import { ctaData } from "@/constants";

const { headingText, subtext, buttonText } = ctaData;

const CTA = () => (
  <section className="max-container w-full">
    <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-hero p-8 xl:flex-row">
      <dir className="flex flex-col gap-6">
        <h2 className="whitespace-normal text-center font-primary text-4xl font-black tracking-[-2px] text-white sm:text-6xl sm:tracking-[-3px] xl:max-w-lg xl:whitespace-nowrap xl:text-left">
          {headingText}
        </h2>
        <p className="w-full text-center font-primary text-base font-semibold text-slate-100 xl:w-1/2 xl:text-left xl:text-lg">
          {subtext}
        </p>
      </dir>

      <div className="whitespace-nowrap">
        <Link href={"/contact"}>
          <ButtonDark title={buttonText} />
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;
