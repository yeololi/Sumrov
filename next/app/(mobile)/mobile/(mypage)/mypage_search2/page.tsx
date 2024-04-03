import { DatePickerWithRange } from "@/components/ui/datePicker";
import { Select, SelectTrigger } from "@/components/ui/select";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const Mypage_search2 = () => {
  return (
    <>
      <div className="h-[150vh] flex flex-col items-start justify-start gap-[30px] ">
        <div>
          <div className="flex flex-col gap-[13px] font-bold text-[13px]">
            <div className="text-[15px] font-bold">주문내역 조회</div>
            <div className="w-full flex flex-col items-center gap-[13px]">
              <DatePickerWithRange className="dark:bg-[#2d2d2d] dark:text-[#919191]" />
              <Select>
                <SelectTrigger className="dark:bg-[#2d2d2d] dark:text-[#919191] rounded-sm w-full h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                  전체 주문처리상태
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="mt-[13px] w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
          <div className="my-[11px] text-[15px] font-bold text-black dark:text-[#fff] whitespace-nowrap">
            2024-02-16
          </div>
          <div className="flex flex-row items-start justify-between">
            <img width="90" height="93" src="/images/main3.png"></img>
            <div className="ml-[10px] w-full flex flex-col items-start justify-start">
              <div className="w-full flex flex-row items-start justify-between gap-[4px]">
                <div>
                  <div className="text-[11px] font-pre font-medium whitespace-nowrap">
                    로램잇섬 여우원숭이와 펭귄 황제펭귄
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[3px]">
                    <div className="text-[11px] font-pre font-semibold whitespace-nowrap">
                      {" "}
                      KRW 10,000
                    </div>
                  </div>

                  <div className="mt-[18px] text-[10px] font-medium text-[#919191] whitespace-nowrap">
                    배송완료
                  </div>
                </div>
                <div>
                  <ChevronRight className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[13px]">
            <div className="mt-[13px] w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center">
              <div className="text-neutral-50 dark:text-white text-[11px] font-normal font-noto">
                조회
              </div>
            </div>
            <div className="px-[11px] py-[5px] dark:bg-white dark:text-black bg-black text-[11px] font-noto text-[#fff] mt-[13px] relative h-[25px] shrink-0">
              구매 취소
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[13px] font-bold text-[13px]">
            <div className="text-[15px] font-bold">
              취소/교환/반품 내역 조회
            </div>
            <div className="w-full flex flex-col items-center gap-[13px]">
              <DatePickerWithRange className="dark:bg-[#2d2d2d] dark:text-[#919191]" />
              <Select>
                <SelectTrigger className="dark:bg-[#2d2d2d] dark:text-[#919191] rounded-sm w-full h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                  전체 주문처리상태
                </SelectTrigger>
              </Select>
            </div>
          </div>
          <div className="mt-[13px] w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
          <div className="my-[11px] text-[15px] font-bold text-black dark:text-[#fff] whitespace-nowrap">
            2024-02-16
          </div>
          <div className="flex flex-row items-start justify-between">
            <img width="90" height="93" src="/images/main3.png"></img>
            <div className="ml-[10px] w-full flex flex-col items-start justify-start">
              <div className="w-full flex flex-row items-start justify-between gap-[4px]">
                <div>
                  <div className="text-[11px] font-pre font-medium whitespace-nowrap">
                    로램잇섬 여우원숭이와 펭귄 황제펭귄
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[3px]">
                    <div className="text-[11px] font-pre font-semibold whitespace-nowrap">
                      {" "}
                      KRW 10,000
                    </div>
                  </div>

                  <div className="mt-[18px] text-[10px] font-medium text-[#919191] whitespace-nowrap">
                    구매 취소
                  </div>
                </div>
                <div>
                  <ChevronRight className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[13px]">
            <Link
              href={""}
              className="mt-[13px] w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center"
            >
              <div className="text-neutral-50 dark:text-white text-[11px] font-normal font-noto">
                조회
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-0 border-[1px] border-solid border-[#00000040] dark:border-[#ffffff40]"></div>
    </>
  );
};

export default Mypage_search2;
