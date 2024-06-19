"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navLinks, socialLinks } from "@/constants";
import ButtonBase from "../ButtonBase";
import ButtonSocial from "../ButtonSocial";

const SideMenu = () => {
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

  return sideMenu ? (
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
      className="mt-2 hidden cursor-pointer rounded-lg bg-transparent p-[7px] text-3xl hover:bg-secondary max-lg:block sm:mt-0"
    >
      <RxHamburgerMenu />
    </button>
  );
};

export default SideMenu;
