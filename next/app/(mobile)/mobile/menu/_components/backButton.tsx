"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => {
          router.back();
        }}
        className="cursor-pointer"
      >
        <X
          size={26}
          className="absolute right-[31px] top-[58px] dark:text-white"
        />
      </div>
    </>
  );
};

export default BackButton;
