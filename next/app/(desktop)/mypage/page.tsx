import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Footer from "../_components/footer";
import Header from "../_components/header";
import MypageButton from "./_components/mypageButton";

const data2 = ["입금전", "배송준비중", "배송중", "배송완료", "교환/반품"];

async function mypage() {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[91px] bg-neutral-50 dark:bg-inherit">
        <div className="w-[1040px] flex-col justify-start items-center gap-[70px] inline-flex">
          <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
            NOTICE
          </div>
          <div className="flex flex-row gap-[120px]">
            <div className="flex flex-col">
              <MypageButton />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row mb-[32px]">
                <div className="text-[16px] font-bold text-[#000] mr-[2px] dark:text-white">
                  {user?.name} 님의 주문 현황
                </div>
                <div className="mt-[3px] text-[12px] font-bold text-[#919191] whitespace-nowrap">
                  (최근 3개월)
                </div>
              </div>
              <div className="flex flex-row justify-around h-[132px] w-[815px] border-y border-[#EBEBEB] px-[56px] py-[40px]">
                {data2.map((arg, key) => (
                  <div className="flex flex-col" key={key}>
                    <div className="mb-[16px] text-[14px] font-bold text-[#919191] whitespace-nowrap">
                      {arg}
                    </div>
                    <div className=" font-bold text-center">0</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default mypage;
