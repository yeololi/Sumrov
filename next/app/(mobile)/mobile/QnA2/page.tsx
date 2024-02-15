import Footer from "../_components/footer";
import Header from "../_components/header";
import { Lock } from "lucide-react";

const data = [{}, {}, {}, {}, {}, {}, {}];

const QnAPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px] relative">
                <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[54px]">
                    Q&A
                </div>
                <div className="w-[335px] h-[161px] inset-y-237 inset-x-3396 border border-1 border-gray-300">
                    <div className="w-[333px] h-[51px] bg-gray-200 flex grid place-items-center">
                        <div className="text-black text-center text-[17px] font-medium font-['Cormorant Garamond']">
                            비밀글 보기
                        </div>
                    </div>
                    <div className="w-[167px] h-[78px] flex-col justify-start items-center gap-1.5 inline-flex">
                        <div className="w-[17px] h-[17px] relative">
                            <div className="w-[17px] h-[17px] left-0 top-0 absolute">
                                <Lock />
                            </div>
                        </div>
                        <div className="text-center text-black text-[11px] font-light font-['Cormorant Garamond']">
                            이 글은 비밀글입니다
                            <br />
                            비밀번호를 입력해 주세요.
                        </div>
                        <div className="w-[167px] h-[23px] relative">
                            <div className="w-[127px] h-[23px] left-0 top-0 absolute bg-neutral-50 border border-stone-300" />
                            <div className="w-[34px] h-[23px] left-[133px] top-0 absolute">
                                <div className="w-[34px] h-[23px] left-0 top-0 absolute bg-neutral-400" />
                                <div className="w-[35px] h-2.5 top-[3.5px] absolute text-center text-neutral-50 text-[10px] ont-light font-['Cormorant Garamond']">
                                    확인
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

export default QnAPage;
