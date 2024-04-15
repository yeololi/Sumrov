"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

const data = [
  { name: "주문내역 조회" },
  { name: "회원정보" },
  {
    name: (
      <>
        <Link href={"/cart"}>장바구니</Link>
      </>
    ),
  },
  {
    name: "로그아웃",
    onClick: () => {
      signOut({ callbackUrl: "http://localhost:3000/" });
    },
  },
];

const MypageButton = () => {
  return (
    <>
      {data.map((arg, key) => (
        <Button
          key={key}
          variant={"ghost"}
          className="text-[12px] font-bold font-pre dark:text-white text-[#000] mb-[40px] min-w-[78px]"
          onClick={arg.onClick}
        >
          {arg.name}
        </Button>
      ))}
    </>
  );
};

export default MypageButton;
