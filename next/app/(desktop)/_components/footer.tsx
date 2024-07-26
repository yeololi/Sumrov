import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[500px] px-[100px] py-[106px] bg-[#2C2C2C] justify-center items-center inline-flex">
        <div className="grow shrink basis-0 self-stretch flex-col justify-between items-end inline-flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="flex-col justify-center items-start gap-[15px] inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-50 text-[28px] font-bold font-nav">
                  SUMROV
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-20 flex">
              <div className="w-[200px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-[39px] w-full pb-6 border-b border-stone-300 flex-col justify-start items-start gap-2 flex">
                  <div className="text-neutral-50 text-xs font-semibold font-noto">
                    고객센터
                  </div>
                </div>
                <div className="h-[59px] flex-col justify-start items-start gap-2 flex">
                  <div className="text-neutral-50 text-xs font-light font-pre">
                    ojh@sumrov.com
                  </div>
                  <Link
                    href={"https://www.instagram.com/sumrov._"}
                    className="text-neutral-50 text-xs font-light font-pre"
                  >
                    @sumrov._
                  </Link>
                  <div className="text-neutral-50 text-xs font-light font-pre">
                    AM 10:00 ~ PM 06:00
                  </div>
                </div>
              </div>
              <div className="w-[200px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="h-[39px] pb-6 border-b w-full border-stone-300 flex-col justify-start items-start gap-2 flex">
                  <div className="text-neutral-50 text-xs font-semibold font-noto">
                    고객서비스
                  </div>
                </div>
                <div className="h-[58px] flex-col justify-start items-start gap-2 flex">
                  <Link
                    href={"/orderList"}
                    className="text-neutral-50 text-xs font-light font-pre"
                  >
                    배송조회
                  </Link>
                  <div className="text-neutral-50 text-xs font-light font-pre">
                    개인정보
                  </div>
                  <div className="text-neutral-50 text-xs font-light font-pre">
                    이용약관
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-end inline-flex">
            <div className="text-neutral-50 text-xs font-light font-pre">
              ⓒ 2024 SUMROV. All rights reserved
            </div>
            <div className="text-neutral-50 text-xs font-light font-pre">
              썸로브(sumrov) CEO : JAEHEE OH 사업자번호 : 626-62-00566
              통신판매신고번호 : 2023-전북군산-0504 호 (사업자 정보 확인)
              <br />
              이메일 문의 : ojh@sumrov.com 인스타 문의 : sumrov._
              개인정보보호책임자 : 오재희
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
