"use client";

import { Label } from "@/components/ui/label";
import Header from "../../_components/header";
import { Input } from "../_components/input";

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

const Signup = () => {
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
  return (
    <>
      <script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        async
      />
      <Header />
      <div className="w-full justify-center flex pt-[200px]">
        <div className="w-[800px] h-[1250px] flex-col justify-start items-center inline-flex">
          <div className="text-black text-[32px] font-semibold font-nav tracking-[3.20px]">
            SIGN UP
          </div>
          <div className="flex-col justify-center items-center gap-10 flex">
            <div className="self-stretch w-[800px] py-6 flex-col justify-center items-center gap-6 flex">
              <div className="h-[35px] flex-col justify-center items-start gap-4 flex w-full">
                <div className="text-center text-black text-base font-medium font-noto">
                  기본 정보
                </div>
                <div className="self-stretch h-[0px] border-2 border-gray-200"></div>
              </div>
              <div className="w-[800px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <Label className="h-6 justify-start items-center gap-1 flex">
                    <div className="text-black text-sm font-light font-pre">
                      이름
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </Label>
                  <Input className="w-[650px]" id="name" />
                </div>
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black text-sm font-light font-pre">
                      E-mail
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <div className="w-[650px] self-stretch justify-between items-center flex">
                    <Input className="w-[400px]" id="email1" />
                    <div className="w-[50px] text-center text-2xs font-bold font-pre">
                      @
                    </div>
                    <Input className="w-[200px]" id="email2" />
                  </div>
                </div>
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black text-sm font-light font-pre">
                      Password
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <Input className="w-[650px]" id="password" />
                </div>
                <div className="self-stretch h-[37px] justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black text-sm font-light font-pre">
                      Password 확인
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <Input className="w-[650px]" id="passwordCheck" />
                </div>
                <div className="self-stretch justify-between items-start inline-flex">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-black text-sm font-light font-pre">
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
                        <div className="flex items-center dark:text-black justify-center text-black text-[13px] font-medium font-pre">
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
                    <div className="text-black text-sm font-light font-pre">
                      휴대전화
                    </div>
                    <div className="text-blue-500 text-xl font-normal font-pre">
                      *
                    </div>
                  </div>
                  <div className="h-[33px] w-[650px] justify-between items-center flex">
                    <Input className="w-[175px]" id="tel1" />
                    <div className="w-[5px] h-px bg-black" />
                    <Input className="w-[175px]" id="tel2" />
                    <div className="w-[5px] h-px bg-black" />
                    <Input className="w-[175px]" id="tel3" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[0px] border-2 border-gray-200"></div>
            <div className="self-stretch h-[518px] flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch h-6 flex-col justify-center items-start gap-2.5 flex">
                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                  </div>
                  <div className="text-black text-sm font-medium font-pre">
                    모두 동의합니다.
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[226px] flex-col justify-center items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                  </div>
                  <div className="text-black text-xs font-normal font-pre">
                    [필수] 이용약관 동의
                  </div>
                </div>
                <div className="self-stretch px-4 py-[17px] rounded-sm border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[760px] text-black text-[10px] font-light font-pre">
                    대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한
                    평화적 통일 정책을 수립하고 이를 추진한다. 탄핵소추의 의결을
                    받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.{" "}
                    <br />
                    <br />
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 광물 기타 중요한
                    지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은
                    법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는
                    이용을 특허할 수 있다.
                    <br />
                    <br />
                    국회는 국가의 예산안을 심의·확정한다. 이 헌법에 의한 최초의
                    대통령의 임기는 이 헌법시행일로부터 개시한다. 국회의원은
                    국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을
                    지지 아니한다. 근로자는 근로조건의 향상을 위하여 자주적인
                    단결권·단체교섭권 및 단체행동권을 가진다. <br />
                    <br />
                    대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의
                    3분의 1 이상이 아니면 대통령으로 당선될 수 없다.
                    <br />
                    국회의 회의는 공개한다. <br />
                    <br />
                    다만, 출석의원 과반수의 찬성이 있거나 의장이 국가의
                    안전보장을 위하여 필요하다고 인정할 때에는 공개하지 아니할
                    수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및
                    그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야
                    한다.
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[220px] flex-col justify-center items-start gap-2.5 flex">
                <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                  </div>
                  <div className="text-black text-xs font-normal font-pre">
                    [필수] 개인정보 수집 및 이용 동의
                  </div>
                </div>
                <div className="self-stretch px-4 py-[17px] rounded-sm border border-neutral-300 justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[760px] text-black text-[10px] font-light font-pre">
                    대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한
                    평화적 통일 정책을 수립하고 이를 추진한다. 탄핵소추의 의결을
                    받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.{" "}
                    <br />
                    <br />
                    훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한
                    특권도 이에 따르지 아니한다. 광물 기타 중요한
                    지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은
                    법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는
                    이용을 특허할 수 있다.
                    <br />
                    <br />
                    국회는 국가의 예산안을 심의·확정한다. 이 헌법에 의한 최초의
                    대통령의 임기는 이 헌법시행일로부터 개시한다. 국회의원은
                    국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을
                    지지 아니한다. 근로자는 근로조건의 향상을 위하여 자주적인
                    단결권·단체교섭권 및 단체행동권을 가진다. <br />
                    <br />
                    대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의
                    3분의 1 이상이 아니면 대통령으로 당선될 수 없다.
                    <br />
                    국회의 회의는 공개한다. <br />
                    <br />
                    다만, 출석의원 과반수의 찬성이 있거나 의장이 국가의
                    안전보장을 위하여 필요하다고 인정할 때에는 공개하지 아니할
                    수 있다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및
                    그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야
                    한다.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[50px] px-[234px] py-[9px] bg-black justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-base font-semibold font-noto">
                회원가입
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
