import Header from "../_components/header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import Footer from "../_components/footer";

const data = [{}, {}, {}, {}, {}, {}, {}];

const QnAPage = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[54px]">
          Q&A
        </div>
        <div className="flex justify-between pl-[18px] pr-[26px] mb-[15px] w-full">
          <Select>
            <SelectTrigger className="w-[158px] h-[26px] rounded-none text-neutral-600 text-[11px] font-semibold font-body bg-neutral-50 border border-stone-300">
              <SelectValue placeholder="전체 글보기" className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">전체 글보기</SelectItem>
              <SelectItem value="before">답변전 글보기</SelectItem>
              <SelectItem value="after">답변완료 글보기</SelectItem>
            </SelectContent>
          </Select>
          <div className="w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center">
            <div className="text-neutral-50 text-[11px] font-normal font-body">
              글쓰기
            </div>
          </div>
        </div>
        {data.map((args, i) => (
          <div
            key={i}
            className={cn(
              "w-full h-16 bg-white dark:bg-black border-gray-200 px-[18px] py-5px flex items-center justify-start",
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
                  <Lock className="w-3.5 h-3.5" />
                  <div className="text-zinc-800 text-[13px] font-medium font-body">
                    문의
                  </div>
                </div>
                <div className="flex ml-[11px] gap-[7px]">
                  <div className="text-neutral-400 text-[10px] font-medium font-body tracking-wide">
                    이**
                  </div>
                  <div className="text-neutral-400 text-[9px] font-medium font-body tracking-wide">
                    2024-02-11
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-[30px] dark:text-white text-black text-[11px] font-medium font-body">
          Load more (1/1)
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QnAPage;
