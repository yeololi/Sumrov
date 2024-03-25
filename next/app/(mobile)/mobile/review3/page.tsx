import Footer from "../_components/footer";
import Header from "../_components/header";
import { ChevronDown } from "lucide-react";
const Review = () => {
    return (
        <>
            <Header />
            <div className=" flex flex-col justify-center pt-[121px] border-b border-black border-opacity-25">
                <div className="w-full h-full flex-col justify-start gap-[45px] inline-flex mb-[45px]">
                    <div className="w-full text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest text-center">
                        REVIEW
                    </div>
                </div>
                <div className="w-full flex justify-center h-[533px]  mb-[45px]">
                    <div className="w-[90%]">
                        <button className="w-full h-[100px] bg-[#fafafa] border-[1px] border-solid border-[#d3d3d3] p-[13px] flex items-center gap-[13px]">
                            <img
                                width="74"
                                height="74"
                                src="/images/camera.png"
                            ></img>
                            <div className="w-[78px] h-[25px] bg-[#ffffffa8] border-[1px] border-solid border-[#d3d3d3] items-center text-center">
                                사진첨부
                            </div>
                        </button>
                        <div className="w-full h-[50px] p-[11px] border-b border-l border-r flex justify-between items-center whitespace-nowrap">
                            <div>제목</div>
                            <div className="flex">
                                <div className="w-[204px] h-[26px] border border-black border-opacity-5"></div>
                                <div className="w-[36px] h-[26px] border border-black border-opacity-5 flex items-center justify-center">
                                    <ChevronDown className="w-6 h-6 text-neutral-400" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[50px] p-[11px] border-b border-l border-r flex justify-between items-center whitespace-nowrap">
                            <div>작성자</div>
                            <div className="flex">
                                <div className="w-[204px] h-[26px] border border-black border-opacity-5"></div>
                                <div className="w-[36px] h-[26px] border border-black border-opacity-5 flex items-center justify-center">
                                    <ChevronDown className="w-6 h-6 text-neutral-400" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[333px] pt-[11px] border-b border-l border-r flex justify-center">
                            <div className="w-[95%] flex flex-col">
                                <div className="w-full h-[70%] flex flex-col">
                                    <div className="w-full h-[85%] border border-black border-opacity-5"></div>
                                    <div className="w-full h-[15%] border border-black border-opacity-5 text-[11px] text-[#919191] text-end p-[8px]">
                                        문자 : 0
                                    </div>
                                </div>
                                <div className="w-full flex mt-[32px] justify-center gap-[12px]">
                                    <div className="w-[104px] h-[22px] text-white bg-black text-center text-[9px] pt-[4px]">
                                        등록
                                    </div>
                                    <div className="w-[104px] h-[22px] border-[1px] border-solid border-[#ebebeb] text-center text-[9px] pt-[4px]">
                                        취소
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Review;
