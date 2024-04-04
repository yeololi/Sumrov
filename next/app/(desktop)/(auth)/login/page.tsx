import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";
import LoginForm from "./_components/loginForm";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[198px] bg-neutral-50 dark:bg-neutral-900">
        <div className="w-[800px] h-[420px] flex-col justify-center items-center gap-[50px] inline-flex">
          <div className="flex-col justify-start items-center gap-[70px] flex">
            <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
              LOGIN
            </div>
          </div>
          <div className="h-[331px] flex-col justify-center items-center gap-[19px] flex">
            <LoginForm />
            <div className="h-[45px] flex-col justify-start items-center gap-2 flex">
              <div className="w-[450px] justify-center items-center gap-2.5 inline-flex">
                <div className="w-[150px] h-[0px] border border-gray-200"></div>
                <div className="text-neutral-400 text-[11px] font-medium font-pre">
                  SNS 계정으로 로그인/가입
                </div>
                <div className="w-[150px] h-[0px] border border-gray-200"></div>
              </div>
              <div className="h-6 justify-center items-start gap-[30px] inline-flex">
                <div className="w-[97px] pl-[3px] pr-[29px] py-0.5 justify-start items-start gap-1 inline-flex">
                  <img className="w-6 h-6" src="/images/kakao.png" />
                  <div className="text-neutral-400 text-[13px] font-medium font-pre">
                    kakao
                  </div>
                </div>
                <div className="w-[97px] pl-[3px] pr-[29px] py-0.5 justify-start items-start gap-1 inline-flex">
                  <img className="w-5 h-5" src="/images/google.png" />
                  <div className="text-neutral-400 text-[13px] font-medium font-pre">
                    google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
