import { cn } from "@/lib/utils";
import React from "react";
import Footer from "../_components/footer";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

const Payment = () => {
  return (
    <>
      <div className="dark:bg-neutral-900 flex items-center flex-col">
        <div className="h-[106px] flex-col justify-center items-center flex">
          <div className="w-[800px] py-[15px] bg-zinc-800 justify-end items-center gap-[306px] inline-flex">
            <div className="pr-[15px] justify-center items-center gap-[305px] flex">
              <div className="justify-center items-center gap-2.5 flex">
                <Image
                  width={22}
                  height={22}
                  src="/images/logo.png"
                  alt="logo"
                />
                <div className="text-xl font-semibold font-nav">SUMROV</div>
              </div>
              <Link href={"/"}>
                <X className="w-[25px] h[25px]" />
              </Link>
            </div>
          </div>
          <div className="w-[800px] px-[350px] py-[15px] bg-stone-900 justify-center items-center gap-2.5 inline-flex">
            <div className="text-lg font-semibold font-pre">주문/결제</div>
          </div>
        </div>
        <div className="w-[800px] py-[50px] border border-stone-300 flex-col justify-center items-center inline-flex">
          <div className="flex-col justify-center items-center gap-[50px] flex">
            <div className="flex-col justify-center items-center gap-[50px] flex">
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="h-[53px] flex-col justify-center items-start gap-[25px] flex">
                  <div className="text-center text-lg font-medium font-noto">
                    배송지
                  </div>
                  <div className="w-[700px] h-[0px] border border-stone-300"></div>
                </div>
                <div className="h-[305px] flex-col justify-start items-start gap-3 flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <Label title="수령인" />
                    <Input className="w-[550px] h-[30px] rounded-sm border border-stone-300" />
                  </div>
                  <div className="w-[700px] justify-start items-start gap-10 inline-flex">
                    <div className="w-[550px] flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="justify-start items-start gap-[23px] inline-flex">
                        <div className="w-[138.16px] h-[33px] relative">
                          <div className="w-[138.16px] h-[33px] left-0 top-0 absolute border border-stone-300" />
                          <div className="left-[10px] top-[8px] absolute text-center text-neutral-400 text-sm font-normal font-noto">
                            우편번호
                          </div>
                        </div>
                        <div className="h-[33px] flex-col justify-between items-center inline-flex">
                          <div className="w-[77.76px] h-[16.87px] text-center text-sm font-normal font-noto">
                            주소검색
                          </div>
                        </div>
                      </div>
                      <div className="w-[550px] h-[33px] relative">
                        <div className="w-[550px] h-[33px] left-0 top-0 absolute rounded-sm border border-stone-300" />
                        <div className="left-[10px] top-[8px] absolute text-neutral-400 text-sm font-normal font-noto">
                          기본주소
                        </div>
                      </div>
                      <div className="w-[550px] h-[33px] relative">
                        <div className="w-[550px] h-[33px] left-0 top-0 absolute rounded-sm border border-stone-300" />
                        <div className="left-[10px] top-[8px] absolute text-neutral-400 text-sm font-normal font-noto">
                          상세주소 (선택)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <div className="w-[109.47px] h-[50px] text-sm font-normal font-noto">
                        전화번호
                      </div>
                      <div className="w-[15.10px] h-8 text-blue-500 text-xl font-normal font-noto">
                        *
                      </div>
                    </div>
                    <div className="h-[33px] justify-between items-center flex">
                      <div className="w-[150px] h-[33px] rounded-sm border border-stone-300" />
                      <div className="w-[5px] h-px bg-neutral-50" />
                      <div className="w-[150px] h-[33px] rounded-sm border border-stone-300" />
                      <div className="w-[5px] h-px bg-neutral-50" />
                      <div className="w-[150px] h-[33px] rounded-sm border border-stone-300" />
                    </div>
                  </div>
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <div className="w-[109.47px] h-[50px] text-sm font-normal font-noto">
                        이메일
                      </div>
                      <div className="w-[15.10px] h-8 text-blue-500 text-xl font-normal font-noto">
                        *
                      </div>
                    </div>
                    <div className="h-[33px] justify-between items-center flex">
                      <div className="w-[300px] h-[33px] rounded-sm border border-stone-300" />
                      <div className="w-[45.63px] h-[26px] text-center text-xs font-normal font-noto">
                        @
                      </div>
                      <div className="w-[200px] h-[33px] rounded-sm border border-stone-300" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[700px] h-[0px] border border-stone-300"></div>
              <div className="h-[33px] flex-col justify-center items-start gap-[23px] flex">
                <div className="w-[700px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <div className="text-sm font-extralight font-noto">
                      배송메세지
                    </div>
                  </div>
                  <div className="w-[550px] h-[33px] relative">
                    <div className="w-[550px] h-[33px] left-0 top-0 absolute rounded-sm border border-stone-300" />
                    <div className="left-[10px] top-[8px] absolute text-neutral-400 text-sm font-normal font-noto">
                      (선택)
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[700px] h-[0px] border border-stone-300"></div>
            </div>
            <div className="h-[276px] flex-col justify-start items-start gap-[50px] flex">
              <div className="text-lg font-medium font-noto">주문상품 확인</div>
              <div className="justify-start items-center gap-[50px] inline-flex">
                <img
                  className="w-[171px] h-[204px] border border-neutral-50"
                  src="https://via.placeholder.com/171x204"
                />
                <div className="self-stretch flex-col justify-start items-start gap-[25px] inline-flex">
                  <div className="text-sm font-medium font-noto">
                    Lorem ipsum dolor sit
                  </div>
                  <div className="text-neutral-400 text-xs font-normal font-noto">
                    Lorem ipsum dolor sit
                    <br />
                    -블랙/S
                  </div>
                  <div className="text-sm font-medium font-noto">
                    KWR 10,000
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="h-[190px] flex-col justify-start items-start flex">
              <div className="h-[190px] flex-col justify-start items-start gap-[50px] flex">
                <div className="text-center text-lg font-medium font-noto">
                  결제 정보
                </div>
                <div className="h-[118px] flex-col justify-start items-start gap-[30px] flex">
                  <div className="h-[71px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[700px] px-5 justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-normal font-noto">
                        상품금액
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-noto">
                        KWR 10,000
                      </div>
                    </div>
                    <div className="w-[700px] px-5 justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-normal font-noto">
                        총 할인금액
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-noto">
                        KWR 0
                      </div>
                    </div>
                    <div className="w-[700px] px-5 justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-normal font-noto">
                        배송비
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-noto">
                        KWR 3,000
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] px-5 justify-between items-center inline-flex">
                    <div className="text-sm font-normal font-noto">
                      총 결제 금액
                    </div>
                    <div className="text-right text-sm font-normal font-noto">
                      KWR 72,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="h-[172px] flex-col justify-center items-start gap-[25px] flex">
              <div className="text-center text-lg font-medium font-noto">
                결제 수단
              </div>
              <div className="h-[125px] flex-col justify-center items-center flex">
                <div className="w-[700px] h-[125px] px-[66px] py-[19px] border border-stone-300 flex-col justify-center items-center gap-2.5 flex">
                  <div className="h-[60px] flex-col justify-start items-start gap-5 flex">
                    <div className="justify-start items-start gap-[171px] inline-flex">
                      <div className="justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 relative">
                          <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-blue-500" />
                          <div className="w-[7.95px] h-[7.69px] left-[6.15px] top-[6.15px] absolute bg-blue-500 rounded-full" />
                        </div>
                        <div className="text-stone-300 text-sm font-semibold font-noto">
                          무통장 입금
                        </div>
                      </div>
                      <div className="justify-center items-center gap-2.5 flex">
                        <div className="w-5 h-5 relative">
                          <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-stone-300" />
                          <div className="w-[7.95px] h-[7.69px] left-[6.15px] top-[6.15px] absolute bg-stone-300 rounded-full" />
                        </div>
                        <div className="text-stone-300 text-sm font-semibold font-noto">
                          신용카드
                        </div>
                      </div>
                    </div>
                    <div className="justify-center items-center gap-2.5 inline-flex">
                      <div className="w-5 h-5 relative">
                        <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-stone-300" />
                        <div className="w-[7.95px] h-[7.69px] left-[6.15px] top-[6.15px] absolute bg-stone-300 rounded-full" />
                      </div>
                      <div className="text-stone-300 text-sm font-semibold font-noto">
                        실시간 계좌이체
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="h-[92px] flex-col justify-start items-start gap-[50px] flex">
              <div className="text-center text-lg font-medium font-noto">
                현금영수증
              </div>
              <div className="w-[700px] px-[100px] justify-between items-center inline-flex">
                <div className="h-5 justify-between items-center flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative">
                      <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-neutral-400" />
                      <div className="w-[7.95px] h-[7.69px] left-[6.15px] top-[6.15px] absolute bg-neutral-400 rounded-full" />
                    </div>
                    <div className="text-neutral-400 text-sm font-semibold font-noto">
                      현금영수증 신청
                    </div>
                  </div>
                  <div className="justify-start items-center gap-2.5 flex">
                    <div className="w-5 h-5 relative">
                      <div className="w-5 h-5 left-0 top-0 absolute rounded-full border-2 border-blue-500" />
                      <div className="w-[7.95px] h-[7.69px] left-[6.15px] top-[6.15px] absolute bg-blue-500 rounded-full" />
                    </div>
                    <div className="text-neutral-400 text-sm font-semibold font-noto">
                      신청 안함
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="h-5 flex-col justify-center items-start gap-2.5 flex">
              <div className="px-[50px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-5 h-5 relative">
                  <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                </div>
                <div className="text-sm font-normal font-pre">
                  주문 내용을 확인하였으며 약관에 동의합니다.
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[50px] px-[234px] py-[9px] bg-neutral-50 justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-neutral-900 text-base font-semibold font-noto">
                결제하기
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const Label = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className }, ref) => {
  return (
    <div className={cn("justify-center items-center gap-0.5 flex", className)}>
      <div className="dark:text-neutral-300 text-[14px] font-medium font-pre">
        {title}
      </div>
      <div className="w-1.5 h-[7px] flex justify-center items-center text-blue-500 text-[11px] font-medium font-pre">
        *
      </div>
    </div>
  );
});
Label.displayName = "Label";

const Input = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[11px] font-normal font-pre pl-2 border-neutral-300",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export default Payment;
