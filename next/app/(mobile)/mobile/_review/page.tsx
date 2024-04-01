import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { cn } from "@/lib/utils";
import Link from "next/link";

const data = [{}, {}, {}, {}, {}, {}, {}];

const Review = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[54px]">
          REVIEW
        </div>
        <div className="flex justify-end pl-[18px] pr-[26px] mb-[15px] w-full">
          <Link
            href={"/mobile/reviewWrite"}
            className="w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center"
          >
            <div className="text-neutral-50 text-[11px] font-normal font-noto">
              글쓰기
            </div>
          </Link>
        </div>
        {data.map((args, i) => (
          <Link
            href={"/mobile/review/0"}
            key={i}
            className={cn(
              "w-full h-16 bg-white dark:bg-neutral-900 border-gray-200 px-[18px] py-5px flex items-center justify-start",
              i == 0 ? "border-y" : "border-b"
            )}
          >
            <div className="w-full h-[53px] flex">
              <img
                className="w-10 h-[53px] border border-neutral-50"
                src="https://via.placeholder.com/40x53"
              />
              <div className="flex flex-col gap-2">
                <div className="flex ml-[9px] mt-1 items-center gap-1">
                  <div className="text-zinc-800 dark:text-white text-[13px] font-medium font-noto">
                    문의
                  </div>
                </div>
                <div className="flex ml-[11px] gap-[7px]">
                  <div className="text-neutral-400 text-[10px] font-medium font-noto tracking-wide">
                    이**
                  </div>
                  <div className="text-neutral-400 text-[10px] font-medium font-noto tracking-wide">
                    2024-02-11
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="mt-[30px] dark:text-white text-black text-[11px] font-medium font-noto">
          Load more (1/1)
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Review;
