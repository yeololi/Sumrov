import Footer from "../_components/footer";
import Header from "../_components/header";
let abc = [0, 0, 0, 0, 0, 0];
const Review = () => {
    return (
        <>
            <Header />
            <div className=" flex flex-col justify-center pt-[121px] border-b border-black border-opacity-25">
                <div className="w-full h-full flex-col justify-start gap-[45px] inline-flex mb-[45px]">
                    <div className="w-full text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest text-center">
                        REVIEW
                    </div>
                    <div className="relative w-full h-[44px]">
                        <div className="w-full flex flex-wrap items-end justify-start gap-[5px]">
                            <div className="w-full ml-[10px] text-[14px] font-['Inter'] font-semibold text-[#292929] dark:text-white">
                                로램잇섬 여우원숭이와 펭귄 황제펭귄
                            </div>
                            <div className="flex gap-[10px] ml-[10px] ">
                                <div className="text-[10px] tracking-[.2em] font-['Inter'] font-medium text-[#919191] whitespace-nowrap">
                                    Lo****
                                </div>
                                <div className="text-[10px] tracking-[.1em] font-['Inter'] font-medium text-[#919191] whitespace-nowrap">
                                    2024-02-11
                                </div>
                            </div>
                            <div className="w-full h-0 border-[1px] border-solid border-[#ebebeb]"></div>
                        </div>
                    </div>
                </div>
                <div className="relative w-full flex flex-col">
                    <div className="flex justify-center">
                        <div className="gap-[22px]">
                            <img
                                className=""
                                width="300"
                                height="399"
                                src="/images/main4.png"
                            ></img>
                            <img
                                className=""
                                width="300"
                                height="399"
                                src="/images/main4.png"
                            ></img>
                        </div>
                    </div>
                    <div className="flex justify-center mt-[35px]">
                        <div className="w-[90%] h-0 border-[2px] border-solid border-[#d3d3d3]"></div>
                    </div>
                    <div className="gap-[9px] mt-[32px]">
                        <div className="w-full text-center text-[12px] text-[#292929] dark:text-white">
                            로램잇섬 로램잇섬 Lorem ipsum dolor sit amet,
                        </div>
                        <div className="w-full text-center text-[12px] text-[#292929] dark:text-white">
                            Lorem ipsum dolor sit amet
                        </div>
                        <div className="w-full text-center text-[12px] text-[#292929] dark:text-white">
                            로램잇섬 로램잇섬 로램잇섬 로램
                        </div>
                    </div>
                    <div className="my-[45px] ml-[5%] w-[40px] h-[23px] flex bg-[#919191] text-[11px] justify-center items-center text-white dark:text-black">
                        목록
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Review;
