import Footer from "../_components/footer";
import Header from "../_components/header";
import ShopSelect from "./_components/shopSelect";

const data = [
  [{}, {}],
  [{}, {}],
  [{}, {}],
];

const ShopPage = () => {
  return (
    <>
      <Header />
      <div className="w-full flex flex-col dark:bg-neutral-900 justify-center items-center pt-[101px] px-4">
        <ShopSelect />
        <div className="mt-[25px] gap-[25px] flex flex-col">
          {data.map((args, i) => (
            <div key={i} className="gap-[19px] flex">
              {args.map((arg, j) => (
                <div
                  key={j}
                  className="w-[162px] flex-col justify-start items-center gap-[11px] inline-flex"
                >
                  <img
                    className="w-[162px] h-[213px] shadow"
                    src="https://via.placeholder.com/162x213"
                  />
                  <div className="w-[114px] h-[35px] flex flex-col items-center">
                    <div className="text-black dark:text-white text-[11px] font-medium font-body">
                      Lorem ipsum dolor sit
                    </div>
                    <div className="text-black dark:text-white text-[8px] font-medium font-body">
                      Lorem ipsum dolor
                    </div>
                    <div className="text-black dark:text-white text-[10px] font-medium font-body">
                      Lorem ipsum
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-[89px] pb-[49px] border-b flex justify-center items-center w-full border-black border-opacity-25">
          <div className="text-black dark:text-white text-[11px] font-medium font-body">
            Load more (1/1)
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
