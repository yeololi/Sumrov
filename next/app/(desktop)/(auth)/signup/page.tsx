"use client";

import { Label } from "@/components/ui/label";
import Header from "../../_components/header";
import { Input } from "../_components/input";
import CheckboxGroup from "../../_components/checkBoxGroup";
import { useToast } from "@/components/ui/use-toast";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
  birth: HTMLInputElement;
}

interface formData extends HTMLFormElement {
  readonly elements: formElement;
}

const Signup = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const isKakao = email !== null;

  const { toast } = useToast();

  const [inputs, setInputs] = useState({
    gender: "male",
    email1: "",
    email2: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = async (e: FormEvent<formData>) => {
    e.preventDefault();
    setIsLoading(() => true);

    const target = e.currentTarget.elements;
    const email = isKakao
      ? target.email1.value + "@" + target.email2.value
      : inputs.email1 + "@" + inputs.email2;
    const tel =
      target.tel1.value + "-" + target.tel2.value + "-" + target.tel3.value;
    const password = target.password.value;
    const name = target.name.value;
    const zonecode = target.zonecode.value;
    const address = target.address.value;
    const addrDetail = target.addrDetail.value;
    const birth = target.birth.value;
    const check2 = target.check2.checked;
    const check3 = target.check3.checked;

    if (!/^[가-힣]{2,10}$/.test(name)) {
      toast({
        title: "이름이 한글이 아닙니다.",
        variant: "destructive",
      });
      setIsLoading(() => false);

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
      setIsLoading(() => false);

      return;
    }

    if (password !== target.passwordCheck.value) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        variant: "destructive",
      });
      setIsLoading(() => false);

      return;
    }

    if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/.test(password)
    ) {
      toast({
        title: "비밀번호가 형식에 맞지 않습니다.",
        variant: "destructive",
      });
      setIsLoading(() => false);

      return;
    }

    if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(tel)) {
      toast({
        title: "전화번호가 형식에 맞지 않습니다.",
        variant: "destructive",
      });
      setIsLoading(() => false);

      return;
    }

    if (zonecode === "") {
      toast({
        title: "전화번호가 형식에 맞지 않습니다.",
        variant: "destructive",
      });
      setIsLoading(() => false);

      return;
    }

    if (!/^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/.test(birth)) {
      toast({
        title: "생년월일이 형식에 맞지 않습니다.",
        variant: "destructive",
      });
      setIsLoading(() => false);

      return;
    }

    if (!check2 || !check3) {
      toast({
        title: "약관에 동의해주세요.",
        variant: "destructive",
      });
      return;
    }

    const [year, month, day] = birth.split("-");

    const body = {
      name: name,
      email: email,
      password: password,
      zonecode: zonecode,
      address: address,
      addrDetail: addrDetail,
      tel: tel,
      year: year,
      month: month,
      day: day,
      ci: "",
      gender: inputs.gender,
    };
    // console.log(body);

    try {
      await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(body),
      });

      setIsLoading(() => false);
      router.replace("/login");
    } catch (error) {
      console.error(error);
      setIsLoading(() => false);
    }
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
            SIGN UP
          </div>
          <form
            onSubmit={onSubmit}
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
                    <Input className="w-[410px]" id="name" />
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
                      defaultValue="male"
                      className="flex flex-1 justify-between"
                      onValueChange={(value) => {
                        setInputs((other) => ({
                          ...other,
                          gender: value,
                        }));
                      }}
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
                      className="w-[400px]"
                      id="email1"
                      onChange={(e) =>
                        setInputs((other) => ({
                          ...other,
                          email1: e.target.value,
                        }))
                      }
                      value={isKakao ? email.split("@")[0] : inputs.email1}
                      readOnly={isKakao}
                    />
                    <div className="w-[50px] text-center text-2xs font-bold font-pre">
                      @
                    </div>
                    <Input
                      className="w-[200px]"
                      id="email2"
                      onChange={(e) =>
                        setInputs((other) => ({
                          ...other,
                          email2: e.target.value,
                        }))
                      }
                      value={isKakao ? email.split("@")[1] : inputs.email2}
                      readOnly={isKakao}
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
                  <Input className="w-[650px]" id="password" type="password" />
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
                  <div className="w-[650px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="justify-start items-start gap-6 inline-flex">
                      <Input
                        className="w-[200px]"
                        placeholder="우편 번호"
                        id="zonecode"
                      />
                      <div
                        onClick={searchAddress}
                        className="cursor-pointer w-[125px] h-[37px] flex justify-center items-center bg-gray-200 rounded-none dark:placeholder:text-neutral-400 dark:bg-gray-200 dark:border-neutral-300  border border-neutral-300"
                      >
                        <div className="flex items-center dark:text-black justify-center text-black  text-[13px] font-medium font-pre">
                          주소검색
                        </div>
                      </div>
                    </div>
                    <Input
                      className="w-[650px]"
                      placeholder="기본 주소"
                      id="address"
                    />
                    <Input
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
                    <Input className="w-[175px]" id="tel1" maxLength={3} />
                    <div className="w-[5px] h-px bg-black dark:bg-white" />
                    <Input className="w-[175px]" id="tel2" maxLength={4} />
                    <div className="w-[5px] h-px bg-black dark:bg-white" />
                    <Input className="w-[175px]" id="tel3" maxLength={4} />
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
            <CheckboxGroup isChecked={false}></CheckboxGroup>
            {isLoading ? (
              <button
                disabled
                type="submit"
                className="cursor-pointer h-[50px] px-[234px] py-[9px] bg-black dark:bg-white justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-center text-white dark:text-black text-base font-semibold font-noto">
                  회원가입
                </div>
              </button>
            ) : (
              <button
                type="submit"
                className="cursor-pointer h-[50px] px-[234px] py-[9px] bg-black dark:bg-white justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-center text-white dark:text-black text-base font-semibold font-noto">
                  회원가입
                </div>
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
