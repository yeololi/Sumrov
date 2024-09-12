"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Header from "../../_components/header";
import { FormEventHandler, useState } from "react";

const FindId = () => {
  const [input, setInput] = useState({ name: "", tel: "", email: "" });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const name = e.currentTarget.userName.value;
      const tel =
        e.currentTarget.tel1.value +
        "-" +
        e.currentTarget.tel2.value +
        "-" +
        e.currentTarget.tel3.value;

      const res = await fetch("/api/auth/findId", {
        method: "POST",
        body: JSON.stringify({ name, tel }),
      }).then((r) => r.json());

      setInput(() => {
        return { name: name, tel: tel, email: res };
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        {input.email ? (
          <div className="w-[336px] h-[225px] flex-col justify-start items-start gap-[27px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                이메일 찾기
              </div>
              <div className="">
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  이름 : {input.name}
                </div>
                <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                  휴대폰번호 : {input.tel}
                </div>
              </div>
              <div className="text-black dark:text-white text-xs font-normal font-pre">
                이메일 : {input.email}
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <Button
                className="dark:border dark:text-white dark:border-white w-[336px] h-[43px] bg-black rounded-none font-pre"
                asChild
              >
                <Link href={"/mobile/login"}>로그인</Link>
              </Button>
              <Button
                variant={"outline"}
                className="text-black text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-white border border-neutral-300"
                asChild
              >
                <Link href={"/mobile/findPw"}>비밀번호 찾기</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <form
              onSubmit={onSubmit}
              className="w-[336px] h-[107px] flex-col justify-start items-start gap-[15px] inline-flex"
            >
              <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
                이메일 찾기
              </Label>
              <div className="flex-col justify-start items-start gap-2 flex">
                <Input
                  placeholder="이름"
                  type={"text"}
                  id="userName"
                  className="dark:placeholder:text-neutral-400 border-neutral-300 dark:bg-zinc-800 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-950 text-[13px] font-medium font-pre"
                />

                <div className="justify-start items-center gap-1.5 inline-flex">
                  <Input
                    className="dark:placeholder:text-neutral-400 border-neutral-300 dark:bg-zinc-800 dark:border dark:border-black w-[100px] h-[34px] rounded-none text-neutral-950 text-[13px] font-medium font-pre"
                    placeholder="010"
                    type={"text"}
                    id="tel1"
                    maxLength={3}
                  />
                  <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                    -
                  </div>
                  <Input
                    className="dark:placeholder:text-neutral-400 border-neutral-300 dark:bg-zinc-800 dark:border dark:border-black w-[100px] h-[34px] rounded-none text-neutral-950 text-[13px] font-medium font-pre"
                    placeholder="1234"
                    type={"text"}
                    id="tel2"
                    maxLength={4}
                  />
                  <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                    -
                  </div>
                  <Input
                    className="dark:placeholder:text-neutral-400 border-neutral-300 dark:bg-zinc-800 dark:border dark:border-black w-[100px] h-[34px] rounded-none text-neutral-950 text-[13px] font-medium font-pre"
                    placeholder="5678"
                    type={"text"}
                    id="tel3"
                    maxLength={4}
                  />
                </div>
              </div>
              <Button className="dark:border dark:border-white dark:text-white w-[336px] h-[43px] bg-black rounded-none font-pre">
                확인
              </Button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default FindId;
