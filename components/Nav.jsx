import Link from "next/link";
import ButtonBase from "./ButtonBase";
import SideMenu from "./nav/SideMenu";
import SocialLinks from "./SocialLinks";

import { navLinks } from "@/constants";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        {/* Logo / Social links */}
        <div
          className={`flex items-center gap-4 rounded-lg bg-white px-4 py-2 shadow`}
        >
          <Link href={"/"}>
            <div>
              <h3 className="font-primary text-4xl font-extrabold text-black">
                Brian <span className=" text-red-300">.</span>
              </h3>
            </div>
          </Link>
          <div className="hidden items-center gap-4 sm:flex">
            <SocialLinks />
          </div>
        </div>

        {/* Navigation links */}
        <div className="hidden items-center justify-center gap-4 rounded-md bg-white px-4 py-2 shadow lg:flex">
          <div className="flex gap-6 rounded-lg">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <ButtonBase
                  title={link.name}
                  styles="px-[12px] py-[6px] tracking-[-0.4px] text-lg bg-transparent text-black hover:bg-secondary font-bold"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Side burger menu overlay  */}
        {<SideMenu />}
      </nav>
    </header>
  );
};

export default Nav;
