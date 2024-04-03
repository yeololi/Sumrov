import { cn } from "@/lib/utils";
import React from "react";
import { Input as ShadInput } from "@/components/ui/input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <>
        <ShadInput
          type={type}
          className={cn(
            "border-neutral-300 rounded-sm h-[37px] placeholder:text-neutral-300 dark:placeholder:text-neutral-400 dark:bg-zinc-800 dark:border-black  dark:text-white text-[13px] font-medium font-pre",
            className
          )}
          {...props}
          ref={ref}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
