import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import Footer from "../_components/footer";
import Header from "../_components/header";
import Link from "next/link";
import Pagination from "../_components/pagination";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const NoticePage = ({ searchParams }: { searchParams: { page: string } }) => {
    const page = parseInt(searchParams.page);

    return (
        <>
            <Header />
            <div className="flex justify-center pt-[200px] pb-[91px] bg-neutral-50">
                <div className="w-[1040px] h-[719px] flex-col justify-start items-center gap-[70px] inline-flex">
                    <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
                        NOTICE
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
                            {data.map((arg, i) => (
                                <Link
                                    href={"/notice/" + i}
                                    key={i}
                                    className="h-10 w-full border-b border-gray-200 justify-center items-center inline-flex"
                                >
                                    <div className="w-[70px] h-[30px] justify-center items-center flex">
                                        <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                                            12
                                        </div>
                                    </div>
                                    <div className="w-[700px] h-[30px] justify-start items-center flex">
                                        <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                                            2월 BEST REVIEW EVENT !
                                        </div>
                                    </div>
                                    <div className="w-[70px] justify-center items-center flex">
                                        <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                                            sumrov
                                        </div>
                                    </div>
                                    <div className="w-[200px] justify-center items-center flex">
                                        <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                                            2022-04-05 21:36:16
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <Pagination totalPages={30} currentPage={page} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NoticePage;
