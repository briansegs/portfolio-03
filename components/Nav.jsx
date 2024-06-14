import Link from "next/link";
import {
  RxCross1,
  RxHamburgerMenu,
  RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { navLinks } from "@/constants";
import { Button } from "./ui/button";
import ButtonDark from "./ButtonDark";
import ButtonNav from "./ButtonNav";
import ButtonSocial from "./ButtonSocial";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg bg-white p-[7px] shadow-sm">
          <Link href={"/"}>
            <Button className=" bg-black px-3 py-[7px] font-crimson text-2xl font-semibold text-white hover:bg-black">
              Brian
              <span className="pl-1 text-red-400">.</span>
            </Button>
          </Link>

          <Link href={"/"}>
            <ButtonSocial icon={<RxGithubLogo />} />
          </Link>

          <Link href={"/"}>
            <ButtonSocial icon={<RxLinkedinLogo />} />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center max-lg:hidden">
          <div className="flex max-w-max gap-2 rounded-lg bg-white p-[7px] shadow-sm">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <ButtonNav title={link.name} />
              </Link>
            ))}

            <ButtonDark title={"Hire Me"} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
