"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonBase from "./ButtonBase";
import SideMenu from "./nav/SideMenu";
import SocialLinks from "./SocialLinks";

import { navLinks } from "@/constants";

const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-start  justify-between sm:items-center">
        {/* Logo / Social links */}
        <div
          className={`flex flex-col gap-8 rounded-lg sm:flex-row sm:items-center sm:gap-4 ${pathName !== "/" && "sm:bg-white sm:pr-4 sm:shadow"}`}
        >
          <Link href={"/"}>
            <div>
              <h3 className="py-2 pl-5 font-primary text-4xl font-extrabold text-black max-sm:p-0">
                Brian <span className=" text-red-300">.</span>
              </h3>
            </div>
          </Link>
          <div
            className={`${pathName === "/" ? "flex" : "max-sm:hidden sm:flex"} flex-col gap-8 rounded-lg sm:flex-row sm:items-center sm:gap-4`}
          >
            <SocialLinks />
          </div>
        </div>

        {/* Navigation links */}
        <div
          className={`flex ${pathName === "/" ? "flex-1" : "rounded-md bg-white shadow"} items-center justify-center max-lg:hidden`}
        >
          <div
            className={`flex max-w-max rounded-lg ${pathName === "/" ? "gap-8" : "gap-4 px-4 py-2"}`}
          >
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
        {<SideMenu pathName={pathName} />}
      </nav>
    </header>
  );
};

export default Nav;
