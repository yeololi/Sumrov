import { Select, SelectTrigger } from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = [
  {
    title: "-결제 안내-",
    content: `-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
`,
  },
  {
    title: "-배송 안내-",
    content: `-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
    
-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
`,
  },
  {
    title: "-교환/환불 안내-",
    content: `-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
    
-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
`,
  },
];

const ShopDetailPage = () => {
  return (
    <>
      <Header />
      <div className="bg-neutral-50 dark:bg-neutral-900 text-white flex flex-col items-center pb-8 border-b border-black border-opacity-25 dark:border-white mb-[35px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[120px]">
          DETAIL
        </div>
        <div className="w-[300px] mt-[29px] flex flex-col items-center">
          <img
            className="w-[300px] h-[400px] border border-black"
            src="https://via.placeholder.com/300x400"
          />
          <div className="justify-start items-start gap-[5px] mt-[12.21px] flex w-full">
            <div className="w-[13px] h-[13px] bg-black dark:bg-white" />
            <div className="w-[13px] h-[13px] bg-rose-500" />
            <div className="w-[13px] h-[13px] bg-green-600" />
          </div>
          <div className="text-black dark:text-white w-full text-[13px] font-medium font-pre mt-[12px]">
            Lorem ipsum dolor sit (BLACK, RED, GREEN)
          </div>
          <div className="w-[315px] mt-[53px] text-neutral-600 dark:text-white text-[8px] font-normal font-pre"></div>
        </div>

        <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />

        <div className="flex flex-col items-center mt-3">
          <div className="justify-start items-start gap-5 flex w-[289px]">
            <div className="text-black dark:text-white text-[11px] font-semibold font-pre">
              판매가
            </div>
            <div className="text-black dark:text-white text-[11px] font-semibold font-pre">
              KRW 10,000
            </div>
          </div>
          <div className="justify-center items-center gap-[29px] flex mt-[25px]">
            <div className="text-neutral-400 text-[11px] font-normal font-pre">
              색상
            </div>
            <Select>
              <SelectTrigger className="dark:bg-neutral-50 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                -[필수] 옵션을 선택해 주세요-
              </SelectTrigger>
            </Select>
          </div>
          <div className="w-[289px] justify-center items-center gap-5 flex mt-4">
            <div className="text-neutral-400 text-[11px] font-normal font-pre">
              사이즈
            </div>
            <Select>
              <SelectTrigger className="dark:bg-neutral-50 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                -[필수] 옵션을 선택해 주세요-
              </SelectTrigger>
            </Select>
          </div>
          {true && (
            <>
              <div className="w-[350px] h-0 border-2 border-neutral-300  mt-4" />
              <div className="w-[299px] flex mt-3 flex-col">
                <div className="flex flex-col">
                  <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
                    Lorem ipsum dolor sit
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
                    -블랙/S
                  </div>
                </div>
                <div className="text-black dark:text-white text-[11px] font-semibold font-pre flex justify-end w-full">
                  KRW 10,000
                </div>
                <div className="flex gap-1">
                  <input
                    placeholder="1"
                    className="text-[10px] font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300 dark:bg-white"
                  />

                  <div className="w-[18px] h-[18px]">
                    <Plus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <Minus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm" />
                  </div>
                </div>
              </div>
              <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />
              <div className="mt-[17px] w-[299px] h-3.5 justify-center items-start gap-[167px] inline-flex">
                <div className="dark:text-white text-[11px] font-semibold font-pre">
                  총상품금액
                </div>
                <div className="w-[84px] flex justify-center items-center">
                  <div className="text-blue-500 text-[11px] font-semibold font-pre">
                    KRW 10,000
                  </div>
                  <div className="text-blue-500 text-[10px] font-normal font-pre">
                    (1개)
                  </div>
                </div>
              </div>
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

          <Accordion className="font-noto w-[360px]" type="single" collapsible>
            {data.map((item, index) => (
              <>
                <AccordionItem value={"item-" + index + 1} key={index}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-wrap">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopDetailPage;
