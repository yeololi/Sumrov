import Image from "next/image";
import Footer from "./_components/footer";
import Header from "./_components/header";

const MobilePage = () => {
  return (
    <>
      <Header />
      <Image
        src="/images/mobile/main.jpg"
        alt=""
        className="h-[100vh] w-[100vw] object-contain"
        width={848}
        height={916}
      />
      <Footer />
    </>
  );
};

export default MobilePage;
