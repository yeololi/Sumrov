"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { authOptions } from "@/util/authOption";
import { Minus, Plus } from "lucide-react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ResultItem } from "../../cart/page";
import { Product } from "../page";

const ShopOption = ({ result }: { result: Product }) => {
  const [selectValue, setSelectValue] = useState<{
    color: string;
    size: string;
  }>({
    color: "",
    size: "",
  });
  const { toast } = useToast();
  const router = useRouter();
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

  const handleAddCart = () => {};

  const handleBuyNow = () => {
    if (selectValue.color && selectValue.size) {
      router.push(
        `/payment?OriginUuid=${btoa(result.Uuid)}&Cnt=${itemCounter}&size=${
          selectValue.size
        }&color=${selectValue.color}`
      );
    } else {
      toast({
        title: "상품 옵션을 모두 선택해주세요",
        variant: "destructive",
      });
    }
  };

  const newCart = async () => {
    const session = await getSession();

    if (selectValue.size === "" || selectValue.color === "") {
      toast({
        title: "상품 옵션을 모두 선택해주세요",
        variant: "destructive",
      });
      return;
    }
    const body = {
      UserUuid: session?.user._id,
      OriginUuid: btoa(result.Uuid),
      Size: selectValue.size,
      Color: selectValue.color,
      Cnt: itemCounter,
    };

    const res = await fetch("/api/post/newCart/", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((r) => r.json());

    console.log(res);

    if (res) {
      router.push("/cart");
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
                {result.Title}
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
              {new Intl.NumberFormat("ko-KR", {
                style: "currency",
                currency: "KRW",
              }).format(parseInt(result?.Price ?? "0"))}
            </div>
            <div className="flex gap-1">
              <input
                value={itemCounter}
                onChange={handleInputChange}
                className="text-[10px] text-black font-normal font-pre w-[37px] h-[18px] pl-2 rounded-sm border border-neutral-300 dark:bg-white"
                readOnly
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
                {new Intl.NumberFormat("ko-KR", {
                  style: "currency",
                  currency: "KRW",
                }).format(itemCounter * parseInt(result.Price))}
              </div>
              <div className="text-blue-500 text-[10px] font-normal font-pre">
                ({itemCounter}개)
              </div>
            </div>
          </div>
        </>

        <div className="flex mt-[39px]" onClick={handleBuyNow}>
          <button className="w-[315px] h-[41px] bg-black cursor-pointer">
            <div className="text-neutral-50 h-full text-[11px] flex justify-center items-center font-medium font-pre">
              Buy it Now
            </div>
          </button>
        </div>
        <div className="flex mt-1.5">
          <button
            className="w-[315px] h-[41px] bg-neutral-50 border border-black cursor-pointer"
            onClick={newCart}
          >
            <div className="text-black text-[11px] h-full font-medium font-body flex justify-center items-center">
              Add to Cart
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopOption;
