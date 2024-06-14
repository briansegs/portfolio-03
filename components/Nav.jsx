import Link from "next/link";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "@/constants";
import { Button } from "./ui/button";

const Nav = () => {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="max-container flex items-center justify-between">
        <Link href={"/"}>Logo</Link>

        <div className="flex flex-1 items-center justify-center max-lg:hidden">
          <div className="flex max-w-max gap-2 rounded-lg bg-white p-[7px] shadow-sm">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <Button className="button bg-white text-black hover:bg-blue-50">
                  {link.name}
                </Button>
              </Link>
            ))}
            <Button className="button text-white">Hire Me</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
