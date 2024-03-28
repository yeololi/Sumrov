import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { X } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import ShopMenu from "./_components/shopmenu";

const MenuPage = async () => {
  const session = await getServerSession(authOptions);

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
        {session ? (
          <Link
            href={"/mobile/mypage"}
            className="text-black dark:text-white text-xl font-bold font-nav"
          >
            Mypage
          </Link>
        ) : (
          <Link
            href={"/mobile/login"}
            className="text-black dark:text-white text-xl font-bold font-nav"
          >
            Login
          </Link>
        )}
        <Link
          href={"/mobile/review"}
          className="text-black dark:text-white text-xl font-semibold font-nav"
        >
          Review
        </Link>
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
