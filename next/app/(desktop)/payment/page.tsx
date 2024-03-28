import { cn } from "@/lib/utils";
import React from "react";

const Payment = () => {
  return <></>;
};

const Label = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ title, className }, ref) => {
  return (
    <div className={cn("justify-center items-center gap-0.5 flex", className)}>
      <div className="text-neutral-600 dark:text-neutral-300 text-[11px] font-medium font-pre">
        {title}
      </div>
      <div className="w-1.5 h-[7px] flex justify-center items-center text-blue-500 text-[11px] font-medium font-pre">
        *
      </div>
    </div>
  );
});
Label.displayName = "Label";

const Input = React.forwardRef<
  React.ElementRef<"input">,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "bg-white dark:text-white rounded-sm dark:bg-zinc-800 border placeholder:text-neutral-300 text-black text-[11px] font-normal font-pre pl-2 border-neutral-300",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

export default Payment;
