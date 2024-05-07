import { fetchPaymentData } from "@/lib/utils";
import Payment, { Postpp } from "./_components/payment";
import { useRouter } from "next/navigation";
import { cart } from "../cart/colums";
import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";

const Page = async ({ searchParams }: { searchParams: { s: string } }) => {
  const array: string[] = JSON.parse(searchParams.s);
  const db = (await clientPromise).db("sumrov");
  const query = { _id: { $in: array.map((id) => new ObjectId(id)) } };
  const result = await db.collection("cart").find(query).toArray();

  const db = (await clientPromise).db("sumrov");
  const session = await getServerSession(authOptions);
  const result = await db
    .collection<ResultItem>("cart")
    .find({ UserUuid: new ObjectId(session?.user._id) })
    .toArray();

  console.log(result);
  return <Payment data={result as any} />;
};

export default Page;
