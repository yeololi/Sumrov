"use client";

import Link from "next/link";
import Footer from "../../_components/footer";
import Header from "../../_components/header";

interface Notice {
  Uuid: string;
  Title: string;
  Description: string;
  Date: string;
  Images: string[];
}

async function fetchData(params: string) {
  try {
    const response: { results: Notice[] } = await fetch(
      `http://3.39.237.151:8080/notice/` + atob(params),
      {
        method: "GET",
      }
    ).then((r) => r.json());

    if (response) {
      return response.results;
    } else {
      console.log("res.result is not an array or res is undefined");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

const NoticePageDetail = async ({ params }: { params: { pageId: string } }) => {
  const data = await fetchData(params.pageId);

  return (
    <>
      <Header />
      {data && (
        <div className="w-full flex flex-col items-center border-b border-black border-opacity-25">
          <Link
            href={"/mobile/notice"}
            className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[31px]"
          >
            NOTICE
          </Link>
          <div className="w-full">
            <div className="w-full flex flex-col gap-1 mb-[9.5px] ml-[17px]">
              <div className="flex">
                <div className="text-zinc-800 text-sm font-semibold font-pre dark:text-white">
                  {data[0].Title}
                </div>
              </div>
              <div className="flex gap-[13px]">
                <div className="text-neutral-400 text-[10px] font-medium font-pre tracking-widest">
                  SUMROV
                </div>
                <div className="text-neutral-400 text-[10px] font-medium font-pre tracking-wide">
                  {data[0].Date}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 w-full flex flex-col items-center">
              {data[0].Images[0] && (
                <div className="flex justify-center items-center h-[462.5px]">
                  <img
                    className="w-[300px] h-[400px] shadow"
                    src={data[0].Images[0]}
                  />
                </div>
              )}
              <div className="w-[350px] h-[0px] border-2 border-neutral-300" />
              <div className="w-[350px] flex justify-center items-center border-b border-gray-200 mt-10 pb-10">
                <div className="flex-col justify-start items-center gap-[9px] flex">
                  <span className="text-zinc-800 dark:text-white text-xs font-medium font-pre">
                    {data[0].Description}
                  </span>
                </div>
              </div>
              <div className="h-[81px] w-full pl-[18px] pt-[14px]">
                <Link
                  href={"/mobile/notice"}
                  className="w-10 h-[23px] bg-neutral-400 flex justify-center items-center"
                >
                  <div className="text-neutral-50 text-[11px] font-normal font-noto">
                    목록
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default NoticePageDetail;
