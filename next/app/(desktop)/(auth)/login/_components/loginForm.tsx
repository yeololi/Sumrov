"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(response);

      if (response?.status === 401) {
        toast({
          title: "아이디 혹은 비밀번호가 일치하지 않습니다!",
          variant: "destructive",
        });
      } else {
        router.replace("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex-col justify-center items-center gap-[50px] flex"
      >
        <div className="h-[93px] flex-col justify-center items-center gap-[23px] flex">
          <div className="w-[450px] justify-between items-center inline-flex">
            <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
              Email
            </Label>
            <Input
              id="email"
              placeholder="이메일"
              type={"email"}
              className="rounded-none font-noto w-[336px] h-[34px] dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
            />
          </div>
          <div className="w-[450px] justify-between items-center inline-flex">
            <Label className="dark:text-white text-black text-[13px] font-medium font-pre">
              Password
            </Label>
            <Input
              id="password"
              placeholder="비밀번호"
              type={"password"}
              className="w-[336px] h-[34px] rounded-none font-noto dark:placeholder:text-neutral-400 dark:bg-zinc-800 border-neutral-300 dark:border-black"
            />
          </div>
        </div>
        <div className="flex-col justify-center items-center gap-2.5 flex">
          <div className="flex-col justify-center items-center gap-[15px] flex">
            <Button
              variant={"login"}
              type="submit"
              className="w-[450px] h-[43px]"
            >
              Login
            </Button>
            <Button variant={"signup"} className="w-[450px] h-[43px]" asChild>
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </div>
          <div className="w-[450px] px-[75px] mt-2 justify-between items-center inline-flex">
            <Link
              href={"/findId"}
              className="text-black dark:text-neutral-50 text-[11px] font-normal font-pre"
            >
              find ID
            </Link>
            <Link
              href={"/findPw"}
              className="text-black dark:text-neutral-50 text-[11px] font-normal font-pre"
            >
              find Password
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
