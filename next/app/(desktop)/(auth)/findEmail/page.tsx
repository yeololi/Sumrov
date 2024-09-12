"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";
import { FormEventHandler, useState } from "react";

const yes = false;

const LoginPage = () => {
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
      <div className="flex justify-center pt-[200px] pb-[198px] bg-neutral-50 dark:bg-neutral-900">
        {input.email ? (
          <div className="w-[450px] h-[314px] flex-col justify-center items-center gap-[75px] inline-flex">
            <div className="text-black dark:text-neutral-50 text-[28px] font-medium font-pre">
              이메일 찾기
            </div>
            <div className="flex-col justify-center items-start gap-[27px] flex">
              <div className="flex-col justify-center items-start gap-5 flex">
                <div className="flex-col justify-center items-start gap-[5px] flex">
                  <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                    이름 : {input.name}
                  </div>
                  <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                    휴대폰번호 : {input.tel}
                  </div>
                </div>
                <div className="text-black dark:text-neutral-50 text-base font-medium font-pre">
                  이메일 : {input.email}
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-[15px] flex">
                <Button
                  variant={"login"}
                  className="w-[450px] h-[43px]"
                  asChild
                >
                  <Link href={"/login"}>Login</Link>
                </Button>
                <Button
                  variant={"signup"}
                  className="w-[450px] h-[43px]"
                  asChild
                >
                  <Link href={"/findPw"}>비밀번호 찾기</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[800px] h-[269px] flex-col justify-center items-center gap-[50px] inline-flex">
            <div className="text-black dark:text-neutral-50 text-[28px] font-medium font-pre">
              이메일 찾기
            </div>
            <form
              onSubmit={onSubmit}
              className="h-[186px] flex-col justify-center items-center gap-[19px] flex"
            >
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="h-[93px] flex-col justify-center items-center gap-[23px] flex">
                  <div className="w-[450px] justify-between items-center inline-flex">
                    <Label
                      htmlFor="userName"
                      className="dark:text-white text-black text-[13px] font-medium font-pre"
                    >
                      NAME
                    </Label>
                    <Input
                      id="userName"
                      placeholder="이름"
                      type={"text"}
                      className="rounded-none w-[336px] h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                    />
                  </div>
                  <div className="w-[450px] justify-between items-center inline-flex">
                    <Label
                      htmlFor="tel"
                      className="dark:text-white text-black text-[13px] font-medium font-pre"
                    >
                      TEL
                    </Label>
                    <div className="w-[336px] justify-start items-center gap-1.5 inline-flex">
                      <Input
                        className="rounded-none flex-1 h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                        placeholder="010"
                        type={"text"}
                        id="tel1"
                      />
                      <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                        -
                      </div>
                      <Input
                        className="rounded-none flex-1 h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                        placeholder="1234"
                        type={"text"}
                        id="tel2"
                      />
                      <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                        -
                      </div>
                      <Input
                        className="rounded-none flex-1 h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
                        placeholder="5678"
                        type={"text"}
                        id="tel3"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-2.5 flex">
                  <Button variant={"login"} className="w-[450px] h-[43px]">
                    확인
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
