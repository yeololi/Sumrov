import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";
import { qna_data } from "../data";

const FAQ = ({ params }: { params: { pageId: number } }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[91px] bg-slate-50 dark:bg-neutral-900">
        <div className="flex-col justify-center items-start gap-[50px] inline-flex">
          <div className="flex-col justify-start items-center gap-[70px] flex">
            <div className="text-[32px] font-bold font-nav tracking-[3.20px]">
              FAQ
            </div>
            <div className="pb-[50px] border border-gray-200 flex-col justify-center items-center flex">
              <div className="flex-col justify-center items-center flex">
                <div className="justify-start items-start inline-flex">
                  <div className="w-40 h-[46px] bg-zinc-100 dark:bg-zinc-800 border-r border-b border-gray-200 dark:border-neutral-50 justify-start items-center flex">
                    <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-light font-pre tracking-wider">
                        제목
                      </div>
                    </div>
                  </div>
                  <div className="w-[841px] h-[46px] border-b border-gray-200 dark:border-neutral-50 justify-start items-center flex">
                    <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body">
                        {qna_data[params.pageId - 1].title}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 justify-start items-start inline-flex">
                  <div className="w-40 h-[46px] bg-zinc-100 dark:bg-zinc-800 border-r border-gray-200 justify-start items-center flex">
                    <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-light font-pre tracking-wider">
                        작성자
                      </div>
                    </div>
                  </div>
                  <div className="w-[841px] h-[46px] justify-start items-center flex">
                    <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body">
                        SUMROV
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-center gap-[50px] flex">
                <div className="w-[940px] h-[46px] pr-[795px] pt-[15px] pb-4 border-b border-gray-200 dark:neutral-50 justify-start items-center inline-flex">
                  <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      {qna_data[params.pageId - 1].date}
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-[50px] flex">
                  <div className="w-[890px] text-sm font-light font-pre uppercase whitespace-pre">
                    {qna_data[params.pageId - 1].title}
                    <br />
                    <br />
                    {qna_data[params.pageId - 1].ans}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={"/FAQ?page=1"}
            className="w-[100px] h-[30px] pt-1.5 pb-[7px] border border-gray-200 dark:neutral-50 justify-center items-center inline-flex"
          >
            <div className="text-black dark:text-neutral-50 text-sm font-light font-pre uppercase tracking-wide">
              목록
            </div>
          </Link>
          {qna_data[params.pageId] && (
            <div className="flex border border-gray-200 dark:neutral-50 h-10">
              <div className="w-[150px] h-10 pt-[11px] pb-3 border-r border-gray-200 justify-center items-center inline-flex">
                <div className="text-black dark:text-neutral-50 text-sm font-light font-pre tracking-wider">
                  다음글
                </div>
              </div>
              <div className="w-[841px] h-10 justify-start items-center inline-flex">
                <div className="self-stretch pl-[15px] justify-center items-center inline-flex">
                  <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                    {qna_data[params.pageId].title}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
