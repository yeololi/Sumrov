import Footer from "../_components/footer";
import Header from "../_components/header";
import Pagination from "../_components/pagination";
import Link from "next/link";
import { qna_data } from "./data";

const FAQ = ({ searchParams }: { searchParams: { page: string } }) => {
  const page = parseInt(searchParams.page);

  let totalPages = qna_data ? Math.ceil(qna_data.length / 10) : 30;

  const realresult = qna_data?.slice((page - 1) * 10, page * 10).reverse();

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
                <Link
                  href={"/FAQ/" + (realresult.length - i)}
                  key={i}
                  className="h-10 w-full border-b border-gray-200 justify-center items-center inline-flex"
                >
                  <div className="w-[70px] h-[30px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      {realresult.length - i}
                    </div>
                  </div>
                  <div className="w-[700px] h-[30px] justify-start items-center flex">
                    <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                      {arg.title}
                    </div>
                  </div>
                  <div className="w-[70px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      sumrow
                    </div>
                  </div>
                  <div className="w-[200px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      {arg.date}
                    </div>
                  </div>
                </Link>
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
