"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface post {
  Uuid: string;
  Title: string;
  Price: string;
  Sale: number;
  Description: string;
  Category: "all" | "top" | "bottom" | "acc";
  Size: string[];
  Color: string[];
  MainImage: string;
  DetailImages: string[];
  Counter: number;
  increment: number;
  decrement: number;
}

const ShopOption = ({ result }: { result: post }) => {
  const [selectValue, setSelectValue] = useState<{
    color: string;
    size: string;
  }>({
    color: "",
    size: "",
  });

  const [itemCounter, setitemCounter] = useState(1);

  const increment = () => {
    setitemCounter(itemCounter + 1);
  };

  const decrement = () => {
    if (itemCounter > 1) {
      setitemCounter(itemCounter - 1);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setitemCounter(value);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-3">
        <div className="justify-start items-start gap-5 flex w-[289px]">
          <div className="text-black dark:text-white text-[11px] font-semibold font-pre">
            판매가
          </div>
          <div className="text-black dark:text-white text-[11px] font-semibold font-pre">
            {new Intl.NumberFormat("ko-KR", {
              style: "currency",
              currency: "KRW",
            }).format(parseInt(result?.Price ?? "0"))}
          </div>
        </div>
        <div className="justify-center items-center gap-[29px] flex mt-[25px]">
          <div className="text-neutral-400 text-[11px] font-normal font-pre">
            색상
          </div>
          <Select
            onValueChange={(v) => {
              setSelectValue((pre) => ({ ...pre, color: v }));
            }}
          >
            <SelectTrigger className="dark:bg-neutral-50 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
              <SelectValue placeholder="-[필수] 옵션을 선택해 주세요-" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {result?.Color.map((colors, i) => (
                  <SelectItem value={colors} key={i}>
                    {colors}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-[289px] justify-center items-center gap-5 flex mt-4">
          <div className="text-neutral-400 text-[11px] font-normal font-pre">
            사이즈
          </div>

          <Select
            onValueChange={(v) => {
              setSelectValue((pre) => ({ ...pre, size: v }));
            }}
          >
            <SelectTrigger className="dark:bg-neutral-50 rounded-sm w-60 h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
              <SelectValue placeholder="-[필수] 옵션을 선택해 주세요-" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {result?.Size.map((sizes, i) => (
                  <SelectItem value={sizes} key={i}>
                    {sizes}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <>
          <div className="w-[350px] h-0 border-2 border-neutral-300  mt-4" />
          <div className="w-[299px] flex mt-3 flex-col">
            <div className="flex flex-col">
              <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
                Lorem ipsum dolor sit
              </div>
              <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
                {selectValue ? (
                  <>
                    {selectValue.color}/{selectValue.size}
                  </>
                ) : (
                  <>이곳에 표시</>
                )}
              </div>
            </div>
            <div className="text-black dark:text-white text-[11px] font-semibold font-pre flex justify-end w-full">
              KRW 10,000
            </div>
            <div className="flex gap-1">
              <input
                value={itemCounter}
                onChange={handleInputChange}
                className="text-[10px] text-black font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300 dark:bg-white"
              />

              <div className="w-[18px] h-[18px]" onClick={increment}>
                <Plus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm cursor-pointer" />
              </div>
              <div className="w-[18px] h-[18px]" onClick={decrement}>
                <Minus className="w-[18px] h-[18px] dark:text-black bg-neutral-300 rounded-sm cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />
          <div className="mt-[17px] w-[299px] h-3.5 justify-center items-start gap-[167px] inline-flex">
            <div className="text-black dark:text-white text-[11px] font-semibold font-pre">
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
    </>
  );
};

export default ShopOption;
