import { ModeToggle } from "@/components/mode-toggle";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="h-[83px] w-full absolute flex justify-center pt-[63px]">
      <div className="w-[337px] h-5 flex justify-between items-center">
        <Menu className="w-[20px] h-[20px] dark:text-white" />
        <div className="flex items-center">
          <img className="w-[13px] h-[13px] mr-1" src="/images/logo.png" />
          <div className="dark:text-white text-black text-[15px] font-semibold font-nav">
            SUMROV
          </div>
        </div>
        <ModeToggle isMobile={true} />
      </div>
    </div>
  );
};

export default Header;
