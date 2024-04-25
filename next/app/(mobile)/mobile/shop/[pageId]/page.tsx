import Footer from "../../_components/footer";
import Header from "../../_components/header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import ShopOption from "../_components/shopOption";

const data = [
  {
    title: "-결제 안내-",
    content: `고액 결제의 경우, 안전을 위해 카드사에서 확인 전화를 드릴 수 있습니다.
확인 과정에서 도난 카드의 사용이나 타인 명의의 주문 등 정상적인 주문이 아니라고 판단될 경우
임의로 주문을 보류 또는 취소할 수 있습니다.

무통장 입금은 상품 구매 대금을 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접입금하시면 됩니다.
주문시 입력한 입금자명과 실제 입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을
하셔야하며 입금되지 않은 주문은 자동취소 됩니다.`,
  },
  {
    title: "-배송 안내-",
    content: `교환 및 반품 주소
교환 및 반환 사유 확인후 제공 - 문의하기(인스타)

- 배송 방법 : 택배
- 배송 지역 : 전국지역
- 배송 비용 : 조건부 무료 (주문 금액 40,000원 미만일 때 배송비 3,000원이 추가됩니다.)
- 배송 기간 : 3일 ~ 7일
- 배송 안내 : 주문금액 4만원 이상 구매시 무료 배송 됩니다.

* 주문 기준 배송기한은 1~2일 이내이며 제품 종류에 따라 7일 이내 배송됩니다. 다만, 
특수한 경우 별도 배송안내를 통해 공지 드릴 수 있습니다.

* 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.

* 고객님께서 주문하신 상품은 입금 확인 후 배송해 드립니다. 다만, 상품종류에 따라서
상품의 배송이 다소 지연될 수 있습니다.`,
  },
  {
    title: "-교환/환불 안내-",
    content: `교환 및 반품이 가능한 경우

- 상품을 공금 받으신 날로부터 7일이내. 단, 가전제품의 경우 포장을 개봉하였거나 포장이
훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.

- 공금받으신 상품 및 용역의 내용이 표시, 광고 내용과 다르거나 다르게 이행된 경우에는
공금받은 날로부터 3개월이내, 그 사실을 알게 된 날로부터 30일 이내
교환 및 반품이 불가능한 경우

- 고객님의 책임이 있는 사유로 상품 등이 멸실 또는 훼손된 경우. 단, 상품의 내용을
확인하기 위하여 포장 등을 훼손한 경우는 제외

- 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우
(예 : 가전제품, 식품, 음반 등. 단, 액정화면이 부착된 노트북, LCD모니터, 디지털 카메라
등의 불량화소에 따른 반품/교환은 제조사 기준에 따릅니다.)

- 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우. 단, 화장품
등의 경우 시용제품을 제공한 경우에 한 합니다.

- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우

- 복제가 가능한 상품등의 포장을 훼손한 경우
(자세한 내용은 고객만족센터 1:1 E-MAIL 상담을 이용해 주시기 바랍니다.)


* 고객님의 마음이 바뀌어 교환/반품을 하실 경우 상품반송 비용은 고객님께서 부담하셔야
합니다.
(색상 및 사이즈 교환 등 포함)

환불

환불시 반품 확인여부를 확인한 후 영업일 기준 3일 이내에 결제 금액을 환불해 드립니다.`,
  },
];

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

async function fetchData(uuid: string) {
  try {
    const response: { results: post[] } = await fetch(
      `http://3.39.237.151:8080/post/uuid/${atob(uuid)}`,
      {
        method: "GET",
      }
    ).then((r) => r.json());

    if (response) {
      return response.results[0];
    } else {
      console.log("res.result is not an array or res is undefined");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

const ShopDetailPage = async ({ params }: { params: { pageId: string } }) => {
  const result = await fetchData(params.pageId);
  console.log(result);
  if (!result) {
  }

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
            src={result?.MainImage}
          />

          <div className="text-black dark:text-white w-full text-[13px] font-medium font-pre mt-[12px]">
            {result?.Title}
          </div>
          <div className="w-[315px] mt-[53px] text-neutral-600 dark:text-white text-[8px] font-normal font-pre">
            {result?.Description}
          </div>
        </div>

        <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />
        {result && <ShopOption result={result} />}

        <div className="mt-[98px] flex flex-col items-center">
          <div className="gap-[25.21px] flex flex-col">
            {result?.DetailImages.map((image, i) => (
              <img
                key={i}
                className="w-[300px] h-[400px] border border-black"
                src={image}
              />
            ))}
          </div>

          <Accordion
            className="text-black dark:text-white font-noto w-[360px]"
            type="single"
            collapsible
          >
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
