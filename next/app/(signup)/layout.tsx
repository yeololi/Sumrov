import { Spinner } from "@/components/spinner";
import { Suspense } from "react";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<Spinner className="h-screen" />}>{children}</Suspense>
  );
};

export default SignUpLayout;
