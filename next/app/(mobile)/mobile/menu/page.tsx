import { X } from "lucide-react";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-black flex flex-col pl-[34px] pt-[97px] gap-[41px] relative">
      <div className="text-black dark:text-white text-xl font-bold font-nav">
        Shop
      </div>
      <div>
        <div className="text-black dark:text-white text-xl font-bold font-nav">
          Notice
        </div>
        <div className="text-black dark:text-white text-xl font-bold font-nav">
          Q&A
        </div>
        <div className="text-black dark:text-white text-xl font-bold font-nav">
          FAQ
        </div>
      </div>
      <div>
        <div className="text-black dark:text-white text-xl font-bold font-nav">
          Login
        </div>
        <div className="text-black dark:text-white text-xl font-semibold font-nav">
          Review
        </div>
      </div>
      <Link href={"/mobile"}>
        <X
          size={26}
          className="absolute right-[31px] top-[58px] dark:text-white"
        />
      </Link>
    </div>
  );
};

export default MenuPage;
