import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X } from "lucide-react";
import Footer from "../_components/footer";

const RegistrationPage = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-neutral-50">
        <div className="flex-col justify-center items-center inline-flex">
          <div className="pl-[505px] pr-[15px] py-[15px] bg-white justify-end items-center inline-flex">
            <div className="justify-start items-start gap-[465px] flex">
              <div className="justify-center items-center gap-2.5 flex">
                <img className="w-[22px] h-[22px]" src="images/logo.png" />
                <div className="text-neutral-900 text-xl font-semibold font-nav">
                  SUMROV
                </div>
              </div>
              <X />
            </div>
          </div>
          <div className="w-[1125px] px-[350px] py-[15px] bg-zinc-600 border border-black justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-lg font-semibold font-pre">
              상품 등록
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[74px] inline-flex">
          <div className="h-[5045.33px] py-[50px] border border-stone-300 flex-col justify-center items-center flex">
            <div className="flex-col justify-center items-center gap-[100px] flex">
              <div className="w-[700px] flex-col justify-center items-center gap-[50px] flex">
                <div className="w-[700px] flex-col justify-between items-center flex">
                  <div className="h-[22px] flex-col justify-center items-start gap-[25px] flex">
                    <div className="text-center text-black text-lg font-medium font-['Inter']">
                      상품 정보
                    </div>
                  </div>
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                      카테고리
                    </div>
                    <div className="h-[35px] justify-center items-center gap-6 flex">
                      <div className="h-[35px] pt-[5px] pb-1.5 bg-white justify-center items-center flex">
                        <div className="grow shrink basis-0 self-stretch px-3 justify-start items-center gap-3 inline-flex">
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                          <div className="text-black text-sm font-normal font-pre">
                            TOP
                          </div>
                        </div>
                      </div>
                      <div className="p-[0.50px] bg-white justify-center items-center flex">
                        <div className="self-stretch px-3 justify-start items-center gap-3 inline-flex">
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                          <div className="text-black text-sm font-normal font-pre">
                            BOTTOM
                          </div>
                        </div>
                      </div>
                      <div className="pr-3 pt-[5px] pb-1.5 bg-white justify-start items-center flex">
                        <div className="self-stretch px-3 justify-start items-center gap-3 inline-flex">
                          <div className="w-6 h-6 relative">
                            <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                          <div className="text-black text-sm font-normal font-pre">
                            ACC
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="h-[438px] flex-col justify-start items-start gap-3 flex">
                    <div className="w-[700px] justify-between items-center inline-flex">
                      <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                        상품명
                      </div>
                      <div className="w-[550px] h-[30px] bg-white rounded-sm border border-neutral-300" />
                    </div>
                    <div className="w-[700px] justify-between items-center inline-flex">
                      <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                        가격
                      </div>
                      <div className="w-[550px] h-[30px] bg-white rounded-sm border border-neutral-300" />
                    </div>
                    <div className="w-[700px] justify-between items-center inline-flex">
                      <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                        할인 정보
                      </div>
                      <div className="w-[550px] h-[30px] relative">
                        <div className="w-[550px] h-[30px] left-0 top-0 absolute bg-white rounded-sm border border-neutral-300" />
                        <div className="left-[12px] top-[6px] absolute text-neutral-300 text-sm font-normal font-['Inter']">
                          (선택)
                        </div>
                      </div>
                    </div>
                    <div className="w-[700px] justify-between items-start inline-flex">
                      <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                        상세 정보
                      </div>
                      <div className="w-[550px] h-[252px] bg-white rounded-sm border border-neutral-300" />
                    </div>
                  </div>
                </div>
                <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                      사이즈 옵션
                    </div>
                    <div className="w-[550px] h-[30px] relative">
                      <div className="w-[550px] h-[30px] left-0 top-0 absolute bg-white rounded-sm border border-neutral-300" />
                      <div className="px-3 left-[505.50px] top-[8px] absolute justify-start items-center inline-flex">
                        <div className="text-black text-xs font-light font-pre">
                          추가
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center gap-[23px] inline-flex">
                    <div className="justify-start items-center gap-6 flex">
                      <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="w-[100px] h-[26px] justify-center items-center inline-flex">
                          <div className="w-[100px] h-[26px] relative flex-col justify-start items-start flex">
                            <div className="w-[100px] h-[26px] bg-neutral-50 rounded-sm border border-neutral-300" />
                            <div className="justify-center items-center gap-[19px] inline-flex">
                              <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                              </div>
                              <div className="text-neutral-600 text-[11px] font-normal font-pre">
                                L
                              </div>
                              <div className="w-4 h-4 relative">
                                <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="py-[5px] bg-neutral-50 rounded-sm border border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                          <div className="px-2 justify-center items-center gap-[19px] inline-flex">
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                            <div className="text-neutral-600 text-xs font-normal font-pre">
                              M
                            </div>
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="py-[5px] bg-neutral-50 rounded-sm border border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                          <div className="px-2 justify-center items-center gap-[19px] inline-flex">
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                            <div className="text-neutral-600 text-xs font-normal font-pre">
                              S
                            </div>
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                      색상 옵션
                    </div>
                    <div className="w-[550px] h-[30px] relative">
                      <div className="w-[550px] h-[30px] left-0 top-0 absolute bg-white rounded-sm border border-neutral-300" />
                      <div className="px-3 left-[505.50px] top-[8px] absolute justify-start items-center inline-flex">
                        <div className="text-black text-xs font-light font-pre">
                          추가
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center gap-6 inline-flex">
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-[100px] h-[26px] justify-center items-center inline-flex">
                        <div className="w-[100px] h-[26px] relative flex-col justify-start items-start flex">
                          <div className="w-[100px] h-[26px] bg-neutral-50 rounded-sm border border-neutral-300" />
                          <div className="justify-center items-center gap-[19px] inline-flex">
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                            <div className="text-neutral-600 text-[11px] font-normal font-pre">
                              블랙
                            </div>
                            <div className="w-4 h-4 relative">
                              <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="py-[5px] bg-neutral-50 rounded-sm border border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="px-2 justify-center items-center gap-[19px] inline-flex">
                          <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                          <div className="text-neutral-600 text-xs font-normal font-pre">
                            그레이
                          </div>
                          <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="py-[5px] bg-neutral-50 rounded-sm border border-neutral-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="px-2 justify-center items-center gap-[19px] inline-flex">
                          <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                          <div className="text-neutral-600 text-xs font-normal font-pre">
                            화이트
                          </div>
                          <div className="w-4 h-4 relative">
                            <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                      메인 이미지
                    </div>
                    <div className="w-[550px] h-[30px] relative">
                      <div className="w-[550px] h-[30px] left-0 top-0 absolute bg-white rounded-sm border border-neutral-300" />
                      <div className="left-[12px] top-[8px] absolute text-neutral-300 text-xs font-light font-pre">
                        하나의 이미지만 가능
                      </div>
                      <div className="px-3 left-[494.50px] top-[8px] absolute justify-start items-center inline-flex">
                        <div className="text-black text-xs font-light font-pre">
                          업로드
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center gap-[23px] inline-flex">
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-[100px] h-[26px] relative">
                        <div className="w-[100px] h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="left-[6px] top-[6px] absolute text-neutral-600 text-[11px] font-normal font-pre">
                          IMAGE-1
                        </div>
                        <div className="w-4 h-4 left-[76.50px] top-[5px] absolute">
                          <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
                <div className="h-[145px] flex-col justify-center items-start gap-[23px] flex">
                  <div className="w-[700px] justify-between items-center inline-flex">
                    <div className="w-[109.47px] h-[50px] text-black text-sm font-normal font-['Inter']">
                      상세 이미지
                    </div>
                    <div className="w-[550px] h-[30px] relative">
                      <div className="w-[550px] h-[30px] left-0 top-0 absolute bg-white rounded-sm border border-neutral-300" />
                      <div className="px-3 left-[494.50px] top-[8px] absolute justify-start items-center inline-flex">
                        <div className="text-black text-xs font-light font-pre">
                          업로드
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                  <div className="justify-start items-center gap-[23px] inline-flex">
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-[100px] h-[26px] relative">
                        <div className="w-[100px] h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="left-[6px] top-[6px] absolute text-neutral-600 text-[11px] font-normal font-pre">
                          IMAGE-1
                        </div>
                        <div className="w-4 h-4 left-[76.50px] top-[5px] absolute">
                          <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-[100px] h-[26px] relative">
                        <div className="w-[100px] h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                        <div className="left-[6px] top-[6px] absolute text-neutral-600 text-[11px] font-normal font-pre">
                          IMAGE-2
                        </div>
                        <div className="w-4 h-4 left-[76.50px] top-[5px] absolute">
                          <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[700px] h-[0px] border-2 border-gray-200"></div>
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-[74px] flex">
                <div className="text-center text-black text-[22px] font-medium font-['Inter']">
                  미리보기
                </div>
                <div className="flex-col justify-start items-center gap-[72px] flex">
                  <div className="justify-center items-center gap-[25px] inline-flex">
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <div className="w-[550px] h-[733px] flex-col justify-center items-center gap-[50px] inline-flex">
                      <div className="flex-col justify-start items-start gap-5 flex">
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          <div className="justify-start items-start gap-[5px] inline-flex">
                            <div className="w-3.5 h-3.5 bg-black" />
                            <div className="w-3.5 h-3.5 bg-rose-500" />
                            <div className="w-3.5 h-3.5 bg-green-600" />
                          </div>
                          <div className="text-black text-xl font-medium font-pre">
                            Lorem ipsum dolor sit (BLACK, RED, GREEN){" "}
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[50px] flex">
                          <div className="text-black text-sm font-normal font-pre">
                            KRW 10,000
                          </div>
                          <div className="flex-col justify-start items-start gap-[30px] flex">
                            <div className="w-[421px] text-neutral-600 text-xs font-light font-pre">
                              -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet
                              로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit
                              amet Lorem ipsum dolor sit amet, consectetuer
                              <br />
                              <br />
                              -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet
                              로램잇섬 로램잇섬 로램
                              <br />
                              로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum
                              dolor sit amet, consectetuer <br />
                              <br />
                              -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet
                              로램잇섬 로램잇섬 로램
                              <br />
                              로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum
                              dolor sit amet, consectetuer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-center items-center gap-[30px] flex">
                        <div className="flex-col justify-center items-end gap-[15px] flex">
                          <div className="w-[318px] justify-between items-center inline-flex">
                            <div className="text-neutral-400 text-[11px] font-normal font-pre">
                              색상
                            </div>
                            <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                              <div className="w-60 h-[26px] relative">
                                <div className="w-60 h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                                <div className="w-6 h-[0px] left-[207px] top-[1px] absolute origin-top-left rotate-90 border border-neutral-300"></div>
                              </div>
                              <div className="text-neutral-600 text-[11px] font-normal font-pre">
                                블랙
                              </div>
                            </div>
                          </div>
                          <div className="justify-center items-center gap-[50px] inline-flex">
                            <div className="text-neutral-400 text-[11px] font-normal font-pre">
                              사이즈
                            </div>
                            <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                              <div className="w-60 h-[26px] relative">
                                <div className="w-60 h-[26px] left-0 top-0 absolute bg-neutral-50 rounded-sm border border-neutral-300" />
                                <div className="w-6 h-[0px] left-[207px] top-[1px] absolute origin-top-left rotate-90 border border-neutral-300"></div>
                              </div>
                              <div className="text-neutral-600 text-[11px] font-normal font-pre">
                                S
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          <div className="w-[315px] h-[41px] py-3.5 bg-neutral-900 justify-center items-center inline-flex">
                            <div className="text-neutral-50 text-[11px] font-medium font-['Inter']">
                              Buy it Now
                            </div>
                          </div>
                          <div className="w-[315px] h-[41px] py-3.5 border border-neutral-900 justify-center items-center inline-flex">
                            <div className="text-black text-[11px] font-medium font-['Inter']">
                              Add to Cart
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-[25px] inline-flex">
                    <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                      <div className="w-[700px] text-neutral-900 text-xs font-light font-pre">
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
                        상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
                        정보{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-10 flex">
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[700px] h-[50px] px-[234px] py-[9px] bg-black justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-white text-base font-semibold font-['Inter']">
              업로드
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
