import { fetchPaymentData } from "@/lib/utils";
import Payment from "./_components/payment";
import { useRouter } from "next/navigation";
import { cart } from "../cart/colums";
import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";
import { ResultItem, transformData } from "../cart/page";
import { Product } from "../shop/page";

const Page = async ({ searchParams }: { searchParams: { s: string } }) => {
  const array: string[] = JSON.parse(searchParams.s);
  const db = (await clientPromise).db("sumrov");

  const query = { _id: { $in: array.map((id) => new ObjectId(id)) } };
  const result = await db.collection<ResultItem>("cart").find(query).toArray();

  const data: (Product | undefined)[] = await Promise.all(
    result.map((ai) => fetchPaymentData(ai.OriginUuid))
  );

  const body = transformData(data as Product[], result);

  console.log(body);
  return <Payment data={body} />;
};

export default Page;
