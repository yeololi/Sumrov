import { X } from "lucide-react";
import Link from "next/link";
import ShopMenu from "./_components/shopmenu";

const MenuPage = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-900 flex flex-col pl-[34px] pt-[97px] gap-[41px] relative">
      <ShopMenu />
      <div className="flex flex-col">
        <Link
          href={"/mobile/notice"}
          className="text-black dark:text-white text-xl font-bold font-nav"
        >
          Notice
        </Link>
        <Link
          href={"/mobile/QnA"}
          className="text-black dark:text-white text-xl font-bold font-nav"
        >
          Q&A
        </Link>
        <Link
          href={"/mobile/FAQ"}
          className="text-black dark:text-white text-xl font-bold font-nav"
        >
          FAQ
        </Link>
      </div>
      <div className="flex flex-col">
        <Link
          href={"/mobile/login"}
          className="text-black dark:text-white text-xl font-bold font-nav"
        >
          Login
        </Link>
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
