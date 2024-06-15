"use client";

import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { useMediaQuery } from "usehooks-ts";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    redirect("/mobile");
  }

  return (
    <div className="bg-neutral-50 dark:bg-inherit">
      <Suspense fallback={<Spinner className="h-screen" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default DesktopLayout;
