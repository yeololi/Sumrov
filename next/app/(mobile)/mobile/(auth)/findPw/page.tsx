"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Header from "../../_components/header";
import { useRouter } from "next/navigation";
import { useState } from "react";

let yes = true;

const FindPw = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const FindPw = async () => {
    setIsLoading(() => true);
    const FindPw = async () => {
      try {
        const res = await fetch(`/api/auth/findPw`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            name: name,
          }),
        }).then((r) => r.json());
        console.log(res);
        if (res.pw) {
          console.log(res.pw.임시비밀번호);
        }
        yes = false;
      } catch (error) {
        console.error(error);
      }
    };

    try {
      const res = await fetch(`/api/auth/findPw`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      }).then((r) => r.json());
      setIsLoading(() => false);

      router.push("/login");
    } catch (error) {
      console.error(error);
      setIsLoading(() => false);
    }
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center pt-[139px]">
        {yes ? (
          <div className="w-[336px] h-[216px] flex-col justify-start items-start gap-[25px] inline-flex">
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="text-black text-[13px] dark:text-white font-medium font-pre">
                비밀번호 찾기
              </div>

              <Input
                className="dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-pre"
                placeholder="이름"
              />
              <Input
                className="dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border dark:border-black w-[336px] h-[34px] rounded-none text-neutral-400 text-[13px] font-medium font-pre"
                placeholder="이메일"
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <Button
                className="dark:border dark:text-white dark:border-white w-[336px] h-[43px] bg-black rounded-none font-pre"
                asChild
              >
                <Link href={"/mobile/findPw2"}>로그인</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="w-[336px] h-[174px] flex-col justify-center items-start gap-[76px] inline-flex">
            <div className="flex-col justify-start items-start gap-[23px] flex">
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                비밀번호 찾기
              </div>
              <div className="text-black dark:text-white text-[13px] font-medium font-pre">
                등록하신 이메일로 임시 비밀번호를 보내드렸습니다.
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <Button
                className="dark:border dark:text-white dark:border-white w-[336px] h-[43px] bg-black rounded-none font-pre"
                asChild
              >
                <Link href={"/mobile/login"}>로그인</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FindPw;
