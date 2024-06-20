import Link from "next/link";
import ButtonSocial from "./ButtonSocial";
import { navLinks, socialLinks } from "@/constants";
import ButtonBase from "./ButtonBase";
import SideMenu from "./nav/SideMenu";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-start  justify-between sm:items-center">
        {/* Logo / Social links */}
        <div className="flex flex-col gap-8 rounded-lg bg-transparent px-[7px] sm:flex-row sm:items-center sm:gap-4">
          <Link href={"/"}>
            <ButtonBase
              title={"Brian"}
              styles=" h-full bg-transparent pl-5 py-[7px] font-primary text-4xl font-extrabold text-black"
            >
              <span className="pl-2 text-yellow-100">.</span>
            </ButtonBase>
          </Link>

          {socialLinks.map((social) => (
            <Link target="_blank" href={social.href} key={social.name}>
              <ButtonSocial icon={social.icon} />
            </Link>
          ))}
        </div>

        {/* Navigation links */}
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

        {/* Side burger menu overlay  */}
        {<SideMenu />}
      </nav>
    </header>
  );
};

export default Nav;
