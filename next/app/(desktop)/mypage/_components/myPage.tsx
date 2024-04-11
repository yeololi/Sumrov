"use client";
import { useNavigate } from "react-router-dom";
const data = ["주문내역 조회", "회원정보", "장바구니", "로그아웃"];
const data2 = ["입금전", "배송준비중", "배송중", "배송완료", "교환/반품"];
function MyPageset() {
    return (
        <div className="flex flex-row gap-[120px]">
            <div className="flex flex-col">
                {data.map((arg, key) => (
                    <div className="text-[12px] font-bold dark:text-white text-[#000] mb-[40px] min-w-[78px]">
                        {arg}
                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row mb-[32px]">
                    <div className="text-[16px] font-bold text-[#000] mr-[2px] dark:text-white">
                        Lorem 님의 주문 현황
                    </div>
                    <div className="mt-[3px] text-[12px] font-bold text-[#919191] whitespace-nowrap">
                        (최근 3개월)
                    </div>
                </div>
                <div className="flex flex-row justify-around h-[132px] w-[815px] border-y border-[#EBEBEB] px-[56px] py-[40px]">
                    {data2.map((arg, key) => (
                        <div className="flex flex-col">
                            <div className="mb-[16px] text-[14px] font-bold text-[#919191] whitespace-nowrap">
                                {arg}
                            </div>
                            <div className=" font-bold text-center">0</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default MyPageset;
