import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "@/util/authOption";
import Header from "@/app/(desktop)/_components/header";
import Footer from "@/app/(desktop)/_components/footer";
import MypageButton from "../../_components/mypageButton";
import { fetchData } from "@/lib/utils";
import { Product } from "@/app/(desktop)/shop/page";
import { newSaleType, saleType } from "../page";
import Link from "next/link";

async function orderListDetail({ params }: { params: { pageId: string } }) {
  const session = await getServerSession();
  const user = session?.user;

  const { data, postData } = (await fetchData(user?.name as string)) as {
    data: saleType[];
    postData: Product[];
  };

  const saleData: newSaleType[] = data.map((value) => ({
    ...value,
    Date:
      value.Date.split(" ")[0].split("-").join(". ") +
      " " +
      value.Date.split(" ")[1],
    price: JSON.parse(value.Price),
    amount: JSON.parse(value.Amount).map((v: any) => v.amount),
    size: JSON.parse(value.Amount).map((v: any) => v.color),
    color: JSON.parse(value.Amount).map((v: any) => v.size),
  }));

  const thisData = saleData.filter((item) => item.Uuid === params.pageId)[0];
  const thisPostData = postData.filter(
    (item) => item.Uuid === JSON.parse(thisData.Product)[0]
  );

  console.log(thisData, thisPostData);

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
            <div className="w-[814px] px-2 flex-col justify-start items-start gap-20 inline-flex">
              <div className="self-stretch py-4 border-b border-gray-200 justify-center items-center gap-[26px] inline-flex">
                <div className="text-black text-lg font-medium font-pre">
                  상세 주문내역
                </div>
                <div className="grow shrink basis-0 h-[17px] justify-between items-start flex">
                  <div className="text-black text-sm font-normal font-pre">
                    주문번호 : {thisData.Uuid}
                  </div>
                  <div className="text-neutral-400 text-[11px] font-normal font-pre">
                    결제 날짜 : {thisData.Date}
                  </div>
                </div>
              </div>
              <div className="self-stretch pr-10 flex-col justify-start items-start gap-20 flex">
                {thisData.price.map((value, i) => (
                  <div
                    key={i}
                    className="self-stretch justify-center items-start gap-10 inline-flex"
                  >
                    <div className="justify-start items-center gap-[11px] flex">
                      <div className="justify-center items-center flex">
                        <img
                          className="w-[84px] h-[100px] border border-black"
                          src={thisPostData[i].MainImage}
                        />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
                      <div className="flex-col justify-center items-start gap-4 flex">
                        <div className="text-neutral-900 text-lg font-bold font-nav">
                          SUMROV
                        </div>
                        <div className="justify-center items-center gap-2 inline-flex">
                          <div className="p-1 border border-black justify-start items-end flex">
                            <div className="text-center text-black text-xs font-semibold font-pre">
                              {thisData.Status}
                            </div>
                          </div>
                          <div className="text-black text-sm font-normal font-pre">
                            {thisPostData[i].Title}
                          </div>
                        </div>
                        <div className="justify-start items-center gap-10 inline-flex">
                          <div className="text-center text-black text-sm font-medium font-pre">
                            KWR {value.toLocaleString()}
                          </div>
                        </div>
                        <div className="justify-start items-center gap-10 inline-flex">
                          <div className="text-center text-zinc-600 text-xs font-normal font-pre">
                            주문수량 : {thisData.amount[i]}pcs
                          </div>
                        </div>
                        <div className="justify-center items-center gap-2 inline-flex">
                          <div className="text-zinc-600 text-xs font-normal font-pre">
                            [옵션 : {thisData.color[i]} / {thisData.size[i]}]
                          </div>
                        </div>
                        <div className="text-zinc-900 text-xs font-normal font-pre">
                          구매 확정일 : {thisData.Date}
                        </div>
                      </div>
                      <div className="self-stretch justify-between items-center inline-flex">
                        <div className="px-[120px] py-3 bg-zinc-800 justify-center items-center gap-4 flex">
                          <div className="text-center text-neutral-50 text-sm font-medium font-pre">
                            배송조회
                          </div>
                        </div>
                        <Link
                          href={"/shop/" + btoa(thisPostData[i].Uuid)}
                          className="px-[120px] py-3 bg-zinc-800 justify-center items-center gap-4 flex"
                        >
                          <div className="text-center text-neutral-50 text-sm font-medium font-pre">
                            재구매
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="self-stretch h-[244px] flex-col justify-center items-end gap-10 flex">
                  <div className="self-stretch py-4 border-b border-gray-200 justify-start items-center inline-flex">
                    <div className="text-black text-lg font-medium font-pre">
                      결제 정보
                    </div>
                  </div>
                  <div className="self-stretch h-[151px] flex-col justify-center items-center gap-4 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        결제 방법
                      </div>
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        무통장입금
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        총 상품금액
                      </div>
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        {Number(
                          thisData.price.reduce(
                            (acc, cur, i) => acc + cur * thisData.amount[i],
                            0
                          )
                        ).toLocaleString()}
                        원
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        상품 할인금액
                      </div>
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        {thisPostData
                          .reduce((acc, cur) => acc + cur.Sale, 0)
                          .toLocaleString()}
                        원
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        배송비
                      </div>
                      <div className="text-neutral-400 text-sm font-medium font-pre">
                        {Number(3000).toLocaleString()}원
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-black text-base font-medium font-pre">
                        총 {thisData.amount.reduce((acc, cur) => acc + cur, 0)}
                        개 결제금액
                      </div>
                      <div className="text-black text-base font-medium font-pre">
                        {(
                          thisData.price.reduce(
                            (acc, cur, i) =>
                              acc +
                              cur * thisData.amount[i] -
                              thisPostData.reduce(
                                (acc, cur) => acc + cur.Sale,
                                0
                              ),
                            0
                          ) + 3000
                        ).toLocaleString()}
                        원
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[186px] flex-col justify-start items-start gap-10 flex">
                  <div className="self-stretch py-4 border-b border-gray-200 justify-start items-center inline-flex">
                    <div className="text-black text-lg font-medium font-pre">
                      배송지 정보
                    </div>
                  </div>
                  <div className="self-stretch h-[93px] flex-col justify-center items-center gap-[21px] flex">
                    <div className="self-stretch justify-between items-start inline-flex">
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        받는분
                      </div>
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        {thisData.CustomerName}
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        주소
                      </div>
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        {thisData.Addr.split(";").join(" ")}
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        연락처
                      </div>
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        {thisData.Phone}
                      </div>
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        송장 번호
                      </div>
                      <div className="text-neutral-900 text-sm font-medium font-pre">
                        {thisData.PostNum}
                      </div>
                    </div>
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
}

export default orderListDetail;
