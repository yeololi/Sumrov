import Footer from "./_components/footer";
import Header from "./_components/header";

const MobilePage = () => {
  return (
    <div className="relative">
      <Header />
      <img
        src="/images/mobile/main.png"
        alt=""
        className="w-[375px] h-[812px]"
      />
      <Footer />
    </div>
  );
};

export default MobilePage;
