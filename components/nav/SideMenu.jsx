"use client";

import { useState } from "react";
import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navLinks, socialLinks } from "@/constants";
import ButtonBase from "../ButtonBase";
import ButtonSocial from "../ButtonSocial";

const SideMenu = ({ pathName }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    if (showMenu) {
      setShowMenu(false);
      document.body.style.overflow = "auto";
    } else {
      setShowMenu(true);
      document.body.style.overflow = "hidden";
    }
  };

  return showMenu ? (
    <>
      {/* Background */}
      <div className="absolute inset-0 h-screen w-full bg-slate-950 opacity-75" />

      {/* Menu */}
      <div className="absolute inset-x-[5%] top-9 mx-3 flex-col rounded-lg bg-white shadow-sm">
        <div className="flex justify-end border-b border-gray-300 p-4 text-3xl">
          <RxCross1 className="cursor-pointer" onClick={handleClick} />
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

        <div className="flex justify-center gap-8 border-t border-gray-300 py-4">
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
      className={`hidden cursor-pointer rounded-md p-[7px] text-3xl  max-lg:block sm:mt-0 ${pathName !== "/" && " sm:bg-white sm:p-2 sm:shadow"}`}
    >
      <div className="sm:p-[7px] sm:hover:bg-secondary">
        <RxHamburgerMenu />
      </div>
    </button>
  );
};

export default SideMenu;
