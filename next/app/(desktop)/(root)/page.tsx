import Footer from "../_components/footer";
import Header from "../_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-[50px]">
        <img src="/images/main1.jpg" alt="" className="w-screen" />
      </div>
      <Footer />
    </>
  );
}
