import Link from "next/link";
import { cn } from "@/lib/utils";
const data = [{}, {}, {}, {}, {}];
const Mypage_review = () => {
    return (
        <>
            <div className="w-[100vw] min-h-[70vh] flex flex-col items-start justify-start gap-[22px] mb-[50px]">
                <div className="flex justify-between pl-[18px] pr-[26px] mb-[15px] w-full">
                    <div className=" h-[25px] text-black dark:text-white text-[11px] font-normal font-noto flex justify-center items-center">
                        나의 리뷰
                    </div>
                    <Link
                        href={"/mobile/reviewWrite"}
                        className="w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center"
                    >
                        <div className="text-neutral-50 dark:text-black text-[11px] font-normal font-noto">
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
                                        로램잇섬 여우원숭이와 펭귄 황제펭귄
                                    </div>
                                </div>
                                <div className="flex ml-[11px] gap-[7px]">
                                    <div className="text-neutral-400 text-[10px] font-medium font-noto tracking-wide">
                                        Lo**
                                    </div>
                                    <div className="text-neutral-400 text-[10px] font-medium font-noto tracking-wide">
                                        2024-02-11
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                <Link
                    href={""}
                    className="ml-[18px] w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center"
                >
                    <div className="text-neutral-50 dark:text-black text-[11px] font-normal font-noto">
                        목록
                    </div>
                </Link>
            </div>
            <div className="w-full mt-[30px] dark:text-white text-black text-[11px] font-medium font-noto flex justify-center items-center">
                Load more (1/1)
            </div>
            <div className="w-[375px] h-0 border-[1px] border-solid border-[#00000040] dark:border-[#ffffff40]"></div>
        </>
    );
};

export default Mypage_review;
