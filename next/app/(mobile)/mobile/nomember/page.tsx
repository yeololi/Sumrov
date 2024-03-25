import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "../_components/footer";
import Header from "../_components/header";

const NoMember = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[121px] border-b border-black border-opacity-25 h-[calc(100vh-99px)]">
        <div className="w-[335px] h-full flex-col justify-start items-center gap-[95px] inline-flex">
          <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest">
            NO_MEMBER
          </div>
          <div className="w-[335px] bg-neutral-50 dark:bg-black border border-neutral-300 flex-col justify-start items-center gap-[15px] flex">
            <div className="w-[335px] h-[51px] relative">
              <div className="w-[335px] h-[51px] left-0 top-0 absolute bg-gray-200 border border-neutral-300" />
              <div className="left-[114px] top-[16px] absolute text-black dark:#EBEBEB text-base font-medium font-pre">
                비회원 주문조회
              </div>
            </div>
            <div className="pb-[31px] flex-col justify-start items-center gap-[13px] flex">
              <div className="text-center dark:text-white text-black text-[12px] font-medium font-pre">
                주문번호를 입력해주세요
              </div>
              <div className="justify-start items-start gap-1.5 inline-flex">
                <Input className="w-[127px] h-[23px] dark:bg-black rounded-none bg-neutral-50 border border-stone-300" />

                <Button className="w-[34px] h-[23px] dark:text-black bg-neutral-400 text-neutral-50 text-[10px] font-normal font-pre rounded-none">
                  조회
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoMember;
