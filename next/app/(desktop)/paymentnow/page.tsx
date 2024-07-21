import { fetchPaymentData } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { cart } from "../cart/colums";
import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";
import { ResultItem, transformData } from "../cart/page";
import { Product } from "../shop/page";
import Payment from "../payment/_components/payment";

const Page = async ({
  searchParams,
}: {
  searchParams: {
    OriginUuid: string;
    Cnt: string;
    size: string;
    color: string;
  };
}) => {
  const result: ResultItem[] = [
    {
      OriginUuid: searchParams.OriginUuid,
      Cnt: Number(searchParams.Cnt),
      Size: searchParams.size,
      Color: searchParams.color,
      _id: new ObjectId("669bd8a0e0f0a046e426e19c"),
      UserUuid: new ObjectId("669bd6ba449f3635dbe748fa"),
    },
  ];

  const data: (Product | undefined)[] = await Promise.all(
    result.map((ai) => fetchPaymentData(ai.OriginUuid))
  );

  const body = transformData(data as Product[], result);

  console.log(body);
  return <Payment data={body} />;
};

export default Page;
