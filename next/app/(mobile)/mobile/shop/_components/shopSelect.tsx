"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ElementRef, useRef, useState } from "react";

const ShopSelect = () => {
  const modalRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const resetWidth = () => {
    if (modalRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      modalRef.current.style.width = "123px";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (modalRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      modalRef.current.style.width = "0";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <div className="flex justify-start w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={isCollapsed ? resetWidth : collapse}
        >
          <div className="text-black text-xs font-medium font-nav">All</div>
          <ChevronRight className="w-2 h-2" />
        </div>

        <div
          ref={modalRef}
          className={cn(
            "ml-1 w-0 justify-start items-start gap-2.5 inline-flex overflow-hidden",
            isResetting && "transition-all ease-in-out duration-300"
          )}
        >
          <div className="text-black text-xs font-medium font-nav">All</div>
          <div className="text-black text-xs font-medium font-nav">Top</div>
          <div className="text-black text-xs font-medium font-nav">Bottom</div>
          <div className="text-black text-xs font-medium font-nav">Acc</div>
        </div>
      </div>
    </>
  );
};

export default ShopSelect;
