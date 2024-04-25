import { Spinner } from "@/components/spinner";
import { Suspense } from "react";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
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
