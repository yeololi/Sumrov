"use client";

import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!isMobile) {
      redirect("/");
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <main className="w-full relative">
        <Suspense fallback={<Spinner className="h-screen" />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
};

export default MobileLayout;
