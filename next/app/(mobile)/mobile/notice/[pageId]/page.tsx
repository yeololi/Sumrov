import Footer from "../../_components/footer";
import Header from "../../_components/header";

const NoticePageDetail = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center border-b border-black border-opacity-25">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[121px] mb-[31px]">
          NOTICE
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col gap-1 mb-[9.5px] ml-[17px]">
            <div className="flex">
              <div className="text-zinc-800 text-sm font-semibold font-body dark:text-white">
                Lorem ipsum dolor sit amet,
              </div>
              <div className="text-zinc-800 text-[13px] font-medium font-body dark:text-white">
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
          <div className="border-t border-gray-200 w-full flex flex-col items-center">
            <div className="flex justify-center items-center h-[462.5px]">
              <img
                className="w-[300px] h-[400px] shadow"
                src="https://via.placeholder.com/300x400"
              />
            </div>
            <div className="w-[350px] h-[0px] border-2 border-neutral-300" />
            <div className="h-[126px] w-full flex justify-center items-center border-b border-gray-200">
              <div className="flex-col justify-start items-center gap-[9px] flex">
                <span className="text-zinc-800 dark:text-white text-xs font-medium font-body">
                  로램잇섬 로램잇섬 Lorem ipsum dolor sit amet,
                </span>
                <span className="text-zinc-800 dark:text-white text-xs font-medium font-body">
                  Lorem ipsum dolor sit amet
                </span>
                <div className="text-zinc-800 dark:text-white text-xs font-medium font-body">
                  로램잇섬 로램잇섬 로램잇섬 로램
                </div>
              </div>
            </div>
            <div className="h-[81px] w-full pl-[18px] pt-[14px]">
              <div className="w-10 h-[23px] bg-neutral-400 flex justify-center items-center">
                <div className="text-neutral-50 text-[11px] font-normal font-body">
                  목록
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoticePageDetail;
