import Footer from "../_components/footer";
import Header from "../_components/header";
import Pagination from "../_components/pagination";
import Link from "next/link";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const FAQ = ({ searchParams }: { searchParams: { page: string } }) => {
  const page = parseInt(searchParams.page);
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
              {data.map((arg, i) => (
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
                      href={"/FAQ/" + i}
                      className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase"
                    >
                      Q. 반품 후 환불요청을 했는데 주문금액이랑 다르게 환불 된
                      것 같아요.
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
            <Pagination totalPages={30} currentPage={page} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
