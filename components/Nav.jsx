"use client";
import { useState } from "react";
import Link from "next/link";
import {
  RxCross1,
  RxHamburgerMenu,
  RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { Button } from "./ui/button";
import ButtonSocial from "./ButtonSocial";
import { navLinks, socialLinks } from "@/constants";
import ButtonBase from "./ButtonBase";

const Nav = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleClick = () => {
    if (sideMenu) {
      setSideMenu(false);
      document.body.style.overflow = "auto";
    } else {
      setSideMenu(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <div className="flex items-center gap-4 rounded-lg bg-transparent px-[7px]">
          <Link href={"/"}>
            <Button className=" h-full bg-black px-5 py-[7px] font-primary text-4xl font-extrabold text-white hover:bg-black">
              Brian
              <span className="pl-2 text-primary">.</span>
            </Button>
          </Link>

          {socialLinks.map((social) => (
            <Link target="_blank" href={social.href} key={social.name}>
              <ButtonSocial icon={social.icon} />
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-center max-lg:hidden">
          <div className="flex max-w-max gap-8 rounded-lg bg-transparent p-[7px]">
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

        {sideMenu ? (
          <>
            <div className="absolute inset-0 h-screen w-full bg-slate-950 opacity-75" />
            <div
              onClick={handleClick}
              className="absolute inset-x-[5%] top-9 mx-3 flex-col rounded-lg bg-white shadow-sm"
            >
              <div className="flex cursor-pointer justify-end border-b border-gray-300  p-4 text-3xl">
                <RxCross1 />
              </div>

              <div className="mb-12 mt-8 flex flex-col items-center gap-4">
                {navLinks.map((link) => (
                  <Link href={link.path} key={link.name}>
                    <ButtonBase
                      title={link.name}
                      styles="bg-transparent py-[6px] px-[20px] text-4xl font-black tracking-[-0.7px] text-black hover:bg-secondary"
                    />
                  </Link>
                ))}
              </div>

              <div className="flex justify-center gap-2 border-t border-gray-300 py-4">
                {socialLinks.map((social) => (
                  <Link target="_blank" href={social.href} key={social.name}>
                    <ButtonSocial icon={social.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <button
            onClick={handleClick}
            className="hidden cursor-pointer rounded-lg bg-transparent p-[7px] text-3xl hover:bg-secondary max-lg:block"
          >
            <RxHamburgerMenu />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Nav;
