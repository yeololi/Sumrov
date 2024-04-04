import Footer from "../../_components/footer";
import Header from "../../_components/header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import ShopOption from "../_components/shopOption";

const data = [
  {
    title: "-결제 안내-",
    content: `-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
`,
  },
  {
    title: "-배송 안내-",
    content: `-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
    
-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
`,
  },
  {
    title: "-교환/환불 안내-",
    content: `-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer

-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
    
-로램잇섬 로램잇섬 Lorem ipsum dolor sit amet 로램잇섬 로램잇섬 로램 로램 Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetuer
`,
  },
];

interface post {
  Uuid: string;
  Title: string;
  Price: string;
  Sale: number;
  Description: string;
  Category: "all" | "top" | "bottom" | "acc";
  Size: string[];
  Color: string[];
  MainImage: string;
  DetailImages: string[];
  Counter: number;
  increment: number;
  decrement: number;
}

async function fetchData(uuid: string) {
  try {
    const response: { results: post[] } = await fetch(
      `http://3.39.237.151:8080/post/uuid/${atob(uuid)}`,
      {
        method: "GET",
      }
    ).then((r) => r.json());

    if (response) {
      return response.results[0];
    } else {
      console.log("res.result is not an array or res is undefined");
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

const ShopDetailPage = async ({ params }: { params: { pageId: string } }) => {
  const result = await fetchData(params.pageId);

  if (!result) {
  }

  return (
    <>
      <Header />
      <div className="bg-neutral-50 dark:bg-neutral-900 text-white flex flex-col items-center pb-8 border-b border-black border-opacity-25 dark:border-white mb-[35px]">
        <div className="text-black dark:text-white text-[17px] font-semibold font-nav tracking-widest mt-[120px]">
          DETAIL
        </div>
        <div className="w-[300px] mt-[29px] flex flex-col items-center">
          <img
            className="w-[300px] h-[400px] border border-black"
            src="https://via.placeholder.com/300x400"
          />

          <div className="text-black dark:text-white w-full text-[13px] font-medium font-pre mt-[12px]">
            {result?.Title}
          </div>
          <div className="w-[315px] mt-[53px] text-neutral-600 dark:text-white text-[8px] font-normal font-pre">
            {result?.Description}
          </div>
        </div>

        <div className="w-[350px] h-0 border-2 border-neutral-300 mt-4" />
        {result && <ShopOption result={result} />}

        <div className="mt-[98px] flex flex-col items-center">
          <div className="gap-[25.21px] flex flex-col">
            <img
              className="w-[300px] h-[400px] border border-black"
              src="https://via.placeholder.com/300x400"
            />
            <img
              className="w-[300px] h-[400px] border border-black"
              src="https://via.placeholder.com/300x400"
            />
            <img
              className="w-[300px] h-[400px]  border border-black"
              src="https://via.placeholder.com/300x400"
            />
          </div>

          <Accordion
            className="text-black dark:text-white font-noto w-[360px]"
            type="single"
            collapsible
          >
            {data.map((item, index) => (
              <>
                <AccordionItem value={"item-" + index + 1} key={index}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent className="whitespace-pre-wrap">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopDetailPage;
