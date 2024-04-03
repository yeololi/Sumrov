import { DatePickerWithRange } from "@/components/ui/datePicker";
import { Select, SelectTrigger } from "@/components/ui/select";
import Link from "next/link";

const Mypage_search = () => {
    return (
        <>
            <div className="h-[130vh] flex flex-col items-start justify-start gap-[17px] ">
                <div>
                    <div className="flex flex-col gap-[13px] font-bold text-[13px]">
                        <div>주문내역 조회</div>
                        <div className="w-full flex flex-col items-center gap-[13px]">
                            <DatePickerWithRange className="dark:bg-[#2d2d2d] dark:text-[#919191]" />
                            <Select>
                                <SelectTrigger className="dark:bg-[#2d2d2d] dark:text-[#919191] rounded-sm w-full h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                                    전체 주문처리상태
                                </SelectTrigger>
                            </Select>
                        </div>
                    </div>
                    <div className="mt-[13px] w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
                    <Link
                        href={""}
                        className="mt-[13px] w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center"
                    >
                        <div className="text-neutral-50 dark:text-white text-[11px] font-normal font-noto">
                            조회
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-[13px] font-bold text-[13px]">
                    <div>취소/교환/반품 내역 조회</div>
                    <div className="w-full flex flex-col items-center gap-[13px]">
                        <DatePickerWithRange className="dark:bg-[#2d2d2d] dark:text-[#919191]" />
                        <Select>
                            <SelectTrigger className="dark:bg-[#2d2d2d] dark:text-[#919191] rounded-sm w-full h-[26px] text-neutral-600 text-[11px] font-normal font-pre">
                                전체 주문처리상태
                            </SelectTrigger>
                        </Select>
                    </div>
                </div>
                <div className="w-full h-0 shrink-0 border-[1px] border-solid border-[#ebebeb]"></div>
                <Link
                    href={""}
                    className="w-[46px] h-[25px] bg-neutral-400 flex justify-center items-center"
                >
                    <div className="text-neutral-50 dark:text-white text-[11px] font-normal font-noto">
                        조회
                    </div>
                </Link>
            </div>
            <div className="w-[100vw] h-0 border-[1px] border-solid border-[#00000040] dark:border-[#ffffff40]"></div>
        </>
    );
};

export default Mypage_search;
