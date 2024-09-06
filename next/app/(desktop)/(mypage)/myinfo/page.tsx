"use client";

import { Label } from "@/components/ui/label";
import Header from "../../_components/header";
import CheckboxGroup from "../../_components/checkBoxGroup";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "../../(auth)/_components/input";
import { useSession } from "next-auth/react";

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
  birth: HTMLInputElement;
}

interface formData extends HTMLFormElement {
  readonly elements: formElement;
}

const Signup = () => {
  const { data: session } = useSession();

  const router = useRouter();

  console.log(session);

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

  return (
    <>
      <script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
      <Header />
      <div className="w-full justify-center flex pt-[200px] pb-[120px] ">
        <div className="w-[800px] flex-col justify-start items-center inline-flex ">
          <div className="text-black dark:text-neutral-50 text-[32px] font-semibold font-nav tracking-[3.20px]">
            MY INFO
          </div>
          <form
            // onSubmit={onSubmit}
            className="flex-col justify-center items-center gap-10 flex"
          >
            <div className="self-stretch  w-[800px] py-6 flex-col justify-center items-center gap-6 flex">
              <div className="h-[35px]  flex-col justify-center items-start gap-4 flex w-full">
                <div className="text-center text-black dark:text-neutral-50 text-base font-medium font-noto">
                  기본 정보
                </div>
                <div className="self-stretch h-[0px] border-2 border-gray-200"></div>
              </div>
              <div className="w-[800px] flex-col justify-start items-start gap-6 flex">
                <div className="flex w-full justify-between">
                  <div className="w-full self-stretch h-[37px] justify-between items-center inline-flex">
                    <Label className="h-6 justify-start items-center gap-1 flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-light font-pre">
                        이름
                      </div>
                      <div className="text-blue-500 text-xl font-normal font-pre">
                        *
                      </div>
                    </Label>
                    <Input
                      readOnly
                      value={input.name}
                      className="w-[410px]"
                      id="name"
                    />
                  </div>
                  <div className="w-[300px] h-[37px] justify-between items-center inline-flex ml-[10px] mr-[20px]">
                    <Label className="w-[50px] ml-[40px] mr-[10px] h-6 justify-start items-center gap-1 flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-light font-pre">
                        성별
                      </div>
                      <div className="text-blue-500 text-xl font-normal font-pre">
                        *
                      </div>
                    </Label>
                    <RadioGroup
                      disabled
                      defaultValue={input.gender}
                      className="flex flex-1 justify-between"
                    >
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">남</Label>
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">여</Label>
                    </RadioGroup>
                  </div>
                </div>
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black dark:text-neutral-50 text-sm font-light font-pre">
                      E-mail
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <div className="w-[650px] self-stretch justify-between items-center flex">
                    <Input
                      readOnly
                      value={input.email1}
                      className="w-[400px]"
                      id="email1"
                    />
                    <div className="w-[50px] text-center text-2xs font-bold font-pre">
                      @
                    </div>
                    <Input
                      readOnly
                      value={input.email2}
                      className="w-[200px]"
                      id="email2"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black dark:text-neutral-50 text-sm font-light font-pre">
                      Password
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <Input
                    readOnly
                    value={input.password}
                    className="w-[650px]"
                    id="password"
                    type="password"
                  />
                </div>
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black dark:text-neutral-50  text-sm font-light font-pre">
                      Password 확인
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <Input
                    readOnly
                    value={input.passwordCheck}
                    className="w-[650px]"
                    id="passwordCheck"
                    type="password"
                  />
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black dark:text-neutral-50  text-sm font-light font-pre">
                      주소
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  {/* <div
                    onClick={searchAddress}
                    className="cursor-pointer w-[125px] h-[37px] flex justify-center items-center bg-gray-200 rounded-none dark:placeholder:text-neutral-400 dark:bg-gray-200 dark:border-neutral-300  border border-neutral-300"
                  >
                    <div className="flex items-center dark:text-black justify-center text-black  text-[13px] font-medium font-pre">
                      주소검색
                    </div>
                  </div> */}
                  <div className="w-[650px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start gap-6 inline-flex">
                      <Input
                        readOnly
                        value={input.zonecode}
                        className="w-[200px]"
                        placeholder="우편 번호"
                        id="zonecode"
                      />
                      {/*  */}
                    </div>
                    <Input
                      readOnly
                      value={input.address}
                      className="w-[650px]"
                      placeholder="기본 주소"
                      id="address"
                    />
                    <Input
                      readOnly
                      value={input.addrDetail}
                      className="w-[650px]"
                      placeholder="상세 주소(선택)"
                      id="addrDetail"
                    />
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black dark:text-neutral-50  text-sm font-light font-pre">
                      휴대전화
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <div className="h-[37px] w-[650px] justify-between items-center flex">
                    <Input
                      readOnly
                      value={input.tel1}
                      className="w-[175px]"
                      id="tel1"
                      maxLength={3}
                    />
                    <div className="w-[5px] h-px bg-black dark:bg-white" />
                    <Input
                      readOnly
                      value={input.tel2}
                      className="w-[175px]"
                      id="tel2"
                      maxLength={4}
                    />
                    <div className="w-[5px] h-px bg-black dark:bg-white" />
                    <Input
                      readOnly
                      value={input.tel3}
                      className="w-[175px]"
                      id="tel3"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div className="self-stretch justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black dark:text-neutral-50  text-sm font-light font-pre">
                      생년월일
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <div className="h-[37px] w-[650px] justify-between items-center flex">
                    <Input
                      readOnly
                      value={[input.year, input.month, input.day].join("-")}
                      className="w-[650px]"
                      id="birth"
                      type="text"
                      placeholder="년도-월-일    예시) 2000-01-01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0px] border-2 border-gray-200"></div>

            {/* <button
              type="submit"
              className="cursor-pointer h-[50px] px-[234px] py-[9px] bg-black dark:bg-white justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-white dark:text-black text-base font-semibold font-noto">
                회원가입
              </div>
            </button> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
