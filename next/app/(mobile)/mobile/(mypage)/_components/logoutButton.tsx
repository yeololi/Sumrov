"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div
      onClick={() => {
        signOut({ callbackUrl: "http://localhost:3000/mobile" });
      }}
      className="text-black dark:text-white text-[13px] font-medium font-pre cursor-pointer"
    >
      로그아웃
    </div>
  );
};

export default LogoutButton;
