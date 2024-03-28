import { ChevronDown, X } from "lucide-react";
import React from "react";

const data = [{}, {}, {}, {}, {}, {}, {}];

const QnAPage = () => {
  return (
    <>
      <div className="w-full h-9 bg-gray-600 flex items-center justify-between px-[10px]">
        <div className="text-center text-neutral-50 text-sm font-medium font-pre">
          상품정보선택
        </div>
        {/* <Link href={"/mobile/shop"}> */}
        <X strokeWidth={1} className="w-[26px] h-[26px] text-neutral-50" />
        {/* </Link> */}
      </div>
      <div className="w-[355px] h-[42px] ml-[10px] mt-[5px] relative">
        <div className="w-[355px] h-[42px] left-0 top-0 absolute bg-neutral-200" />
        <div className="left-[6px] top-[8px] absolute justify-start items-center gap-[5px] inline-flex">
          <div className="w-[90px] h-[26px] relative">
            <div className="w-[90px] h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
            <div className="w-[30px] h-2.5 left-[8px] top-[7px] bottom-[7px] absolute text-neutral-400 text-[10px] font-semibold font-nav">
              상품명
            </div>
            <div className="w-6 h-[0px] left-[59px] top-[1px] absolute origin-top-left rotate-90 border border-neutral-300"></div>
            <div className="left-[62px] top-[1px] absolute">
              <ChevronDown className="w-6 h-6 text-neutral-400 rotate-270" />
            </div>
          </div>
          <div className="w-[205px] h-[26px] bg-neutral-50 rounded-sm border border-neutral-300" />
          <div className="w-[39px] h-[23px] relative">
            <div className="w-[39px] h-[23px] left-0 top-0 absolute bg-neutral-400" />
            <div className="w-[21.79px] h-2.5 left-[9px] top-[7px] absolute text-center text-neutral-50 text-[10px] font-light font-nav">
              검색
            </div>
          </div>
        </div>
      </div>
      <div className="w-[168px] h-[13px] ml-[10px] mt-[16px]">
        <span className="text-black text-[11px] font-normal font-pre tracking-wide">
          총
        </span>
        <span className="text-black text-[11px] font-normal font-pre tracking-wide">
          0
        </span>
        <span className="text-black text-[11px] font-normal font-pre tracking-wide">
          개 의 상품이 검색되었습니다.
        </span>
      </div>
    </>
  );
};

export default QnAPage;
