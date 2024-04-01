import Footer from "../_components/footer";
import Header from "../_components/header";
import Link from "next/link";
import Pagination from "../_components/pagination";

interface Notice {
  Uuid: string;
  Title: string;
  Description: string;
  Date: string;
  Images: string[];
}

async function fetchData() {
  try {
    const response: { results: Notice[] } = await fetch(
      `http://3.39.237.151:8080/notice/`,
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

const NoticePage = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = parseInt(searchParams.page);

  const data = await fetchData();

  return (
    <>
      <Header />
      <div className="flex justify-center pt-[200px] pb-[91px] bg-neutral-50 dark:bg-inherit">
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
              {data?.map((arg, i) => (
                <div
                  key={i}
                  className="h-10 w-full border-b border-gray-200 justify-center items-center inline-flex"
                >
                  <div className="w-[70px] h-[30px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      {i + 1}
                    </div>
                  </div>
                  <div className="w-[700px] h-[30px] justify-start items-center flex">
                    <Link
                      href={"/notice/" + btoa(arg.Uuid)}
                      className="text-black dark:text-neutral-50 text-[13px] font-normal font-body uppercase"
                    >
                      {arg.Title}
                    </Link>
                  </div>
                  <div className="w-[70px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      sumrov
                    </div>
                  </div>
                  <div className="w-[200px] justify-center items-center flex">
                    <div className="text-black dark:text-neutral-50 text-xs font-light font-body uppercase">
                      {arg.Date}
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

export default NoticePage;
