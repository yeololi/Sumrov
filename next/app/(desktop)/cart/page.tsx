import { cart } from "./colums";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOption";
import { redirect } from "next/navigation";
import CartInner from "./_components/cart-inner";

const data: cart[] = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit",
    price: 10000,
    amount: 1,
    color: "블랙",
    size: "L",
    image: "asd",
    sale: 0,
    desc: "Lorem ipsum dolor sit",
  },
  {
    id: "1",
    name: "Lorem ipsum dolor sit",
    price: 10000,
    amount: 1,
    color: "블랙",
    size: "L",
    image: "asd",
    sale: 0,
    desc: "Lorem ipsum dolor sit",
  },
];

const Cart = async () => {
  const session = await getServerSession(authOptions);

  !session && redirect("/login");

  return <CartInner data={data} />;
};

export default Cart;
