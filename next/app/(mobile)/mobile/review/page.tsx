import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "../_components/footer";
import Header from "../_components/header";
let abc = [0, 0, 0, 0, 0, 0];
const Review = () => {
    return (
        <>
            <Header />
            <div className=" flex justify-center pt-[121px] border-b border-black border-opacity-25  ">
                <div className="w-full h-full flex-col justify-start gap-[45px] inline-flex mb-[45px]">
                    <div className="w-full text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest text-center">
                        REVIEW
                    </div>
                    <div className="flex flex-row-reverse relative w-full h-[25px] ">
                        <button className="absolute w-[46px] h-[25px] bg-[#919191] text-[11px] text-center">
                            글쓰기
                        </button>
                    </div>
                    <div className="">
                        {abc.map((value, index) => (
                            <div>
                                <div
                                    className={
                                        index === 0
                                            ? "w-full h-[64px] flex border dark:border-[#EBEBEB]"
                                            : "w-full h-[64px] flex border-b border-r border-l dark:border-[#EBEBEB]"
                                    }
                                >
                                    <img
                                        className="border-0 w-[40px] h-[53px] mt-[5px]"
                                        src="/images/main3.png"
                                        alt="이미지 설명"
                                    />
                                    <div className="w-[202px] ml-[8px] mt-[8px] flex flex-col items-start justify-start gap-[10px]">
                                        <div className="text-[13px] font-['Inter'] font-medium dark:text-white text-[#292929] whitespace-nowrap">
                                            로램잇섬 여우원숭이와 펭귄 황제펭귄
                                        </div>
                                        <div className="flex flex-row gap-[10px]">
                                            <div className="text-[10px] tracking-[.1em] font-['Inter'] font-medium text-[#919191] whitespace-nowrap">
                                                Lo***
                                            </div>
                                            <div className="text-[9px] tracking-[.1em] font-['Inter'] font-medium text-[#919191] whitespace-nowrap">
                                                2024-02-11
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="w-full text-center text-[11px] font-medium dark:text-white text-dark whitespace-nowrap mt-[45px]">
                            Load more (1/1)
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Review;
