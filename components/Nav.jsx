import Link from "next/link";
import {
  RxCross1,
  RxHamburgerMenu,
  RxLinkedinLogo,
  RxGithubLogo,
} from "react-icons/rx";
import { Button } from "./ui/button";
import ButtonDark from "./ButtonDark";
import ButtonNav from "./ButtonNav";
import ButtonSocial from "./ButtonSocial";
import { navLinks } from "@/constants";

const Nav = () => {
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

          <Link href={"/"}>
            <ButtonSocial icon={<RxGithubLogo />} />
          </Link>

          <Link href={"/"}>
            <ButtonSocial icon={<RxLinkedinLogo />} />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center max-lg:hidden">
          <div className="flex max-w-max gap-8 rounded-lg bg-transparent p-[7px]">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <ButtonNav title={link.name} />
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden cursor-pointer rounded-lg bg-white p-[7px] text-3xl shadow-sm hover:bg-secondary max-lg:block">
          <RxHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
