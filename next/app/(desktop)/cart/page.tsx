import Footer from "../_components/footer";
import Header from "../_components/header";
import { cart, columns } from "./colums";
import { DataTable } from "./data-tables";

const data: cart[] = [
  {
    id: "1",
    name: "asd",
    price: 123,
    amount: 1,
    option: { color: "black", size: "L" },
    image: "asd",
  },
];

const Cart = () => {
  return (
    <>
      <Header />
      <div className="flex-col justify-center items-center gap-10 flex pt-[150px] pb-[300px]">
        <div className="flex-col justify-center items-center gap-6 flex">
          <div className="text-center text-black text-[26px] font-semibold font-['Cormorant Garamond'] tracking-[2.60px]">
            CART
          </div>
          <div className="flex-col justify-center items-center gap-10 flex">
            <DataTable columns={columns} data={data} />
            <div className="w-[1000px] flex-col justify-start items-center flex">
              <div className="w-[1000px] h-[50px] border-t-2 border-b-2 border-gray-200 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-16 py-2 justify-between items-center flex">
                  <div className="text-center text-black text-sm font-normal font-['Cormorant Garamond']">
                    총 상품 금액
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-black text-sm font-normal font-['Cormorant Garamond']">
                    총 할인 정보
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-black text-sm font-normal font-['Cormorant Garamond']">
                    총 배송비
                  </div>
                </div>
                <div className="w-[400px] self-stretch p-2.5 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-black text-base font-normal font-['Cormorant Garamond']">
                    결제 예정 금액
                  </div>
                </div>
              </div>
              <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch justify-between items-center flex">
                  <div className="text-right text-black text-base font-medium font-['Inter']">
                    KWR 20,000
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch justify-between items-center flex">
                  <div className="text-right text-black text-base font-medium font-['Inter']">
                    KWR 100
                  </div>
                </div>
                <div className="grow shrink basis-0 self-stretch justify-between items-center flex">
                  <div className="text-right text-black text-base font-medium font-['Inter']">
                    KWR 0
                  </div>
                </div>
                <div className="w-[400px] self-stretch justify-between items-center flex">
                  <div className="text-right text-black text-lg font-semibold font-['Inter']">
                    KWR 19,900
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center gap-5 inline-flex">
          <div className="w-[425px] h-[50px] py-[9px] bg-neutral-900 justify-center items-center gap-2.5 flex">
            <div className="text-center text-white text-base font-semibold font-['Inter']">
              모든 항목 주문
            </div>
          </div>
          <div className="w-[425px] h-[50px] py-[9px] border border-neutral-900 justify-center items-center gap-2.5 flex">
            <div className="text-center text-neutral-900 text-base font-semibold font-['Inter']">
              선택 항목 주문
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
