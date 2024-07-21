import { cart } from "./colums";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOption";
import { redirect } from "next/navigation";
import CartInner from "./_components/cart-inner";
import { ObjectId } from "mongodb";
import { fetchPaymentData } from "@/lib/utils";
import clientPromise from "@/util/database";
import { Product } from "../shop/page";

export interface ResultItem {
  _id: ObjectId;
  OriginUuid: string;
  Cnt: number;
  Size: string;
  Color: string;
  UserUuid: ObjectId;
}

export function transformData(data: Product[], results: ResultItem[]) {
  return results
    .map((result) => {
      const item = data.find((d) => d?.Uuid === atob(result.OriginUuid));
      if (item) {
        return {
          _id: result._id.toString(),
          id: item.Uuid,
          name: item.Title,
          price: parseInt(item.Price, 10),
          amount: result.Cnt,
          color: result.Color,
          size: result.Size,
          image: item.MainImage,
          sale: item.Sale,
          desc: item.Description,
        };
      }
      return null;
    })
    .filter((item): item is cart => item !== null); // Filter out any null values in case of no match
}

const Cart = async () => {
  const db = (await clientPromise).db("sumrov");
  const session = await getServerSession(authOptions);
  const result = await db
    .collection<ResultItem>("cart")
    .find({ UserUuid: new ObjectId(session?.user._id) })
    .toArray();

  const data: (Product | undefined)[] = await Promise.all(
    result.map((ai) => fetchPaymentData(ai.OriginUuid))
  );
  !session && redirect("/login");
  // console.log(data);
  // console.log(result);

  const body = transformData(data as Product[], result);

  return body && <CartInner data={body} />;
};

export default Cart;
