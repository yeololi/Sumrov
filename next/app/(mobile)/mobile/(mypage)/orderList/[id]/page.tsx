import { newSaleType, saleType } from "@/app/(desktop)/(mypage)/orderList/page";
import { Product } from "@/app/(desktop)/shop/page";
import { fetchData } from "@/lib/utils";
import { getServerSession } from "next-auth";

const Mypage = async ({ params }: { params: { id: string } }) => {
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

  const thisData = saleData.filter((item) => item.Uuid === params.id)[0];
  const thisPostData = postData.filter(
    (item) => item.Uuid === JSON.parse(thisData.Product)[0]
  );

  console.log(thisData, thisPostData);
  return (
    <>
      <div className="flex flex-col items-start justify-start gap-[22px] mb-[50px]">
        <div className="flex flex-col items-start justify-start">
          <div className="text-[13px] font-pre font-medium whitespace-nowrap">
            주문내역 상세
          </div>
        </div>
        <div className="w-[335px] h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
        <div className="flex flex-col items-start justify-start gap-[18px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="text-[13px] font-pre font-medium whitespace-nowrap">
              주문번호 {thisData.Uuid}
            </div>
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              결제 날짜 : {thisData.Date}
            </div>
          </div>
          {thisData.price.map((value, i) => (
            <div
              key={i}
              className="flex flex-row items-start justify-start gap-[10px]"
            >
              <img width="70" height="93" src={thisPostData[i].MainImage}></img>
              <div className="flex flex-col items-start justify-start gap-[36px]">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="text-[11px] font-pre font-medium whitespace-nowrap">
                    {thisPostData[i].Title}
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[3px]">
                    <div className="text-[11px] font-pre font-semibold whitespace-nowrap">
                      KRW {value.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-pre font-medium text-neutral-400 whitespace-nowrap">
                      -{thisData.color[i]}/{thisData.size[i]}{" "}
                      {thisData.amount[i]}개
                    </div>
                  </div>
                </div>
                {/* <div className="relative w-[50px] h-[22px] shrink-0">
                  <div className="absolute left-0 top-0 w-[50px] h-[22px] bg-[#fff] border-[1px] border-solid border-[#d3d3d3]"></div>
                  <div className="absolute left-[7px] top-[5px] text-[10px] font-pre font-medium text-[#508aee] whitespace-nowrap">
                    배송조회
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
        <div className="flex flex-col items-start justify-start gap-[17px]">
          <div className="text-[13px] font-pre font-medium whitespace-nowrap">
            결제 정보
          </div>
          <div className="w-full flex flex-row items-start justify-between overflow-hidden">
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              결제 방법
            </div>
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              무통장입금
            </div>
          </div>
          {true && (
            <>
              <div className="w-full flex flex-row items-start justify-between overflow-hidden">
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  입금 계좌번호
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  3333-28-1677131
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-between overflow-hidden">
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  입금자명
                </div>
                <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                  카카오뱅크 오재희(썸로브(sumrov))
                </div>
              </div>
            </>
          )}
          <div className="w-full flex flex-row items-start justify-between">
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              총 상품금액
            </div>
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              {Number(
                thisData.price.reduce(
                  (acc, cur, i) => acc + cur * thisData.amount[i],
                  0
                )
              ).toLocaleString()}
              원
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-between">
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              상품 할인금액
            </div>
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              {thisPostData
                .reduce((acc, cur) => acc + cur.Sale, 0)
                .toLocaleString()}
              원
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-between">
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              배송비
            </div>
            <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
              {Number(3000).toLocaleString()}원
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-between gap-[204px]">
            <div className="text-[13px] font-pre whitespace-nowrap">
              총 {thisData.amount.reduce((acc, cur) => acc + cur, 0)}개 결제금액
            </div>
            <div className="text-[13px] font-pre whitespace-nowrap">
              {(
                thisData.price.reduce(
                  (acc, cur, i) =>
                    acc +
                    cur * thisData.amount[i] -
                    thisPostData.reduce((acc, cur) => acc + cur.Sale, 0),
                  0
                ) + 3000
              ).toLocaleString()}
              원
            </div>
          </div>
        </div>
        <div className="w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
        <div className="w-full flex flex-col items-start justify-start gap-[15px]">
          <div className="text-[13px] font-pre font-medium whitespace-nowrap">
            배송지 정보
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[21px]">
            <div className="w-full flex flex-row items-start justify-between">
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                받는분
              </div>
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                {thisData.CustomerName}
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between">
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                주소
              </div>
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                {thisData.Addr.split(";").join(" ")}
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-[229px]">
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                연락처
              </div>
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                {thisData.Phone}
              </div>
            </div>
            <div className="w-full flex flex-row items-start justify-between gap-[229px]">
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                송장 번호
              </div>
              <div className="text-[11px] font-pre text-neutral-400 whitespace-nowrap">
                {thisData.PostNum}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mypage;
