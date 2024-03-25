import Footer from "../_components/footer";
import Header from "../_components/header";

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-container flex flex-col justify-between h-screen">
      <div>
        <Header />
        <div className="flex justify-center items-center pt-[123px]">
          <div className="w-[328px] h-[383px] flex-col justify-center items-center gap-[42px] inline-flex">
            <div className="text-[17px] font-semibold font-nav tracking-widest">
              MY PAGE
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MypageLayout;
