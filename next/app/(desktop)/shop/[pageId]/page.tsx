import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Footer from "../../_components/footer";
import Header from "../../_components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ShopOption from "../_components/shopOption";

const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
const yes = true;

interface CartItem {
  _id: string;
  OriginUuid: string;
  Title: string;
  Cnt: number;
  Price: string;
  Sale: number;
  Option: string;
}

interface post {
  Uuid: string;
  Title: string;
  Price: string;
  Sale: number;
  Description: string;
  Category: "all" | "top" | "bottom" | "acc";
  Size: string[];
  Color: string[];
  MainImage: string;
  DetailImages: string[];
  Counter: number;
  increment: number;
  decrement: number;
}

async function fetchData(uuid: string) {
  try {
    const response: { results: post[] } = await fetch(
      `http://3.39.237.151:8080/post/uuid/${atob(uuid)}`,
      {
        method: "GET",
      }
    ).then((r) => r.json());

    if (response) {
      return response.results[0];
    } else {
      console.log("res.result is not an array or res is undefined");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

const ShopPageDetail = async ({ params }: { params: { pageId: string } }) => {
  const data = await fetchData(params.pageId);

  return (
    <>
      <Header />
      {data ? (
        <div className="flex flex-col items-center bg-neutral-50 dark:bg-neutral-900 pt-[150px] px-[157.5px] pb-[306.67px]">
          <div className="w-[1125px] flex-col items-center gap-[200px] inline-flex">
            <div className="flex-col justify-start items-center gap-[15px] flex">
              <div className="justify-center items-center gap-[25px] inline-flex">
                {data.MainImage ? (
                  <img className="w-[550px] h-[733px]" src={data.MainImage} />
                ) : (
                  <img
                    className="w-[550px] h-[733px]"
                    src="https://via.placeholder.com/550x733"
                  />
                )}
                <div className="w-[550px] h-[733px] flex-col justify-center items-center gap-[50px] inline-flex">
                  <div className="flex-col justify-start items-start gap-5 flex">
                    <div className="flex-col justify-start items-start gap-2.5 flex">
                      <div className="text-black dark:text-neutral-50 text-xl font-medium font-pre">
                        {data.Title}
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[50px] flex">
                      <div className="text-black dark:text-neutral-50 text-sm font-normal font-pre">
                        {new Intl.NumberFormat("ko-KR", {
                          style: "currency",
                          currency: "KRW",
                        }).format(parseInt(data.Price))}
                      </div>
                      <div className="flex-col justify-start items-start gap-[30px] flex">
                        <div className="w-[421px] text-neutral-600 dark:text-zinc-100 text-xs font-light font-pre whitespace-pre-wrap">
                          {data.Description}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "flex-col justify-center items-center gap-[75px] flex",
                      yes && "gap-[30px]"
                    )}
                  >
                    {data && <ShopOption result={data} />}
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-10 flex">
                {data.DetailImages ? (
                  <>
                    <img
                      className="w-[550px] h-[733.33px]"
                      src={data.DetailImages[0]}
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src={data.DetailImages[1]}
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src={data.DetailImages[2]}
                    />
                  </>
                ) : (
                  <>
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                    <img
                      className="w-[550px] h-[733.33px]"
                      src="https://via.placeholder.com/550x733"
                    />
                  </>
                )}
              </div>
            </div>

            <Tabs defaultValue="1" className="w-[1000px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger className="font-medium font-noto" value="1">
                  결제 안내
                </TabsTrigger>
                <TabsTrigger className="font-medium font-noto" value="2">
                  배송 안내
                </TabsTrigger>
                <TabsTrigger className="font-medium font-noto" value="3">
                  교환/환불 안내
                </TabsTrigger>
              </TabsList>
              <TabsContent value="1">
                <div className="px-[125px] py-[50px] border border-gray-20 dark:border-zinc-600 flex-col justify-center items-center flex">
                  <span className="text-black dark:text-neutral-50 text-[15px] font-semibold font-pre uppercase tracking-wide">
                    결제 안내
                  </span>
                  <span className="text-black dark:text-neutral-50 text-[12px] font-light font-pre uppercase tracking-wide">
                    <br />
                    <br />
                  </span>
                  <pre className="text-black dark:text-neutral-50 leading-[15px] text-[13px] font-normal font-noto uppercase tracking-wide whitespace-pre-wrap">
                    행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이
                    임명한다.
                    <br />
                    형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.
                    <br />
                    탄핵결정은 공직으로부터 파면함에 그친다. <br />
                    그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는
                    아니한다.
                    <br /> 모든 국민은 학문과 예술의 자유를 가진다. <br />
                    정부는 회계연도마다 예산안을 편성하여 회계연도 개시
                    90일전까지 국회에 제출하고,
                    <br /> 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다.
                    <br />
                    헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여
                    국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을
                    얻어야 한다.
                    <br /> 근로자는 근로조건의 향상을 위하여 자주적인
                    단결권·단체교섭권 및 단체행동권을 가진다.
                    <br />
                    <br />
                    <br />
                    누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을
                    받을 권리를 가진다. <br />
                    다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는
                    법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                    <br /> 국가는 평생교육을 진흥하여야 한다. 국가는 여자의
                    복지와 권익의 향상을 위하여 노력하여야 한다. <br />
                    평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                    민주평화통일자문회의를 둘 수 있다. <br />
                    대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                    재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타
                    법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을
                    위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
                    <br />
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="2">
                <div className="px-[125px] py-[50px] border border-gray-20 dark:border-zinc-600 flex-col justify-center items-center flex">
                  <span className="text-black dark:text-neutral-50 text-[15px] font-semibold font-pre uppercase tracking-wide">
                    결제 안내
                  </span>
                  <span className="text-black dark:text-neutral-50 text-[12px] font-light font-pre uppercase tracking-wide">
                    <br />
                    <br />
                  </span>
                  <pre className="text-black dark:text-neutral-50 leading-[15px] text-[13px] font-normal font-noto uppercase tracking-wide whitespace-pre-wrap">
                    행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이
                    임명한다.
                    <br />
                    형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.
                    <br />
                    탄핵결정은 공직으로부터 파면함에 그친다. <br />
                    그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는
                    아니한다.
                    <br /> 모든 국민은 학문과 예술의 자유를 가진다. <br />
                    정부는 회계연도마다 예산안을 편성하여 회계연도 개시
                    90일전까지 국회에 제출하고,
                    <br /> 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다.
                    <br />
                    헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여
                    국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을
                    얻어야 한다.
                    <br /> 근로자는 근로조건의 향상을 위하여 자주적인
                    단결권·단체교섭권 및 단체행동권을 가진다.
                    <br />
                    <br />
                    <br />
                    누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을
                    받을 권리를 가진다. <br />
                    다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는
                    법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                    <br /> 국가는 평생교육을 진흥하여야 한다. 국가는 여자의
                    복지와 권익의 향상을 위하여 노력하여야 한다. <br />
                    평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                    민주평화통일자문회의를 둘 수 있다. <br />
                    대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                    재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타
                    법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을
                    위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
                    <br />
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="3">
                <div className="px-[125px] py-[50px] border border-gray-20 dark:border-zinc-600 flex-col justify-center items-center flex">
                  <span className="text-black dark:text-neutral-50 text-[15px] font-semibold font-pre uppercase tracking-wide">
                    결제 안내
                  </span>
                  <span className="text-black dark:text-neutral-50 text-[12px] font-light font-pre uppercase tracking-wide">
                    <br />
                    <br />
                  </span>
                  <pre className="text-black dark:text-neutral-50 leading-[15px] text-[13px] font-normal font-noto uppercase tracking-wide whitespace-pre-wrap">
                    행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이
                    임명한다.
                    <br />
                    형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다.
                    <br />
                    탄핵결정은 공직으로부터 파면함에 그친다. <br />
                    그러나, 이에 의하여 민사상이나 형사상의 책임이 면제되지는
                    아니한다.
                    <br /> 모든 국민은 학문과 예술의 자유를 가진다. <br />
                    정부는 회계연도마다 예산안을 편성하여 회계연도 개시
                    90일전까지 국회에 제출하고,
                    <br /> 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다.
                    <br />
                    헌법개정안은 국회가 의결한 후 30일 이내에 국민투표에 붙여
                    국회의원선거권자 과반수의 투표와 투표자 과반수의 찬성을
                    얻어야 한다.
                    <br /> 근로자는 근로조건의 향상을 위하여 자주적인
                    단결권·단체교섭권 및 단체행동권을 가진다.
                    <br />
                    <br />
                    <br />
                    누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을
                    받을 권리를 가진다. <br />
                    다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는
                    법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
                    <br /> 국가는 평생교육을 진흥하여야 한다. 국가는 여자의
                    복지와 권익의 향상을 위하여 노력하여야 한다. <br />
                    평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여
                    민주평화통일자문회의를 둘 수 있다. <br />
                    대통령·국무총리·국무위원·행정각부의 장·헌법재판소
                    재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타
                    법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을
                    위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다.
                    <br />
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default ShopPageDetail;
