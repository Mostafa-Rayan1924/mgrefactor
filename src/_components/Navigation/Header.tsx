import Logo from "./Logo";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Sidebar from "./Sidebar";
import { links } from "@/constants/NavLinks";
import LinkLi from "./LinkLi";
const Header = () => {
  return (
    <header className="bg-background/50   shadow-md shadow-primary/20 fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="container  flex justify-between items-center gap-4">
        <Logo />
        <nav className="md:flex  hidden">
          <ul className="flex items-center gap-4 lg:gap-7">
            {links.map((link) => (
              <LinkLi link={link} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            className="group hidden  md:flex relative  overflow-hidden border
            border-primary px-8 rounded py-2 focus:ring-3 focus:outline-hidden"
            href={`/contact`}>
            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-primary transition-all group-hover:h-full"></span>
            <span className="relative text-sm text-primary transition-colors group-hover:text-white">
              تسجيل الدخول{" "}
            </span>
          </Link>
          <ModeToggle />
          <div className="flex md:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
