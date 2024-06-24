import Link from "next/link";
import ButtonBase from "./ButtonBase";
import SocialLinks from "./SocialLinks";

const Footer = () => (
  <section className="padding">
    <div className="max-container mb-4 flex justify-center pl-[7px] lg:justify-start">
      <Link href={"/"}>
        <ButtonBase
          title={"Brian"}
          styles="font-primary text-4xl font-extrabold text-black"
        >
          <span className="pl-2 text-primary">.</span>
        </ButtonBase>
      </Link>
    </div>

    <div className="max-container flex flex-col items-center justify-between gap-4 border-t-2 border-black px-[7px] pt-4 lg:flex-row">
      <p className="max-sm:text-center">
        Copyright ©2024 Brian Segers. All Rights Reserved.
      </p>

      <div className="flex items-center gap-4">
        <SocialLinks />
      </div>
    </div>
  </section>
);

export default Footer;
