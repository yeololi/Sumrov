"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <div
      onClick={() => {
        signOut({ callbackUrl: "http://localhost:3000/mobile" });
      }}
      className="text-black dark:text-white text-xl font-bold font-nav cursor-pointer"
    >
      Logout
    </div>
  );
};

export default LogoutButton;
