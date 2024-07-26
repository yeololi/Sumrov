import { qna_data } from "@/app/(desktop)/FAQ/data";
import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

const FAQPageDetail = ({ params }: { params: { pageId: number } }) => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[31px]">
          FAQ
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-1 mb-[9.5px] ml-[17px]">
            <div className="flex">
              <div className="text-zinc-800 text-sm font-semibold font-body dark:text-white">
                {qna_data[params.pageId - 1].title}
              </div>
            </div>
            <div className="flex gap-[13px]">
              <div className="text-neutral-400 text-[10px] font-medium font-body tracking-widest">
                SUMROV
              </div>
              <div className="text-neutral-400 text-[10px] font-medium font-body tracking-wide">
                {qna_data[params.pageId - 1].date}
              </div>
            </div>
          </div>
          <div className="border-y border-gray-200 w-full flex pt-[15.5px] pb-[34px] justify-center">
            <div className="w-[329px] flex-col justify-center items-start gap-[25px] inline-flex">
              <span className="text-zinc-800 dark:text-white text-[11px] font-normal font-body">
                {qna_data[params.pageId - 1].title}
              </span>
              <div className="text-zinc-800 dark:text-white text-[11px] font-normal font-body whitespace-pre-line">
                {qna_data[params.pageId - 1].ans}
              </div>
            </div>
          </div>
          <Link
            href={"/mobile/FAQ"}
            className="flex-1 w-full pl-[18px] pt-[14px]"
          >
            <div className="w-10 h-[23px] bg-neutral-400 flex justify-center items-center">
              <div className="text-neutral-50 text-[11px] font-normal font-body">
                목록
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPageDetail;
