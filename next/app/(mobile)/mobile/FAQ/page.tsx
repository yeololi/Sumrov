import { qna_data } from "@/app/(desktop)/FAQ/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "../_components/footer";
import Header from "../_components/header";

const NoticePage = () => {
  const data = qna_data.reverse();
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[31px]">
          FAQ
        </div>
        {data.map((args, i) => (
          <Link
            href={"/mobile/FAQ/" + (data.length - i)}
            key={i}
            className={cn(
              "w-full h-16 bg-white dark:bg-neutral-900 border-gray-200 py-[15px] px-[16px]",
              i == 0 ? "border-y" : "border-b"
            )}
          >
            <div className="h-full w-full flex flex-col gap-1">
              <div className="flex">
                <div className="text-zinc-800 dark:text-white text-xs font-normal font-body">
                  {args.title}
                </div>
              </div>
              <div className="flex gap-[13px]">
                <div className="text-neutral-400 text-[10px] font-medium font-body tracking-widest">
                  SUMROV
                </div>
                <div className="text-neutral-400 text-[10px] font-medium font-body tracking-wide">
                  {args.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default NoticePage;
