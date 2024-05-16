import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-[28px] w-[375px] h-[593px] py-20 dark:bg-zinc-900 bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="h-[433px] px-5 flex-col justify-center items-start gap-[120px] flex">
          <div className="self-stretch h-[227px] flex-col justify-start items-start gap-20 flex">
            <div className="flex-col justify-center items-start gap-[15px] flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-50 text-[28px] font-bold font-nav">
                  SUMROV
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-20 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch h-[39px] pb-6 border-b border-stone-300 flex-col justify-start items-start gap-2 flex">
                  <div className="text-neutral-50 text-xs font-semibold font-noto">
                    고객센터
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-start items-start gap-2 flex">
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
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch h-[39px] pb-6 border-b border-stone-300 flex-col justify-start items-start gap-2 flex">
                  <div className="text-neutral-50 text-xs font-semibold font-noto">
                    고객서비스
                  </div>
                </div>
                <div className="self-stretch h-[58px] flex-col justify-start items-start gap-2 flex">
                  <Link
                    href={"/mobile/mypage_search"}
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
          <div className="self-stretch h-[86px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-neutral-50 text-xs font-light font-pre">
              ⓒ 2024 SUMROV. All rights reserved
            </div>
            <div className="self-stretch text-neutral-50 text-xs font-light font-pre">
              썸로브(sumrov) CEO : JAEHEE OH 사업자번호 :
              626-62-00566통신판매신고번호 : 2023-전북군산-0504 호 (사업자 정보
              확인)
              <br />
              이메일 문의 : ojh@sumrov.com 인스타 문의 : @sumrov._
              개인정보보호책임자 : 오재희
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
