import { Select, SelectTrigger } from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const ShopDetailPage = () => {
  return (
    <>
      <Header />
      <div className="bg-neutral-50 flex flex-col items-center pb-8 border-b border-black border-opacity-25">
        <div className="text-black text-[17px] font-semibold font-nav tracking-widest mt-[120px]">
          DETAIL
        </div>
        <div className="mt-[29px] flex flex-col">
          <img
            className="w-[300px] h-[400px] border border-black"
            src="https://via.placeholder.com/300x400"
          />
          <div className="justify-start items-start gap-[5px] mt-[12.21px] flex">
            <div className="w-[13px] h-[13px] bg-black" />
            <div className="w-[13px] h-[13px] bg-rose-500" />
            <div className="w-[13px] h-[13px] bg-green-600" />
          </div>
          <div className="text-black text-[13px] font-medium font-pre mt-[12px]">
            Lorem ipsum dolor sit (BLACK, RED, GREEN)
          </div>
          <div className="w-[315px] mt-[53px] text-neutral-600 text-[8px] font-normal font-pre">
            -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램
            로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
            consectetuer
            <br />
            <br />
            -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램
            <br />
            로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
            consectetuer <br />
            <br />
            -로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램
            <br />
            로램잇섬 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet,
            consectetuer
          </div>
        </div>

        <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />

        <div className="flex flex-col items-center mt-3">
          <div className="justify-start items-start gap-5 flex w-full">
            <div className="text-black text-[11px] font-semibold font-pre">
              판매가
            </div>
            <div className="text-black text-[11px] font-semibold font-pre">
              KRW 10,000
            </div>
          </div>
          <div className="justify-center items-center gap-[29px] flex mt-[25px]">
            <div className="text-neutral-400 text-[11px] font-normal font-pre">
              색상
            </div>
            <Select>
              <SelectTrigger className="rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                -[필수] 옵션을 선택해 주세요-
              </SelectTrigger>
            </Select>
          </div>
          <div className="w-[289px] justify-center items-center gap-5 flex mt-4">
            <div className="text-neutral-400 text-[11px] font-normal font-pre">
              사이즈
            </div>
            <Select>
              <SelectTrigger className="rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                -[필수] 옵션을 선택해 주세요-
              </SelectTrigger>
            </Select>
          </div>
          {true && (
            <>
              <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />
              <div className="w-[299px] flex mt-3 flex-col">
                <div className="flex flex-col">
                  <div className="text-neutral-600 text-[10px] font-normal font-pre">
                    Lorem ipsum dolor sit
                  </div>
                  <div className="text-neutral-600 text-[10px] font-normal font-pre">
                    -블랙/S
                  </div>
                </div>
                <div className="text-black text-[11px] font-semibold font-pre flex justify-end w-full">
                  KRW 10,000
                </div>
                <div className="flex gap-1">
                  <input
                    placeholder="1"
                    className="text-[10px] font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300"
                  />

                  <div className="w-[18px] h-[18px]">
                    <Plus className="w-[18px] h-[18px] bg-neutral-300 rounded-sm" />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <Minus className="w-[18px] h-[18px] bg-neutral-300 rounded-sm" />
                  </div>
                </div>
              </div>
              <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />
            </>
          )}
          <div className="flex mt-[39px]">
            <div className="w-[315px] h-[41px] bg-black">
              <div className="text-neutral-50 h-full text-[11px] flex justify-center items-center font-medium font-pre">
                Buy it Now
              </div>
            </div>
          </div>
          <div className="flex mt-1.5">
            <div className="w-[315px] h-[41px] bg-neutral-50 border border-black">
              <div className="text-black text-[11px] h-full font-medium font-body flex justify-center items-center">
                Add to Cart
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[98px] flex flex-col items-center">
          <div className="gap-[25.21px] flex flex-col">
            <img
              className="w-[300px] h-[400px] border border-black"
              src="https://via.placeholder.com/300x400"
            />
            <img
              className="w-[300px] h-[400px] border border-black"
              src="https://via.placeholder.com/300x400"
            />
            <img
              className="w-[300px] h-[400px]  border border-black"
              src="https://via.placeholder.com/300x400"
            />
          </div>
          <div className="items-center flex-col flex w-full gap-[3px]">
            <div className="flex-col justify-center gap-2.5 flex  mt-[76.21px]">
              <Select>
                <SelectTrigger className="w-[315px] h-[26px] bg-white border rounded-none border-neutral-300 text-neutral-600 text-[11px] font-normal font-pre ">
                  -결제 안내-
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
              <Select>
                <SelectTrigger className="w-[315px] h-[26px] bg-white border rounded-none border-neutral-300 text-neutral-600 text-[11px] font-normal font-pre ">
                  -배송 안내-
                </SelectTrigger>
              </Select>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
              <Select>
                <SelectTrigger className="w-[315px] h-[26px] bg-white border rounded-none border-neutral-300 text-neutral-600 text-[11px] font-normal font-pre ">
                  -교환/환불 안내-
                </SelectTrigger>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopDetailPage;
