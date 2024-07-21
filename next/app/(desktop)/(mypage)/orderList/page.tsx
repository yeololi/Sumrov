import { Button } from "@/components/ui/button";
import { getServerSession, Session } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "@/util/authOption";
import Header from "../../_components/header";
import Footer from "../../_components/footer";
import MypageButton from "../_components/mypageButton";
import { fetchData, fetchPaymentData } from "@/lib/utils";
import { Product } from "../../shop/page";
import Link from "next/link";

export interface saleType {
  Uuid: string;
  CustomerName: string;
  Product: string;
  PostNum: string;
  Addr: string;
  Phone: string;
  Price: string;
  Amount: string;
  Status: string;
  Date: string;
}

export interface newSaleType extends saleType {
  price: number[];
  amount: number[];
  color: string[];
  size: string[];
}

async function orderList() {
  const session = await getServerSession();
  const user = session?.user;

  let { data, postData } = await fetchData(user?.name as string);

  const set = new Set(
    data?.map((value) => value.Date.split(" ")[0].split("-").join(". "))
  );

  const uniqueArr = [...set];

  const saleData: newSaleType[] | undefined = data?.map((value) => ({
    ...value,
    Date: value.Date.split(" ")[0].split("-").join(". "),
    price: JSON.parse(value.Price),
    amount: JSON.parse(value.Amount).map((v: any) => v.amount),
    size: JSON.parse(value.Amount).map((v: any) => v.color),
    color: JSON.parse(value.Amount).map((v: any) => v.size),
  }));

  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[91px] bg-neutral-50 dark:bg-inherit">
        <div className="w-[1040px] flex-col justify-start items-center gap-[70px] inline-flex">
          <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
            MY PAGE
          </div>
          <div className="flex flex-row gap-[120px]">
            <div className="flex flex-col">
              <MypageButton />
            </div>
            <div className="w-[808px] flex-col justify-center items-start gap-10 inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-center items-center gap-0.5 flex">
                  <div className="text-black text-lg font-semibold font-pre">
                    {user?.name + " 님의 주문 내역"}
                  </div>
                </div>
              </div>
              {uniqueArr.map((date, key) => (
                <div
                  key={key}
                  className="flex-col justify-center items-start gap-4 flex"
                >
                  <div className="text-black text-[17px] font-medium font-pre">
                    {date}
                  </div>
                  <div className="self-stretch py-4 border-t-2 border-gray-200 justify-start items-center gap-[15px] inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-4 inline-flex">
                      {postData !== undefined &&
                        saleData?.map(
                          (value, i) =>
                            value.Date === date && (
                              <div
                                key={i}
                                className="w-[808px] h-[119px] pr-10 flex-col justify-center items-center gap-4 flex"
                              >
                                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                                  <div className="justify-start items-center gap-[11px] flex">
                                    <div className="justify-center items-center flex">
                                      <img
                                        className="w-[84px] h-[100px] border border-black"
                                        src={postData![0].MainImage}
                                      />
                                    </div>
                                  </div>
                                  <div className="grow shrink basis-0 h-14 justify-between items-center flex">
                                    <div className="px-4 py-2 flex-col justify-center items-start gap-2 inline-flex">
                                      <div className="text-black text-sm font-normal font-pre">
                                        {postData![i].Title}
                                      </div>
                                      <div className="justify-center items-center gap-2 inline-flex">
                                        <div className="text-zinc-600 text-xs font-normal font-pre">
                                          [옵션 : {saleData[i].color[0]} /{" "}
                                          {saleData[i].size[0]}]
                                        </div>
                                        <div className="text-zinc-600 text-xs font-normal font-pre">
                                          |
                                        </div>
                                        <div className="justify-start items-center gap-10 flex">
                                          <div className="text-center text-zinc-600 text-xs font-normal font-pre">
                                            {saleData[i].amount.reduce(
                                              (acc, cur) => acc + cur,
                                              0
                                            )}
                                            pcs
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="justify-start items-center gap-10 flex">
                                      <div className="text-center text-black text-sm font-medium font-pre">
                                        KRW{" "}
                                        {saleData[i].price
                                          .reduce((acc, cur) => acc + cur, 0)
                                          .toLocaleString()}
                                      </div>
                                    </div>
                                    <div className="flex-col justify-center items-center inline-flex">
                                      <Link
                                        href={"/orderList/" + saleData[i].Uuid}
                                        className="h-[25px] px-2 bg-zinc-800 justify-center items-center gap-4 inline-flex"
                                      >
                                        <div className="text-center text-neutral-50 text-xs font-medium font-pre">
                                          상세보기
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default orderList;
