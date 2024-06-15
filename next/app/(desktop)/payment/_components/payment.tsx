"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Input } from "../../(auth)/_components/input";
import Footer from "../../_components/footer";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { Label as Label3 } from "@/components/ui/label";
import { cart } from "../../cart/colums";

declare global {
  interface Window {
    daum: any;
  }
}
interface IAddr {
  address: string;
  zonecode: string;
}

const Payment = ({ data }: { data: cart[] }) => {
  const pricesum = data
    ?.map((ai, i) => ai.price * ai.amount)
    .reduce((pre, cur) => pre + cur, 0);

  const salesum = data
    ?.map((ai, i) => (ai.price * ai.sale) / 100)
    .reduce((pre, cur) => pre + cur, 0);

  const [checked, setChecked] = React.useState("false");
  const [recipient, setRecipient] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");
  const [addrDetail, setAddrDetail] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [dm, setDm] = useState("");
  const email = email1 + "@" + email2;
  const tel = tel1 + "-" + tel2 + "-" + tel3;
  const { toast } = useToast();
  const toCheck = () => {
    if (!recipient) {
      toast({
        title: "수령인명이 비어있습니다.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[가-힣]{2,10}$/.test(recipient)) {
      toast({
        title: "이름이 한글이 아닙니다.",
        variant: "destructive",
      });
      return;
    }
    if (!zonecode || !address) {
      toast({
        title: "주소가 비어있습니다.",
        variant: "destructive",
      });
      return;
    }
    if (!tel1 || !tel2 || !tel3) {
      toast({
        title: "번화번호가 비어있습니다.",
        variant: "destructive",
      });
      return;
    }
    if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(tel)) {
      toast({
        title: "전화번호가 형식에 맞지 않습니다.",
        variant: "destructive",
      });
      return;
    }
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
        email
      )
    ) {
      toast({
        title: "이메일 형식이 맞지 않습니다.",
        variant: "destructive",
      });
      return;
    }
    if (checked != "false") {
      toast({
        title: "약관에 동의해주세요.",
        variant: "destructive",
      });
      return;
    }
  };

  const searchAddress = () => {
    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        (document.getElementById("address") as HTMLInputElement).value =
          data.address;
        (document.getElementById("zonecode") as HTMLInputElement).value =
          data.zonecode;
        document.getElementById("addrDetail")?.focus();
      },
    }).open();
  };

  return (
    <>
      <script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
      <div className="dark:bg-neutral-900 flex items-center flex-col">
        <div className="h-[106px] flex-col justify-center items-center flex">
          <div className="w-[800px] py-[15px] bg-white justify-end items-center gap-[306px] inline-flex">
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
          <div className="w-[800px] px-[350px] py-[15px] bg-[#5A5A5A] justify-center items-center gap-2.5 inline-flex">
            <div className=" text-white text-lg font-semibold font-pre">
              주문/결제
            </div>
          </div>
        </div>
        <div className="w-[800px] py-[50px] border border-stone-300 flex-col justify-center items-center inline-flex">
          <div className="flex-col justify-center items-center gap-[50px] flex">
            <form>
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="flex-col justify-center items-center gap-[50px] flex">
                  <div className="h-[53px] flex-col justify-center items-start gap-[25px] flex">
                    <div className="text-center text-lg font-medium font-pre">
                      배송지
                    </div>
                    <div className="w-[700px] h-[0px] border border-stone-300"></div>
                  </div>
                  <div className="h-[305px] flex-col justify-start items-start gap-3 flex">
                    <div className="w-[700px] justify-between items-center inline-flex">
                      <Label title="수령인" />
                      <Input
                        value={recipient}
                        type="text"
                        onChange={(e) => setRecipient(e.target.value)}
                        id="Recipient"
                        className="w-[550px] h-[30px] rounded-sm border border-stone-300"
                      />
                    </div>
                    <div className="w-full justify-start items-start gap-10 inline-flex">
                      <div className="flex gap-[23px] w-full justify-between">
                        <div>
                          <Label title="주소" />
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <div className="flex flex-row gap-[23px] items-center">
                            <Input
                              value={zonecode}
                              onChange={(e) => setZonecode(e.target.value)}
                              id="zonecode"
                              placeholder="우편 번호"
                              className="w-[150px] h-[30px] rounded-sm border border-stone-300"
                            />
                            <button
                              onClick={searchAddress}
                              className="w-[72px] h-[26px] flex justify-center items-center bg-gray-200 rounded-sm border border-neutral-300"
                            >
                              <div className="w-[39px] h-[11px] flex items-center dark:text-neutral-900 dark:bg-stone-300 justify-center text-neutral-900 text-[11px] font-normal font-pre">
                                주소검색
                              </div>
                            </button>
                          </div>
                          <Input
                            value={address}
                            id="address"
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="기본주소"
                            className="w-[550px] h-[30px] rounded-sm border border-stone-300"
                          />
                          <Input
                            value={addrDetail}
                            id="addrDetail"
                            onChange={(e) => setAddrDetail(e.target.value)}
                            placeholder="상세주소 (선택)"
                            className="w-[550px] h-[30px] rounded-sm border border-stone-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                      <Label title="전화번호" />
                      <div className="w-[550px] flex flex-row justify-between">
                        <Input
                          value={tel1}
                          onChange={(e) => setTel1(e.target.value)}
                          className="w-[130px] h-[30px] rounded-sm border border-stone-300"
                          id="tel1"
                        />
                        <div>-</div>
                        <Input
                          value={tel2}
                          className="w-[130px] h-[30px] rounded-sm border border-stone-300"
                          id="tel2"
                          onChange={(e) => setTel2(e.target.value)}
                        />
                        <div>-</div>
                        <Input
                          value={tel3}
                          onChange={(e) => setTel3(e.target.value)}
                          className="w-[130px] h-[30px] rounded-sm border border-stone-300"
                          id="tel3"
                        />
                      </div>
                    </div>
                    <div className="w-full justify-between items-center inline-flex">
                      <Label title="이메일" />
                      <div className="w-[550px] flex flex-row justify-between">
                        <Input
                          value={email1}
                          className="w-[300px] h-[30px] rounded-sm border border-stone-300"
                          id="email1"
                          onChange={(e) => setEmail1(e.target.value)}
                        />
                        <div>@</div>
                        <Input
                          value={email2}
                          onChange={(e) => setEmail2(e.target.value)}
                          className="w-[200px] h-[30px] rounded-sm border border-stone-300"
                          id="email2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[700px] h-[0px] border border-stone-300"></div>
                <div className="h-[33px] flex-col justify-center items-start gap-[23px] flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <Label2 title="배송메세지" />
                    <Input
                      value={dm}
                      onChange={(e) => setDm(e.target.value)}
                      id="dm"
                      placeholder="(선택)"
                      className="w-[550px] h-[30px] rounded-sm border border-stone-300"
                    />
                  </div>
                </div>
                <div className="w-[700px] h-[0px] border border-stone-300"></div>
              </div>
            </form>
            <div className="w-[700px] flex-col justify-start items-start gap-[50px] flex">
              <div className="text-lg font-medium font-pre">주문상품 확인</div>
              {data?.map((post, i) => (
                <div
                  className="justify-start items-center gap-[50px] inline-flex"
                  key={i}
                >
                  {post.image ? (
                    <img
                      className="w-[171px] h-[204px] border border-neutral-50"
                      src={post.image}
                    />
                  ) : (
                    <img
                      className="w-[171px] h-[204px] border border-neutral-50"
                      src="https://via.placeholder.com/171x204"
                    />
                  )}
                  <div className="self-stretch flex-col justify-start items-start gap-[20px] inline-flex">
                    <div className="text-sm font-medium font-pre">
                      {post.name}
                    </div>

                    <div className="flex gap-4 w-full flex-col">
                      <div className="text-zinc-600 text-xs font-normal font-pre">
                        -{post.color}/{post.size}&nbsp; 수량 {post.amount}개
                      </div>
                      <div className="text-sm font-medium font-pre">
                        KRW {post.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="h-[190px] flex-col justify-start items-start flex">
              <div className="h-[190px] flex-col justify-start items-start gap-[50px] flex">
                <div className="text-center text-lg font-medium font-pre">
                  결제 정보
                </div>
                <div className="h-[118px] flex-col justify-start items-start gap-[30px] flex">
                  <div className="h-[71px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[700px] px-5 justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-normal font-pre">
                        상품금액
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-pre">
                        KRW {pricesum?.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-[700px] px-5 justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-normal font-pre">
                        총 할인금액
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-pre">
                        KRW {salesum?.toLocaleString()}
                      </div>
                    </div>
                    <div className="w-[700px] px-5 justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-normal font-pre">
                        배송비
                      </div>
                      <div className="text-right text-neutral-400 text-sm font-normal font-pre">
                        KRW 3,000
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] px-5 justify-between items-center inline-flex">
                    <div className="text-sm font-normal font-pre">
                      총 결제 금액
                    </div>
                    <div className="text-right text-sm font-normal font-pre">
                      KRW {(pricesum - salesum + 3000).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="flex flex-col w-full pb-[30px]">
              <div className="text-black dark:text-white text-[13px] my-[22px] flex justify-start w-full font-medium font-pre text-lg">
                결제수단
              </div>
              <div className="flex flex-col w-full h-[109px] bg-white dark:bg-black border dark:border-none border-gray-200 justify-center">
                <form>
                  <RadioGroup
                    defaultValue="option-one"
                    className="w-full flex justify-center"
                  >
                    <div className="w-full flex justify-center">
                      <div className="flex flex-row">
                        <RadioGroupItem value="option-one" id="one" />
                        <label
                          className="text-neutral-400 text-[13px] font-normal font-pre"
                          htmlFor="one"
                        >
                          무통장입금
                        </label>
                      </div>
                    </div>
                  </RadioGroup>
                </form>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="flex flex-col w-full pb-[30px]">
              <div className="text-black dark:text-white text-[13px] my-[22px] flex justify-start w-full font-medium font-pre text-lg">
                현금영수증
              </div>
              <div className="flex flex-col w-full h-[109px] dark:bg-black dark:border-nonejustify-center">
                <form className="h-full">
                  <RadioGroup
                    defaultValue="option-two"
                    className="w-full h-full flex justify-center items-center"
                  >
                    <div className="w-full flex justify-center gap-[41px]">
                      <div className="flex flex-row">
                        <RadioGroupItem value="option-one" id="one" />
                        <label
                          className="text-neutral-400 text-[13px] font-normal font-pre"
                          htmlFor="two"
                        >
                          현금영수증 신청
                        </label>
                      </div>
                      <div className="flex flex-row">
                        <RadioGroupItem value="option-two" id="two" />
                        <label
                          className="text-neutral-400 text-[13px] font-normal font-pre"
                          htmlFor="three"
                        >
                          신청 안함
                        </label>
                      </div>
                    </div>
                  </RadioGroup>
                </form>
              </div>
            </div>
            <div className="w-[700px] h-[0px] border border-stone-300"></div>
            <div className="h-5 flex-col justify-center items-start gap-2.5 flex">
              <div className="px-[50px] justify-center items-center gap-2.5 inline-flex">
                <Checkbox
                  id="allCheck"
                  onCheckedChange={(e) => {
                    if (checked == "true") {
                      setChecked("false");
                    } else {
                      setChecked("true");
                    }
                    console.log(checked);
                  }}
                />
                <Label3
                  htmlFor="allCheck"
                  className="text-sm font-normal font-pre"
                >
                  주문 내용을 확인하였으며 약관에 동의합니다.
                </Label3>
              </div>
            </div>
            <button
              type="submit"
              onClick={toCheck}
              className="w-[700px] h-[50px] px-[234px] py-[9px] bg-black justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-white text-base font-semibold font-pre">
                결제하기
              </div>
            </button>
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
const Label2 = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className }, ref) => {
  return (
    <div className={cn("justify-center items-center gap-0.5 flex", className)}>
      <div className="dark:text-neutral-300 text-[14px] font-medium font-pre">
        {title}
      </div>
    </div>
  );
});
Label2.displayName = "Label2";

export default Payment;
