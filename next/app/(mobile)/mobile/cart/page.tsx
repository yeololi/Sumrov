import { ResultItem, transformData } from "@/app/(desktop)/cart/page";
import { Product } from "@/app/(desktop)/shop/page";
import { Button } from "@/components/ui/button";
import { fetchPaymentData } from "@/lib/utils";
import { authOptions } from "@/util/authOption";
import clientPromise from "@/util/database";
import { Minus, Plus } from "lucide-react";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Footer from "../_components/footer";
import Header from "../_components/header";
import CartInner from "./_components/cartInner";

const CartPage = async () => {
  const db = (await clientPromise).db("sumrov");
  const session = await getServerSession(authOptions);
  const id = session?.user.id ? session.user.id : session?.user._id;

  const result = await db
    .collection<ResultItem>("cart")
    .find({ UserUuid: new ObjectId(id) })
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

export default CartPage;
