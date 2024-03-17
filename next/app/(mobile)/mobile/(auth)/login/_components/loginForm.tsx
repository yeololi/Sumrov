"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";

const LoginForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "http://localhost:3000/mobile",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex-col justify-center items-center gap-8 flex"
      >
        <div className="flex-col justify-center items-center gap-[23px] flex">
          <div className="w-[336px] h-[65px] flex-col justify-center items-start gap-1 flex">
            <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
              Email
            </Label>
            <Input
              id="email"
              placeholder="이메일"
              type={"email"}
              className="rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
            />
          </div>
          <div className="w-[336px] h-[65px] flex-col justify-center items-start gap-1 flex">
            <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
              Password
            </Label>
            <Input
              id="password"
              placeholder="비밀번호"
              type={"password"}
              className="rounded-none dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
            />
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-2 flex">
          <Button
            type="submit"
            className="dark:border dark:border-white text-white text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-black"
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            className="text-black text-sm font-normal font-pre w-[336px] h-[43px] rounded-none bg-white border border-neutral-300"
          >
            <Link href={"/mobile/signup"}>Sign Up</Link>
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
