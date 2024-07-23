import { Button } from "@/components/ui/button";
import { cn, fetchPaymentData } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Payment from "./_components/payment";
import clientPromise from "@/util/database";
import { ResultItem, transformData } from "@/app/(desktop)/cart/page";
import { ObjectId } from "mongodb";
import { Product } from "@/app/(desktop)/shop/page";

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
