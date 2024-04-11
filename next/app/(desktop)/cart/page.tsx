import { cart} from "./colums";
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
  },
  {
    id: "1",
    name: "Lorem ipsum dolor sit",
    price: 10000,
    amount: 1,
    color: "블랙",
    size: "L",
    image: "asd",
  },
];

const Cart = async () => {
  const session = await getServerSession(authOptions);

  !session && redirect("/login");

  return <CartInner />;
};

export default Cart;
