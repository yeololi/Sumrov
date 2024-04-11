import { fetchPaymentData } from "@/lib/utils";
import Payment, { Postpp } from "./_components/payment";
import { useRouter } from "next/navigation";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    OriginUuid?: string;
    Cnt?: number;
    size?: string;
    color?: string;
  };
}) => {
  const predata = searchParams.OriginUuid
    ? await fetchPaymentData(searchParams.OriginUuid)
    : undefined;
  const data = predata && searchParams.OriginUuid && searchParams.Cnt && searchParams.size && searchParams.color ? [ {
    ...predata,
    size: searchParams.size,
    color: searchParams.color,
    Price: parseInt(predata.Price),
    cnt: searchParams.Cnt,
  }] : undefined;
  return <Payment data={data} />;
};

export default Page;
