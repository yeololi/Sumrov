import { DatePickerWithRange } from "@/components/ui/datePicker";
import { Select, SelectTrigger } from "@/components/ui/select";
import { fetchData } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { newSaleType } from "@/app/(desktop)/(mypage)/orderList/page";
import Link from "next/link";

const Mypage_search = async () => {
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
      <div className="w-full px-5 flex flex-col items-start justify-start gap-[17px] ">
        <div className="w-full">
          <div className="flex flex-col gap-[13px] font-bold text-[13px]">
            <div>주문내역 조회</div>
          </div>
          <div className="mt-[13px] w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
        </div>
        {postData !== undefined &&
          saleData?.map((value, i) => (
            <div
              key={i}
              className="w-full h-[159px] relative flex flex-col gap-[11px]"
            >
              <div className="text-black text-[13px] font-medium font-pre">
                {value.Date}
              </div>
              <div className="flex">
                <img
                  className="w-[70px] h-[93.28px] border border-black"
                  src={postData![0].MainImage}
                />

                <div className="ml-[11px] flex flex-col">
                  <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="text-black text-[11px] font-medium font-pre">
                      {postData![i].Title}
                    </div>
                    <div className="text-black text-[11px] font-semibold font-pre">
                      KRW{" "}
                      {value.price
                        .reduce((acc, cur) => acc + cur, 0)
                        .toLocaleString()}
                    </div>
                  </div>
                  <div className="text-[#919191] mt-[22px] text-[10px] font-medium font-pre">
                    {value.Status}
                  </div>
                </div>
              </div>
              <div className="flex gap-[15px]">
                <Link
                  href={"/mobile/orderList/" + value.Uuid}
                  className="px-2 py-0.5 bg-[#919191]"
                >
                  <div className="text-white text-[11px] font-normal font-pre">
                    조회
                  </div>
                </Link>
                <Link href={"/"} className="px-2 py-0.5 bg-black">
                  <div className="text-white text-[11px] font-normal font-pre">
                    구매 취소
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="w-[100vw] h-0 border-[1px] border-solid border-[#00000040] dark:border-[#ffffff40]"></div>
    </>
  );
};

export default Mypage_search;
