import Footer from "../_components/footer";
import Header from "../_components/header";
import Pagination from "../_components/pagination";
import Link from "next/link";

export const qna_data = [
  {
    title: "Q. 카드 결제 외에 다른 결제 수단 이용이 가능할까요?",
    ans: `A. 현재 진행 가능한 결제 수단은 무통장 입금 입니다. 
그외 카드 결제, 네이버 페이 등 타 결제 방법은 사용이 어렵습니다.`,
    date: "2022-04-05 21:36:16",
  },
  {
    title: "Q. 반품 정책이 어떻게 될까요?",
    ans: `A. 교환 신청 방법

마이페이지 > 주문내역조회 > 주문상세보기 > 교환신청 > 교환사유 작성 > 교환하려는 상품 선택 > 확인

 

교환이 가능한 경우

- 상품을 수령하신 날로부터 30일이내

 

교환이 불가능한 경우

- 고객님의 책임이 있는 사유로 상품 등이 멸실 또는 훼손된 경우

- 상품을 수령한지 30일이 지난 상태

 

교환배송비 부담 주체

교환의 원인이 고객님께 있는 경우: 상품 반송(왕복) 비용을 고객님이 부담. 색상 및 사이즈 교환 등.

교환의 원인이 시타에게 있는 경우: 상품 반송(왕복) 비용을 시타가 부담. 파손, 오배송 등.`,
    date: "2022-04-05 21:36:16",
  },
  {
    title: "Q. 반품 정책이 어떻게 될까요?",
    ans: `A. 반품 신청 방법

마이페이지 > 주문내역조회 > 주문상세보기 > 반품신청 > 반품사유 작성 > 반품하려는 상품 선택 > 확인

 

반품이 가능한 경우

- 상품을 수령하신 날로부터 30일이내

 

반품이 불가능한 경우

- 고객님의 책임이 있는 사유로 상품 등이 멸실 또는 훼손된 경우

- 상품을 수령한지 30일이 지난 상태

 

* 고객님의 마음이 바뀌어 반품을 하실 경우 상품 반송(왕복) 비용은 고객님께서 부담하셔야 합니다.

(색상 및 사이즈 교환 등 포함)

 

환불 방법

반품 진행한 주문건에 사용된 결제 방식으로 환불`,
    date: "2022-04-05 21:36:16",
  },
  {
    title: "Q. 오프라인 매장은 없나요?",
    ans: "A. 현재 온라인으로만 구매가 가능하십니다. 추후 오프라인에서도 찾아 보실 수 있습니다.",
    date: "2022-04-05 21:36:16",
  },
];

const FAQ = ({ searchParams }: { searchParams: { page: string } }) => {
  const page = parseInt(searchParams.page);

  let totalPages = qna_data ? Math.ceil(qna_data.length / 10) : 30;

  const realresult = qna_data?.slice((page - 1) * 10, page * 10);

  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[91px] bg-slate-50 dark:bg-neutral-900">
        <div className="w-[1040px] h-[719px] flex-col justify-start items-center gap-[70px] inline-flex">
          <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
            FAQ
          </div>
          <div className="flex-col justify-start items-center gap-20 flex">
            <div className="flex-col justify-center items-center flex">
              <div className="w-full border-t border-b border-neutral-400 justify-center items-center flex">
                <div className="w-[70px] h-[30px] justify-center items-center flex">
                  <div className="text-zinc-600 dark:text-neutral-50 text-xs font-light font-body uppercase">
                    NO
                  </div>
                </div>
                <div className="w-[700px] h-[30px] justify-center items-center flex">
                  <div className="text-zinc-600 dark:text-neutral-50 text-xs font-light font-body uppercase">
                    subject
                  </div>
                </div>
                <div className="w-[70px] justify-center items-center flex">
                  <div className="text-zinc-600 dark:text-neutral-50 text-xs font-light font-body uppercase">
                    writer
                  </div>
                </div>
                <div className="w-[200px] h-[30px] justify-center items-center flex">
                  <div className="text-zinc-600 dark:text-neutral-50 text-xs font-light font-body uppercase">
                    date
                  </div>
                </div>
              </div>
              {realresult.map((arg, i) => (
                <div
                  key={i}
                  className="h-10 w-full border-b border-gray-200 justify-center items-center inline-flex"
                >
                  <div className="w-[70px] h-[30px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      12
                    </div>
                  </div>
                  <div className="w-[700px] h-[30px] justify-start items-center flex">
                    <Link
                      href={"/FAQ/" + (i + 1)}
                      className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase"
                    >
                      {arg.title}
                    </Link>
                  </div>
                  <div className="w-[70px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      sumrow
                    </div>
                  </div>
                  <div className="w-[200px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      2022-04-05 21:36:16
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={page} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
