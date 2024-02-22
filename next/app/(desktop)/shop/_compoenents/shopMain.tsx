"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  Uuid: string;
  Title: string;
  Price: number;
  Sale: number;
  Description: string;
  Size: string;
  Color: string;
  MainImage: string;
  DetailImage: string;
  Category: string;
}

const ShopMain = ({
  category,
}: {
  category: "all" | "top" | "bottom" | "acc";
}) => {
  const [data, setData] = useState<Product[][]>();
  useEffect(() => {
    async function fetchData() {
      function chunk<T>(array: T[] | undefined, chunkSize: number): T[][] {
        if (!array) return []; // array가 undefined 또는 null인 경우, 빈 배열 반환
        const result: T[][] = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          const chunk = array.slice(i, i + chunkSize);
          result.push(chunk);
        }
        return result;
      }

      try {
        const response = await fetch(`/backend/feed/${category}`, {
          method: "GET",
        });
        const res: { results: Product[] } = await response.json();

        if (res && Array.isArray(res.results)) {
          const chunkData = chunk(res.results, 9)
            .map((subArray) => chunk(subArray, 3))
            .flat();

          // console.log(chunkData);

          setData(chunkData); // 여기서 setData를 호출하여 상태를 업데이트
        } else {
          console.log("res.result is not an array or res is undefined");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

    return () => {};
  }, [category]);

  return (
    <>
      {data ? (
        data.map((args, i) => (
          <div className="gap-[50px] w-full flex" key={i}>
            {args.map((product, j) => (
              <Link
                href={"/shop/" + btoa(product.Uuid) + "/"}
                key={j}
                className="w-[300px] h-[480px] flex-col justify-center items-center gap-[10px] inline-flex"
              >
                <img
                  className="w-[300px] h-[380px] shadow"
                  src="https://via.placeholder.com/300x380"
                />
                <div className="w-[134px] flex-col justify-center items-center gap-[5px] flex">
                  <div className="text-black dark:text-neutral-50 text-[13px] font-medium font-body leading-none">
                    {product.Title}
                  </div>
                  <div className="text-black dark:text-neutral-50 text-[15px] font-semibold font-body">
                    {product.Price}
                  </div>
                  <div className="text-black dark:text-neutral-50 text-[11px] font-light font-body">
                    {product.Description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))
      ) : (
        <div>준비중</div>
      )}
    </>
  );
};

export default ShopMain;
