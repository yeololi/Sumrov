import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "../_components/footer";
import Header from "../_components/header";

const data = [{}, {}, {}, {}, {}, {}, {}];

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
      `http://3.39.237.151:8080/notice`,
      {
        method: "GET",
        cache: "no-store",
      }
    ).then((r) => r.json());

    if (response) {
      // const chunkData = chunk(response.results, 9)
      //   .map((subArray) => chunk(subArray, 3))
      //   .flat();

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

const NoticePage = async () => {
  let data = await fetchData();

  data?.reverse();

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[31px]">
          NOTICE
        </div>
        {data?.map((args, i) => (
          <div
            key={i}
            className={cn(
              "w-full h-16 bg-white dark:bg-neutral-900 border-gray-200 py-[15px] px-[16px]",
              i == 0 ? "border-y" : "border-b"
            )}
          >
            <Link
              href={"/mobile/notice/" + btoa(args.Uuid)}
              className="h-full w-full flex flex-col gap-1"
            >
              <div className="flex">
                <div className="text-zinc-800 dark:text-white text-xs font-normal font-body">
                  {args.Title}
                </div>
              </div>
              <div className="flex gap-[13px]">
                <div className="text-neutral-400 text-[10px] font-medium font-body tracking-widest uppercase">
                  sumrov
                </div>
                <div className="text-neutral-400 text-[10px] font-medium font-body tracking-wide">
                  {args.Date}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default NoticePage;
