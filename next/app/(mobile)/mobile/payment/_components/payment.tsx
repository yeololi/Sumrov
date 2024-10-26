"use client";

import { cart } from "@/app/(desktop)/cart/colums";
import { salePostType } from "@/app/api/sale/post/route";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label as Label2 } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
  const { data: session } = useSession();

  console.log(session?.user.name);

  const pricesum = data
    ?.map((ai, i) => ai.price * ai.amount)
    .reduce((pre, cur) => pre + cur, 0);

  const salesum = data
    ?.map((ai, i) => (ai.price * ai.sale) / 100)
    .reduce((pre, cur) => pre + cur, 0);

  const [checked, setChecked] = useState(false);
  const [recipient, setRecipient] = useState(session?.user.name!);
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel3, setTel3] = useState("");
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [dm, setDm] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const { toast } = useToast();

  const router = useRouter();

  const toCheck = (addr: {
    zonecode: string;
    address: string;
    addrDetail: string;
  }) => {
    const email = email1 + "@" + email2;
    const tel = tel1 + "-" + tel2 + "-" + tel3;

    if (!recipient) {
      toast({
        title: "수령인명이 비어있습니다.",
        variant: "destructive",
      });
      return false;
    }
    if (!/^[가-힣]{2,10}$/.test(recipient)) {
      toast({
        title: "이름이 한글이 아닙니다.",
        variant: "destructive",
      });
      return false;
    }
    if (!addr.zonecode || !addr.address) {
      toast({
        title: "주소가 비어있습니다.",
        variant: "destructive",
      });
      return false;
    }
    if (!tel1 || !tel2 || !tel3) {
      toast({
        title: "번화번호가 비어있습니다.",
        variant: "destructive",
      });
      return false;
    }
    if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(tel)) {
      toast({
        title: "전화번호가 형식에 맞지 않습니다.",
        variant: "destructive",
      });
      return false;
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
      return false;
    }
    if (!checked) {
      toast({
        title: "약관에 동의해주세요.",
        variant: "destructive",
      });
      return false;
    }
    return true;
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

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    setisLoading(() => true);
    e.preventDefault();
    const target = e.currentTarget;

    try {
      const zonecode = target.zonecode.value as string;
      const address = target.address.value as string;
      const addrDetail = target.addrDetail.value as string;

      const par = { zonecode, address, addrDetail };

      if (!toCheck(par)) {
        setisLoading(() => false);
        return;
      }

      const tel = tel1 + "-" + tel2 + "-" + tel3;

      const body: salePostType = {
        customer_name: recipient,
        addr: [zonecode, address, addrDetail].join(";"),
        product: JSON.stringify(data.map((value) => value.id)),
        amount: JSON.stringify(
          data.map((value) => ({
            amount: value.amount,
            color: value.color,
            size: value.size,
          }))
        ),
        phone: tel,
        price: JSON.stringify(data.map((value) => value.price)),
        post_num: "",
      };

      const res = await fetch("/api/sale/post", {
        method: "POST",
        body: JSON.stringify(body),
      });

      console.log(res);
      await Promise.all(
        data.map(async (value) => {
          const delCart = await fetch(`/api/del/delCart/${value._id}`, {
            method: "DELETE",
          }).then((r) => r.json());
        })
      );

      router.replace("/mobile/orderList");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
      <div className="w-full h-9 bg-gray-600 flex items-center justify-between px-[10px]">
        <div className="text-center text-neutral-50 dark:text-neutral-900 text-sm font-medium font-pre">
          주문/결제
        </div>
        <Link href={"/mobile/"}>
          <X
            strokeWidth={1}
            className="w-[26px] h-[26px] text-neutral-50 dark:text-neutral-900"
          />
        </Link>
      </div>

      <form
        onSubmit={submit}
        className="w-full flex flex-col pt-[25px] items-center dark:bg-neutral-900"
      >
        <div className="w-[336px] h-7 border-b border-gray-200">
          <div className="dark:text-white text-black text-[13px] font-medium font-pre">
            배송지
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-[19px] border-b pb-4 border-gray-200">
          <div className="justify-center items-center gap-[27px] flex">
            <Label title="받는사람" />
            <Input
              className="w-[261px] h-[26px]"
              readOnly
              value={recipient}
              id="Recipient"
              type="text"
            />
          </div>
          <div className="justify-start items-start gap-[46px] flex">
            <Label title="주소" className="mt-1" />
            <div className="flex flex-col gap-[3px]">
              <div className="flex gap-1">
                <Input
                  placeholder="우편 번호"
                  className="w-[72px] h-[26px]"
                  id="zonecode"
                  name="zonecode"
                />
                <button
                  onClick={searchAddress}
                  type="button"
                  className="w-[72px] h-[26px] flex justify-center items-center bg-gray-200 rounded-sm border border-neutral-300"
                >
                  <div className="w-[39px] h-[11px] flex items-center dark:text-neutral-900 dark:bg-stone-300 justify-center text-neutral-900 text-[11px] font-normal font-pre">
                    주소검색
                  </div>
                </button>
              </div>
              <Input
                id="address"
                name="address"
                placeholder="기본주소"
                className="w-[261px] h-[26px] bg-white border border-neutral-300"
              />
              <Input
                id="addrDetail"
                name="addrDetail"
                placeholder="상세주소(선택)"
                className="w-[261px] h-[26px] bg-white border border-neutral-300"
              />
            </div>
          </div>
          <div className="justify-start items-center gap-[27px] flex">
            <Label title="휴대전화" />
            <div className="gap-1 flex">
              <Input
                className="w-[72px] h-[26px]"
                value={tel1}
                onChange={(e) => setTel1(e.target.value)}
              />
              <div className="text-black dark:text-neutral-50 text-[11px] font-normal flex justify-center items-center font-pre">
                -
              </div>
              <Input
                className="w-[72px] h-[26px]"
                value={tel2}
                onChange={(e) => setTel2(e.target.value)}
              />
              <div className="text-black dark:text-neutral-50 text-[11px] font-normal flex justify-center items-center font-pre">
                -
              </div>
              <Input
                className="w-[72px] h-[26px]"
                value={tel3}
                onChange={(e) => setTel3(e.target.value)}
              />
            </div>
          </div>
          <div className="justify-start items-center gap-[36px] flex">
            <Label title="이메일" />
            <div className="gap-1.5 flex">
              <Input
                className="w-[120px] h-[26px]"
                value={email1}
                onChange={(e) => setEmail1(e.target.value)}
              />
              <div className="text-black dark:text-neutral-50 text-[11px] font-normal flex justify-center items-center font-pre">
                @
              </div>
              <Input
                className="w-[120px] h-[26px]"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="justify-center items-center gap-[27px] flex mt-[19px] pb-[21px] border-b border-gray-200">
          <div className="justify-center items-center gap-0.5 flex">
            <div className="text-neutral-600 dark:text-neutral-300 text-[11px] font-medium font-pre">
              배송메세지
            </div>
          </div>
          <Input
            placeholder="(선택)"
            className="w-[261px] h-[26px]"
            value={dm}
            onChange={(e) => setDm(e.target.value)}
            id="dm"
          />
        </div>
        <div className="w-full flex pt-[22px] pl-[20px] justify-center">
          <div className="w-[335px] flex flex-col gap-[9px] border-b border-gray-200 pb-[26px]">
            <div className="text-black dark:text-white text-[13px] font-medium font-pre">
              주문상품확인
            </div>
            {data?.map((post, i) => (
              <div className="flex gap-[21px]" key={i}>
                {post.image ? (
                  <img
                    className="w-[70px] h-[93px] border border-black"
                    src={post.image}
                  />
                ) : (
                  <img
                    className="w-[70px] h-[93px] border border-black"
                    src="https://via.placeholder.com/70x93"
                  />
                )}
                <div className="flex flex-col">
                  <div className="text-black text-xs font-normal font-pre dark:text-white">
                    {post.name}
                  </div>
                  <div className="mt-[9px]">
                    <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-neutral-300">
                      {post.name}
                    </div>
                    <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-neutral-300">
                      -{post.color}/{post.size}&nbsp; 수량 {post.amount}개
                    </div>
                  </div>
                  <div className="text-neutral-600 text-[10px] mt-[19px] font-normal font-pre dark:text-neutral-300">
                    KRW {post.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[22px] w-[336px] flex flex-col gap-[9px] pb-[23px] border-b border-gray-200">
          <div className="w-full flex justify-start text-black text-[13px] font-medium font-pre dark:text-white">
            결제정보
          </div>
          <div className="flex justify-between">
            <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-white">
              상품금액
            </div>
            <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-white">
              KRW {pricesum?.toLocaleString()}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-white">
              총 할인금액
            </div>
            <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-white">
              KRW {salesum?.toLocaleString()}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-white">
              배송비
            </div>
            <div className="text-neutral-600 text-[10px] font-normal font-pre dark:text-white">
              KRW 3,000
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-black text-[11px] font-medium font-pre dark:text-white">
              총 결제 금액
            </div>
            <div className="text-black text-[11px] font-medium font-pre dark:text-white">
              KRW {(pricesum - salesum + 3000).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[335px] pb-[30px] border-b border-gray-200">
          <div className="text-black dark:text-white text-[13px] my-[22px] flex justify-start w-full font-medium font-pre">
            결제수단
          </div>
          <div className="w-[335px] h-[109px] bg-white dark:bg-black border dark:border-none border-gray-200 pl-[18px] pt-[22px]">
            <RadioGroup defaultValue="option-one" className="flex flex-col">
              <div className="flex gap-[31px]">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="one" />
                  <label
                    className="text-neutral-400 text-[13px] font-normal font-pre"
                    htmlFor="one"
                  >
                    무통장입금
                  </label>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="two" />
                  <label
                    className="text-neutral-400 text-[13px] font-normal font-pre"
                    htmlFor="two"
                  >
                    신용카드
                  </label>
                </div> */}
              </div>
              {/* <div className="flex items-center space-x-2 mt-[30px]">
                <RadioGroupItem value="option-three" id="three" />
                <label
                  className="text-neutral-400 text-[13px] font-normal font-pre"
                  htmlFor="three"
                >
                  실시간 계좌이체
                </label>
              </div> */}
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col w-[335px] pb-[30px] border-b border-gray-200">
          <div className="text-black dark:text-white text-[13px] my-[22px] flex justify-start w-full font-medium font-pre">
            현금영수증
          </div>
          <RadioGroup defaultValue="no" className="flex gap-[22px]">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="one2" />
              <label
                className="text-neutral-400 text-[13px] font-normal font-pre"
                htmlFor="one2"
              >
                현금영수증 신청
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="two2" />
              <label
                className="text-neutral-400 text-[13px] font-normal font-pre"
                htmlFor="two2"
              >
                신청안함
              </label>
            </div>
          </RadioGroup>
        </div>
        <div className="text-black dark:text-white text-[13px] gap-2 font-normal font-pre w-full flex pl-[22px] py-[23px]">
          <Checkbox
            id="allCheck"
            onCheckedChange={(e) => {
              setChecked((value) => !value);
            }}
          />
          <Label2 htmlFor="allCheck" className="text-sm font-normal font-pre">
            주문 내용을 확인하였으며 약관에 동의합니다.
          </Label2>
        </div>
        <Button className="w-[335px] h-[41px] rounded-none mb-[61px] text-[13px] font-medium font-pre text-white dark:text-black">
          결제하기
        </Button>
      </form>
    </>
  );
};

const Label = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className }, ref) => {
  return (
    <div className={cn("justify-center items-center gap-0.5 flex", className)}>
      <div className="text-neutral-600 dark:text-neutral-300 text-[11px] font-medium font-pre">
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
