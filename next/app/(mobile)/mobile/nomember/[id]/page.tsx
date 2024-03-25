import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const NoMember = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[121px] border-b border-black border-opacity-25 ">
        <div className="w-[335px] h-full flex-col justify-start items-center gap-[95px] inline-flex">
          <div className="dark:text-white text-[17px] font-semibold font-nav tracking-widest">
            NO_MEMBER
          </div>
          <div className="flex flex-col items-start justify-start gap-[22px] mb-[50px]">
            <div className="flex flex-col items-start justify-start">
              <div className="text-[13px] font-pre font-medium whitespace-nowrap">
                주문내역 상세
              </div>
            </div>
            <div className="w-[335px] h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
            <div className="flex flex-col items-start justify-start gap-[18px]">
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <div className="text-[13px] font-pre font-medium whitespace-nowrap">
                  주문번호 1020392093029
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  결제 날짜 : 2024. 02. 16 16:04:15
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <img width="70" height="93" src="/images/main3.png"></img>
                <div className="flex flex-col items-start justify-start gap-[36px]">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <div className="text-[11px] font-pre font-medium whitespace-nowrap">
                      로램잇섬 여우원숭이와 펭귄 황제펭귄
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[3px]">
                      <div className="text-[11px] font-pre font-semibold whitespace-nowrap">
                        {" "}
                        KRW 10,000
                      </div>
                      <div className="text-[10px] font-pre font-medium text-neutral-400 whitespace-nowrap">
                        -블랙/S 1개
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[50px] h-[22px] shrink-0">
                    <div className="absolute left-0 top-0 w-[50px] h-[22px] bg-[#fff] border-[1px] border-solid border-[#d3d3d3]"></div>
                    <div className="absolute left-[7px] top-[5px] text-[10px] font-pre font-medium text-[#508aee] whitespace-nowrap">
                      배송조회
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
            <div className="flex flex-col items-start justify-start gap-[17px]">
              <div className="text-[13px] font-pre font-medium whitespace-nowrap">
                결제 정보
              </div>
              <div className="w-full flex flex-row items-start justify-between overflow-hidden">
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  결제 방법
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  무통장입금
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  총 상품금액
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  10,000원
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  상품 할인금액
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  0원
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  배송비
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  3,000원
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-between gap-[204px]">
                <div className="text-[13px] font-pre whitespace-nowrap">
                  총 1개 결제금액
                </div>
                <div className="text-[13px] font-pre whitespace-nowrap">
                  13,000원
                </div>
              </div>
            </div>
            <div className="w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
            <div className="w-full flex flex-col items-start justify-start gap-[15px]">
              <div className="text-[13px] font-pre font-medium whitespace-nowrap">
                배송지 정보
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[21px]">
                <div className="w-full flex flex-row items-start justify-between">
                  <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                    받는분
                  </div>
                  <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                    Lorem
                  </div>
                </div>
                <div className="w-full flex flex-row items-start justify-between">
                  <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                    주소
                  </div>
                  <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                    로램 로램 로램로램 로램 로맴
                  </div>
                </div>
                <div className="w-full flex flex-row items-start justify-between gap-[229px]">
                  <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                    연락처
                  </div>
                  <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                    010-2222-2222
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

export default NoMember;
