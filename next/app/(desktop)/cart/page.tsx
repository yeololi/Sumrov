import { Button } from "@/components/ui/button";
import Footer from "../_components/footer";
import Header from "../_components/header";
import { cart, columns } from "./colums";
import { DataTable } from "./data-tables";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/util/authOption";
import { redirect } from "next/navigation";
import { Row } from "@tanstack/react-table";
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
