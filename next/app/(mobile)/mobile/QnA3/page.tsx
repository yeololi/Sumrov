import Footer from "../_components/footer";
import Header from "../_components/header";
import { ChevronDown } from "lucide-react";

const data = [{}, {}, {}, {}, {}, {}, {}];

const QnAPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px] relative">
                <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[54px]">
                    Q&A
                </div>
                <div className="w-[335px] h-[743px] bg-neutral-50 border border-neutral-300">
                    <div className="w-[335px] h-[99px] relative">
                        <div className="w-[333px] h-[99px] left-0 top-0 absolute bg-gray-200 border-b border-neutral-300">
                            <div className="w-[74px] h-[74px] left-[11px] top-[13px] absolute">
                                <div className="w-[74px] h-[74px] left-0 top-0 absolute bg-gray-200 border border-neutral-300" />
                                <div className="w-[15px] h-[11px] left-[29px] top-[31px] absolute"></div>
                            </div>
                            <div className="w-[78px] h-[25px] left-[98px] top-[28px] absolute">
                                <div className="w-[78px] h-[25px] left-0 top-0 absolute bg-white bg-opacity-70 border border-neutral-300" />
                                <div className="left-[11px] top-[7px] absolute text-black text-[10px] font-medium font-['Cormorant Garamond']">
                                    상품정보선택
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[309px] h-[26px] relative m-[11px] gap-[48px]">
                        <div className="left-0 top-[5px] absolute text-black text-[11px] font-medium font-nav">
                            제목
                        </div>
                        <div className="w-60 h-[26px] left-[68px] top-0 absolute flex-row">
                            <div className="w-60 h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                            <div className="w-[20px] h-2.5 left-[8px] top-[5.5px] absolute text-neutral-400 text-[10px] font-semibold font-nav">
                                문의
                            </div>
                            <div className="w-6 h-[0px] left-[207px] top-[1px] absolute origin-top-left rotate-90 border border-neutral-300"></div>
                            <div className="left-[212px] top-[2px] absolute">
                                <ChevronDown className="w-6 h-6 text-neutral-400" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[333px] h-[50.50px] relative">
                        <div className="w-60 h-[26px] left-[79px] top-[11.50px] absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="left-[10px] top-[18.50px] absolute text-black text-[11px] font-medium font-nav">
                            작성자
                        </div>
                    </div>
                    <div className="w-[305px] h-[236px] m-[15px] relative">
                        <div className="w-[305px] h-[236px] left-0 top-0 absolute bg-neutral-50 border border-neutral-200" />
                        <div className="w-[303px] h-[0px] left-[1px] top-[208px] absolute border border-gray-200"></div>
                        <div className="left-[275px] top-[217px] absolute text-neutral-400 text-[7px] font-normal font-['Pretendard']">
                            문자 : 0
                        </div>
                    </div>
                    <div className="w-[309px] h-[26px]  ml-[11px] relative">
                        <div className="w-60 h-[26px] left-[69px] top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="left-0 top-[6px] absolute text-black text-[11px] font-medium font-['Pretendard']">
                            UCC URL
                        </div>
                    </div>
                    <div className="w-[309px] h-[26px] ml-[11px] mt-[22px] relative">
                        <div className="w-60 h-[26px] left-[69px] top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="left-0 top-[6px] absolute text-black text-[11px] font-medium font-['Pretendard']">
                            비밀번호
                        </div>
                    </div>
                    <div className="w-[309px] h-[53px] ml-[11px] mt-[22px] relative">
                        <div className="left-0 top-[21px] absolute text-black text-[11px] font-medium font-['Pretendard']">
                            보안문자
                        </div>
                        <div className="w-60 h-[26px] left-[69px] top-[27px] absolute">
                            <div className="w-60 h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                            <div className="w-[114px] h-[11px] left-[9px] top-[7px] absolute text-neutral-400 text-[10px] font-normal font-['Pretendard']">
                                보안문자를 입력해주세요
                            </div>
                        </div>
                        <div className="w-[66px] h-[22px] left-[69px] top-0 absolute bg-zinc-300" />
                    </div>
                    <div className="w-[311px] h-[15px] ml-[11px] mt-[28px] relative ">
                        <div className="w-[110px] h-[11px] left-[21px] bottom-[3.5px] absolute text-neutral-400 text-[11px] font-normal font-['Pretendard']">
                            개인정보처리방침동의
                        </div>
                        <div className="w-[32px] left-[279px] bottom-[1.5px] absolute text-neutral-400 text-[8px] font-normal font-['Pretendard'] underline">
                            내용보기
                        </div>
                        <div className="w-[15px] h-[15px] left-[-1px] bottom-[-1px] absolute bg-neutral-50 rounded-[3px] border border-neutral-300" />
                    </div>
                    <div className="flex flex-row">
                        <div className="w-[104px] h-[22px] mt-[33px] ml-[47px] relative">
                            <div className="w-[104px] h-[22px] left-0 top-0 absolute bg-black" />
                            <div className="left-[44px] top-[5px] absolute text-neutral-50 text-[9px] font-normal font-['Pretendard']">
                                등록
                            </div>
                        </div>
                        <div className="w-[104px] h-[22px] mt-[33px] ml-[12px] relative">
                            <div className="w-[104px] h-[22px] left-0 top-0 absolute bg-neutral-50 border border-gray-200" />
                            <div className="left-[44px] top-[5px] absolute text-black text-[9px] font-normal font-['Pretendard']">
                                취소
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default QnAPage;
