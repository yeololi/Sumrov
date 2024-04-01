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

    console.log(response);

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
      {data ? (
        <div className="pt-[200px] pb-[91px] flex justify-center bg-neutral-50 dark:bg-inherit">
          <div className="gap-[50px] flex flex-col">
            <div className="w-[1001px] flex-col justify-start items-center gap-[70px] inline-flex">
              <div className="text-black dark:text-neutral-50 text-[32px] font-bold font-nav tracking-[3.20px]">
                NOTICE
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
                        <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                          {data[0].Title}
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
                        <div className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase">
                          sumrov
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-[50px] flex">
                  <div className="w-[940px] h-[46px] pr-[795px] pt-[15px] pb-4 border-b border-gray-200 dark:neutral-50 justify-start items-center inline-flex">
                    <div className="self-stretch pl-[25px] justify-center items-center inline-flex">
                      <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase whitespace-nowrap">
                        {data[0].Date}
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-center items-center gap-[50px] flex">
                    <img
                      className="w-[680px] h-[680px]"
                      src="/images/notice.png"
                    />
                    <div className="w-[890px] text-black dark:text-neutral-50 text-sm font-light font-pre whitespace-pre-wrap uppercase tracking-wide">
                      {data[0].Description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={"/notice"}
              className="w-[100px] h-[30px] pt-1.5 pb-[7px] border border-gray-200 dark:neutral-50 justify-center items-center inline-flex"
            >
              <div className="text-black dark:text-neutral-50 text-sm font-light font-pre uppercase tracking-wide">
                목록
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
};

export default NoticePageDetail;
