"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

const data = [
  <Button
    key={0}
    variant={"ghost"}
    className="text-[12px] font-bold font-pre dark:text-white text-[#000] mb-[40px] min-w-[78px]"
    asChild
  >
    <Link href={"/orderList"}>주문내역 조회</Link>
  </Button>,
  <Button
    key={1}
    variant={"ghost"}
    className="text-[12px] font-bold font-pre dark:text-white text-[#000] mb-[40px] min-w-[78px]"
  >
    회원정보
  </Button>,
  <Button
    key={2}
    variant={"ghost"}
    className="text-[12px] font-bold font-pre dark:text-white text-[#000] mb-[40px] min-w-[78px]"
    asChild
  >
    <Link href={"/cart"}>장바구니</Link>
  </Button>,

  <Button
    key={3}
    variant={"ghost"}
    className="text-[12px] font-bold font-pre dark:text-white text-[#000] mb-[40px] min-w-[78px]"
    onClick={() => {
      signOut({ callbackUrl: "http://localhost:3000/" });
    }}
  >
    로그아웃
  </Button>,
];

const MypageButton = () => {
  return (
    <>
      {data.map((arg, key) => (
        <div key={key}>{arg}</div>
      ))}
    </>
  );
};

export default MypageButton;
