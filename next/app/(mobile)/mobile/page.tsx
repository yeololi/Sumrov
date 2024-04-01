import Image from "next/image";
import Footer from "./_components/footer";
import Header from "./_components/header";

const MobilePage = () => {
  return (
    <>
      <Header />
      <Image
        src="/images/mobile/main.png"
        alt=""
        className=""
        width={425}
        height={920.27}
      />
      <Footer />
    </>
  );
};

export default MobilePage;
