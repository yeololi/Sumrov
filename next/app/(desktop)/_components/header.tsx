import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import NavBar from "./navbar";

const Header = () => {
  return (
    <div className="w-full h-[50px] bg-white bg-opacity-10 dark:bg-opacity-5 px-[100px] flex items-center absolute">
      <NavBar />
    </div>
  );
};

export default Header;
