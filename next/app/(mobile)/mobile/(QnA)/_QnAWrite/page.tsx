import Footer from "../../_components/footer";
import Header from "../../_components/header";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data = [{}, {}, {}, {}, {}, {}, {}];

const QnAPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px] relative">
        <div className="text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[54px]">
          Q&A
        </div>
        <div className="w-[335px] h-[743px] dark:bg-neutral-900  bg-neutral-50 border border-neutral-300">
          <div className="w-[335px] h-[99px] relative">
            <div className="w-[333px] h-[99px] left-0 top-0 absolute bg-gray-200 border-b border-neutral-300">
              <div className="w-[74px] h-[74px] left-[11px] top-[13px] absolute">
                <div className="w-[74px] h-[74px] left-0 top-0 absolute bg-gray-200 border border-neutral-300" />
                <div className="w-[15px] h-[11px] left-[29px] top-[31px] absolute"></div>
              </div>
              <Link
                href={"/mobile/QnASelect"}
                className="w-[78px] h-[25px] left-[98px] top-[28px] absolute"
              >
                <div className="w-[78px] h-[25px] bg-white bg-opacity-70 border border-neutral-300">
                  <div className="flex h-full justify-center items-center text-[10px] text-black font-medium font-noto">
                    상품정보선택
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[309px] h-[26px] relative m-[11px] gap-[48px]">
            <div className="left-0 top-[5px] absolute text-[11px] font-medium font-noto">
              종류
            </div>
            <div className="w-60 h-[26px] left-[68px] top-0 absolute flex-row">
              <Select defaultValue="all">
                <SelectTrigger className="w-full h-[26px] text-neutral-600 dark:text-neutral-400 text-[11px] font-semibold font-noto bg-neutral-50 border dark:bg-neutral-900 border-stone-300">
                  <SelectValue className="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="font-noto" value="all">
                    문의
                  </SelectItem>
                  <SelectItem className="font-noto" value="before">
                    기타
                  </SelectItem>
                  <SelectItem className="font-noto" value="after">
                    등등
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[333px] h-[50.50px] relative">
            <Input className="font-noto text-[11px] w-60 h-[26px] left-[79px] top-[11.50px] absolute dark:bg-neutral-900 bg-neutral-50 rounded-sm border border-neutral-300" />
            <div className="left-[10px] top-[18.50px] absolute text-[11px] font-medium font-noto">
              작성자
            </div>
          </div>
          <div className="w-[305px] h-[236px] m-[15px] relative">
            <div className="w-[305px] h-[236px] left-0 top-0 absolute bg-neutral-50 dark:bg-neutral-900 border border-neutral-200" />
            <div className="w-[303px] h-[0px] left-[1px] top-[208px] absolute border border-gray-200"></div>
            <div className="left-[275px] top-[217px] absolute text-neutral-400 text-[7px] font-normal font-pre">
              문자 : 0
            </div>
          </div>
          <div className="w-[309px] h-[26px]  ml-[11px] relative">
            <Input className="font-noto text-[11px] w-60 h-[26px] left-[69px] top-0 absolute bg-neutral-50 dark:bg-neutral-900 rounded-sm border border-neutral-300" />
            <div className="left-0 top-[6px] absolute text-[11px] font-medium font-pre">
              UCC URL
            </div>
          </div>
          <div className="w-[309px] h-[26px] ml-[11px] mt-[22px] relative">
            <Input className="font-noto text-[11px] w-60 h-[26px] left-[69px] top-0 absolute bg-neutral-50 dark:bg-neutral-900 rounded-sm border border-neutral-300" />
            <div className="left-0 top-[6px] absolute text-[11px] font-medium font-pre">
              비밀번호
            </div>
          </div>
          <div className="w-[309px] h-[53px] ml-[11px] mt-[22px] relative">
            <div className="left-0 top-[21px] absolute text-[11px] font-medium font-pre">
              보안문자
            </div>
            <div className="w-60 h-[26px] left-[69px] top-[27px] absolute">
              <Input
                placeholder="보안문자를 입력해주세요."
                className="font-noto text-[11px] w-60 h-[26px] left-0 top-0 absolute bg-neutral-50 dark:bg-neutral-900 text-neutral-400 placeholder:text-neutral-400 rounded-sm border border-neutral-300"
              />
            </div>
            <div className="w-[66px] h-[22px] left-[69px] top-0 absolute bg-zinc-300" />
          </div>
          <div className="w-[311px] h-[15px] ml-[11px] mt-[28px] relative ">
            <Label
              htmlFor="agree"
              className="w-[110px] h-[11px] left-[21px] bottom-[3.5px] absolute text-neutral-400 text-[11px] font-normal font-pre"
            >
              개인정보처리방침동의
            </Label>
            <div className="w-[32px] left-[279px] bottom-[1.5px] absolute text-neutral-400 text-[8px] font-normal font-pre underline">
              내용보기
            </div>
            <Checkbox
              id="agree"
              className="w-[15px] h-[15px] left-[-1px] bottom-[-1px] absolute bg-neutral-50 rounded-[3px] border border-neutral-300"
            />
          </div>
          <div className="flex flex-row">
            <div className="w-[104px] h-[22px] mt-[33px] ml-[47px] relative">
              <button className="w-[104px] h-[22px] left-0 top-0 absolute bg-black dark:bg-white text-neutral-50 dark:text-neutral-900 text-[9px] font-normal font-pre">
                등록
              </button>
            </div>
            <div className="w-[104px] h-[22px] mt-[33px] ml-[12px] relative">
              <button className="w-[104px] h-[22px] left-0 top-0 absolute bg-neutral-50 dark:bg-neutral-900 border border-gray-200 text-[9px] font-normal font-pre">
                취소
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QnAPage;
