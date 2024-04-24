import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div className="w-full h-[75px] bg-white bg-opacity-10 dark:bg-opacity-5 px-[100px] flex items-center absolute">
      <Link href="/" className="justify-start items-center gap-2.5 inline-flex">
        <div className="text-black dark:text-white text-lg font-semibold font-nav">
          SUMROV
        </div>
      </Link>
      <NavBar />
      <div className="w-[103.9px] flex justify-end">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
