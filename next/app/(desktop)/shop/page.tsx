import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Link from "next/link";
import { NextRequest } from "next/server";
import Footer from "../_components/footer";
import Header from "../_components/header";
import ShopMain from "./_compoenents/shopMain";

const data: {}[] = [{}, {}, {}];

const ShopPage = ({
  searchParams,
}: {
  searchParams: { category: "all" | "top" | "bottom" | "acc" };
}) => {
  const category = searchParams.category;
  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col justify-center items-center pt-[188px] bg-neutral-50 pb-[142px] gap-[50px]">
        <div className="flex-col justify-center items-center gap-[25px] inline-flex">
          <div className="text-neutral-900 dark:text-neutral-50 text-lg font-bold font-nav tracking-widest uppercase">
            {category}
          </div>
          <div className="justify-center items-center gap-[100px] inline-flex">
            <Link
              href={{ pathname: "/shop", query: { category: "all" } }}
              className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav"
            >
              ALL
            </Link>
            <Link
              href={{ pathname: "/shop", query: { category: "top" } }}
              className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav"
            >
              TOP
            </Link>
            <Link
              href={{ pathname: "/shop", query: { category: "bottom" } }}
              className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav"
            >
              BOTTOM
            </Link>
            <Link
              href={{ pathname: "/shop", query: { category: "acc" } }}
              className="text-neutral-900 dark:text-neutral-50 text-xs font-medium font-nav"
            >
              ACC
            </Link>
          </div>
        </div>
        <div className="flex h-full flex-col gap-[100px]">
          <ShopMain category={category} />
          <div className="h-6 justify-center items-center gap-2 flex">
            <ChevronsLeft />
            <ChevronLeft />
            <div className="text-black dark:text-neutral-50 text-lg font-medium font-body">
              1/10
            </div>
            <ChevronRight />
            <ChevronsRight />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;
