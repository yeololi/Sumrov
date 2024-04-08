"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ElementRef, useEffect, useRef, useState } from "react";

const ShopSelect = ({ category }: { category: string }) => {
  const modalRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const categorys = ["All", "Top", "Bottom", "Acc"];
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

  let upCategory = category[0].toUpperCase() + category.slice(1);
  return (
    <>
      <div className="flex justify-start w-full">
        <div
          className="flex items-center cursor-pointer"
          onClick={isCollapsed ? resetWidth : collapse}
        >
          <div className="text-black text-xs font-medium font-nav dark:text-white">
            {upCategory}
          </div>
          <ChevronRight className="w-2 h-2" />
        </div>

        <div
          ref={modalRef}
          className={cn(
            "ml-1 w-0 justify-start items-start gap-2.5 inline-flex overflow-hidden",
            isResetting && "transition-all ease-in-out duration-300"
          )}
        >
          {categorys.map((category, i) => (
            <Link
              className="text-black text-xs font-medium font-nav dark:text-white"
              key={i}
              href={{
                pathname: "/mobile/shop",
                query: {category: category.toLowerCase()}
              }}
              onClick={collapse}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopSelect;
