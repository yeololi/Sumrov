import { cn } from "@/lib/utils";
import Footer from "../_components/footer";
import Header from "../_components/header";

const data = [{}, {}, {}, {}, {}, {}, {}];

const NoticePage = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25 pb-[49px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[31px]">
          FAQ
        </div>
        {data.map((args, i) => (
          <div
            key={i}
            className={cn(
              "w-full h-16 bg-white dark:bg-neutral-900 border-gray-200 py-[15px] px-[16px]",
              i == 0 ? "border-y" : "border-b"
            )}
          >
            <div className="h-full w-full flex flex-col gap-1">
              <div className="flex">
                <div className="text-zinc-800 dark:text-white text-xs font-normal font-body">
                  Lorem ipsum dolor sit amet,
                </div>
                <div className="text-zinc-800 dark:text-white text-xs font-normal font-body">
                  로램잇섬
                </div>
              </div>
              <div className="flex gap-[13px]">
                <div className="text-neutral-400 text-[10px] font-medium font-body tracking-widest">
                  SUMROV
                </div>
                <div className="text-neutral-400 text-[10px] font-medium font-body tracking-wide">
                  2024-02-11 16:04:15
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-[30px] dark:text-white text-black text-[11px] font-medium font-body">
          Load more (1/1)
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoticePage;
