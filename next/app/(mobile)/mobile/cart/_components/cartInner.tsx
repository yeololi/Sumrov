"use client";
import { cart } from "@/app/(desktop)/cart/colums";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const CartInner = ({ data }: { data: cart[] }) => {
  const router = useRouter();

  const allOrder = () => {
    const prop = data.map((ai) => ai._id);
    router.push(`/mobile/payment?s=${JSON.stringify(prop)}`);
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black dark:border-white border-opacity-25 pb-[49px] mb-[32px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[26px]">
          CART
        </div>
        {data.map((value, i) => (
          <div
            key={i}
            className="w-[375px] h-[172px] flex-col justify-center items-start py-[18px] px-[20px] flex border-y border-gray-200"
          >
            <div className="justify-start items-start flex gap-[21px] w-full">
              <img
                className="w-[100px] h-[133px] border border-black"
                src={value.image}
              />
              <div>
                <div className="text-black dark:text-white text-xs font-normal font-pre">
                  {value.name}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre mt-[28px]">
                  -{value.color}/{value.size}
                </div>
                <div className="flex mt-[31px] gap-[5px] items-center">
                  <div className="text-black dark:text-white text-[16px] font-normal font-pre">
                    {value.amount}
                  </div>
                </div>
              </div>
              <div className="h-full flex-1 flex justify-end">
                <div
                  onClick={async (e) => {
                    const result = await fetch(
                      `/api/del/delCart/${value._id}`,
                      {
                        method: "DELETE",
                      }
                    ).then((r) => r.json());

                    console.log(result);
                    router.refresh();
                  }}
                  className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre"
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full flex-col justify-start items-start flex gap-[9px] mt-[18px] pb-[21px] border-b border-gray-200 px-[20.5px]">
          <div className="flex justify-between items-center w-full">
            <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
              상품금액
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
              KRW{" "}
              {data.reduce((acc, cur) => acc + cur.price, 0).toLocaleString()}
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
              총 할인금액
            </div>
            <div className="text-neutral-600 dark:text-neutral-400 text-[10px] font-normal font-pre">
              KRW{" "}
              {data.reduce((acc, cur) => acc + cur.sale, 0).toLocaleString()}
            </div>
          </div>
        </div>
        <div className="justify-center items-start gap-[220px] flex mt-[18px]">
          <div className="text-black dark:text-white text-[11px] font-medium font-pre">
            총 결제 금액
          </div>
          <div className="text-black dark:text-white text-[11px] font-medium font-pre">
            KRW{" "}
            {(
              data.reduce((acc, cur) => acc + cur.price, 0) -
              data.reduce((acc, cur) => acc + cur.sale, 0)
            ).toLocaleString()}
          </div>
        </div>
        <Button
          onClick={allOrder}
          className="mt-[28px] w-[335px] h-[41px] rounded-none mb-[61px] font-medium text-[13px] font-pre text-white dark:text-neutral-900"
        >
          결제하기
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default CartInner;
