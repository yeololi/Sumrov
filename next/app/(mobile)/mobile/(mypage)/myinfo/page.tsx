"use client";

import { Input } from "../../(auth)/_components/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useState } from "react";
import CheckboxGroup from "../../_components/checkBoxGroup";
import { useSession } from "next-auth/react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

declare global {
  interface Window {
    daum: any;
  }
}

interface IAddr {
  address: string;
  zonecode: string;
}

interface formElement extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email1: HTMLInputElement;
  email2: HTMLInputElement;
  password: HTMLInputElement;
  passwordCheck: HTMLInputElement;
  zonecode: HTMLInputElement;
  address: HTMLInputElement;
  addrDetail: HTMLInputElement;
  tel1: HTMLInputElement;
  tel2: HTMLInputElement;
  tel3: HTMLInputElement;
  check2: HTMLInputElement;
  check3: HTMLInputElement;
}

interface formData extends HTMLFormElement {
  readonly elements: formElement;
}
const Mypage_mine = () => {
  const { data: session } = useSession();

  const { toast } = useToast();

  const [input, setInput] = useState({
    name: session?.user.name,
    email1: session?.user.email.split("@")[0],
    email2: session?.user.email.split("@")[1],
    zonecode: session?.user.zonecode,
    address: session?.user.address,
    addrDetail: session?.user.addrDetail,
    tel1: session?.user.tel.split("-")[0],
    tel2: session?.user.tel.split("-")[1],
    tel3: session?.user.tel.split("-")[2],
    password: "",
    passwordCheck: "",
    check2: "",
    check3: "",
    gender: session?.user.gender,
    year: session?.user.year,
    month: session?.user.month,
    day: session?.user.day,
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setInput((prevInputs) => ({ ...prevInputs, [id]: value }));
  };

  const searchAddress = () => {
    // new window.daum.Postcode({
    //   oncomplete: function (data: IAddr) {
    //     (document.getElementById("address") as HTMLInputElement).value =
    //       data.address;
    //     (document.getElementById("zonecode") as HTMLInputElement).value =
    //       data.zonecode;
    //     document.getElementById("addrDetail")?.focus();
    //   },
    // }).open();
  };

  const onSubmit = async (e: FormEvent<formData>) => {
    e.preventDefault();

    // const target = e.currentTarget.elements;
    // const email = target.email1.value + "@" + target.email2.value;
    // const tel =
    //   target.tel1.value + "-" + target.tel2.value + "-" + target.tel3.value;
    // const password = target.password.value;
    // const name = target.name.value;
    // const zonecode = target.zonecode.value;
    // const address = target.address.value;
    // const addrDetail = target.addrDetail.value;

    // if (!/^[가-힣]{2,10}$/.test(name)) {
    //   toast({
    //     title: "이름이 한글이 아닙니다.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // if (
    //   !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
    //     email
    //   )
    // ) {
    //   toast({
    //     title: "이메일 형식이 맞지 않습니다.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // if (password !== target.passwordCheck.value) {
    //   toast({
    //     title: "비밀번호가 일치하지 않습니다.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // if (
    //   !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/.test(password)
    // ) {
    //   toast({
    //     title: "비밀번호가 형식에 맞지 않습니다.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(tel)) {
    //   toast({
    //     title: "전화번호가 형식에 맞지 않습니다.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    // const body = {
    //   name: name,
    //   email: email,
    //   password: password,
    //   zonecode: +zonecode,
    //   address: address,
    //   addrDetail: addrDetail,
    //   tel: tel,
    // };

    // try {
    //   await fetch("/api/auth/signup", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
  };
  return (
    <>
      <script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-col items-center pb-[41px]">
          <form
            onSubmit={onSubmit}
            className="flex-col justify-start items-start gap-[31px] flex"
          >
            <div className="flex-col justify-start items-start gap-3.5 flex">
              <div className="h-[30px] border-b border-gray-200 w-full">
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  회원정보
                </div>
              </div>
              <div className="h-[30px] border-b border-gray-200 w-full">
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  기본정보
                </div>
              </div>
              <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
                <Label className=" flex gap-0.5">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    이름
                  </div>
                  <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                    *
                  </div>
                </Label>
                <Input
                  readOnly
                  onChange={onChange}
                  value={input.name}
                  className="w-[336px] h-[34px]"
                  placeholder="이름"
                  type={"text"}
                  id="name"
                />
              </div>
              <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
                <Label className=" flex gap-0.5">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    성별
                  </div>
                  <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                    *
                  </div>
                </Label>
                <RadioGroup
                  defaultValue={input.gender}
                  className="flex flex-1 justify-between"
                >
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">남</Label>
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">여</Label>
                </RadioGroup>
              </div>
              <div className="flex-col justify-start items-start gap-[9px] flex">
                <Label className=" flex gap-0.5">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    E-mail
                  </div>
                  <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                    *
                  </div>
                </Label>
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.email1}
                    className="w-[157px] h-[34px]"
                    placeholder="이메일"
                    type={"text"}
                    id="email1"
                  />
                  <div className="text-black dark:text-white text-[14px] font-medium font-pre">
                    @
                  </div>
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.email2}
                    className="w-[157px] h-[34px]"
                    placeholder="mail.com"
                    type={"text"}
                    id="email2"
                  />
                </div>
              </div>
              <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
                <Label className=" flex gap-0.5">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    Passward
                  </div>
                  <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                    *
                  </div>
                </Label>
                <Input
                  readOnly
                  onChange={onChange}
                  value={input.password}
                  className="w-[336px] h-[34px]"
                  placeholder="비밀번호"
                  type={"password"}
                  id="password"
                />
              </div>
              <div className="text-neutral-400 text-[11px] font-medium font-pre">
                (영문/특수문자가 하나이상, 8~16자)
              </div>
              <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
                <Label className=" flex gap-0.5">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    Passward 확인
                  </div>
                  <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                    *
                  </div>
                </Label>
                <Input
                  readOnly
                  onChange={onChange}
                  value={input.passwordCheck}
                  className="w-[336px] h-[34px]"
                  placeholder="비밀번호 확인"
                  type={"password"}
                  id="passwordCheck"
                />
              </div>
              <div className="h-14 flex-col justify-start items-start gap-[9px] flex">
                <Label className=" flex gap-0.5">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    생년월일
                  </div>
                  <div className="w-1.5 h-[7px] text-blue-500 text-[11px] font-medium font-pre">
                    *
                  </div>
                </Label>
                <Input
                  readOnly
                  onChange={onChange}
                  value={[input.year, input.month, input.day].join("-")}
                  className="w-[336px] h-[34px]"
                  placeholder="비밀번호 확인"
                  type={"text"}
                  id="birth"
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-7 flex">
              <div className="h-[30px] border-b border-gray-200 w-full">
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  배송지
                </div>
              </div>
              <div className="justify-start items-start gap-[10px] flex-col flex">
                <Label className=" flex">
                  <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                    주소
                  </div>
                </Label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Input
                      readOnly
                      onChange={onChange}
                      value={input.zonecode}
                      className="w-[106px] h-[34px]"
                      placeholder="우편번호"
                      type={"text"}
                      id="zonecode"
                    />
                    {/* <div
                      onClick={searchAddress}
                      className="cursor-pointer w-[106px] h-[34px] flex justify-center items-center bg-gray-200 rounded-none dark:placeholder:text-neutral-400 dark:bg-gray-200 dark:border-neutral-300  border border-neutral-300"
                    >
                      <div className="flex items-center dark:text-black justify-center text-black text-[13px] font-medium font-pre">
                        주소검색
                      </div>
                    </div> */}
                  </div>
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.address}
                    className="w-[336px] h-[34px]"
                    placeholder="기본주소"
                    type={"text"}
                    id="address"
                  />
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.addrDetail}
                    className="w-[336px] h-[34px]"
                    placeholder="상세주소 (선택)"
                    type={"text"}
                    id="addrDetail"
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[9px] flex">
                <div className="text-black dark:text-white text-[11px] font-medium font-pre">
                  휴대전화
                </div>
                <div className="justify-start items-center gap-1.5 inline-flex">
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.tel1}
                    className="w-[100px] h-[34px]"
                    placeholder=""
                    type={"text"}
                    id="tel1"
                  />
                  <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                    -
                  </div>
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.tel2}
                    className="w-[100px] h-[34px]"
                    placeholder=""
                    type={"text"}
                    id="tel2"
                  />
                  <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                    -
                  </div>
                  <Input
                    readOnly
                    onChange={onChange}
                    value={input.tel3}
                    className="w-[100px] h-[34px]"
                    placeholder=""
                    type={"text"}
                    id="tel3"
                  />
                </div>
              </div>
            </div>
            {/* <Button
              variant={"outline"}
              className="text-black dark:text-black text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-white border border-neutral-300"
            >
              저장하기
            </Button> */}
          </form>
          <div className="h-[30px] border-b border-solid border-[#00000040] dark:border-[#ffffff40] w-[100vw]"></div>
        </div>
      </div>
    </>
  );
};

export default Mypage_mine;
