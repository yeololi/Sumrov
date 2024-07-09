import Footer from "../_components/footer";
import Header from "../_components/header";

export default function Info() {
  return (
    <>
      <Header />
      <div className="relative">
        <img src="/images/main1.jpg" alt="" className=" w-screen pt-[50px]" />
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-pre text-center dark:text-black">
          <h1 className="font-bold text-3xl">&quot;It's ok&quot;</h1>
          <p className="text-xl">
            <br />
            안녕하세요 SUMROV입니다.
            <br />
            여러분의 하루는 괜찮았나요?
            <br />
            <br />
            SUMROV는 스스로에게 "괜찮아" 라는 말을 대신 전해주는 브랜드입니다.
            <br />
            괜찮지 않았다면 우리 잠시 쉬었다 가요. 당신의 하루에 생각나도록
            <br />
            <br />
          </p>
          <h1 className="font-bold text-3xl">&quot;You will be ok&quot;</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
