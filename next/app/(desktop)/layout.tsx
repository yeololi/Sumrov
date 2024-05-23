import { Spinner } from "@/components/spinner";
import { Suspense } from "react";

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-50 dark:bg-inherit">
      <Suspense fallback={<Spinner className="h-screen" />}>
        {children}
      </Suspense>
    </div>
  );
};

export default DesktopLayout;
