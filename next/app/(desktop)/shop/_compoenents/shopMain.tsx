"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const ShopMain = ({
  category,
}: {
  category: "all" | "top" | "bottom" | "acc";
}) => {
  const [data, setData] = useState<
    | {
        Category: string;
        Color: string;
        Description: string;
        DetailImage: string;
        MainImage: string;
        Price: number;
        Sale: number;
        Size: string;
        Title: string;
        Uuid: string;
      }[]
    | {}[]
  >([{}, {}, {}]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data: {
          result: {
            Category: string;
            Color: string;
            Description: string;
            DetailImage: string;
            MainImage: string;
            Price: number;
            Sale: number;
            Size: string;
            Title: string;
            Uuid: string;
          }[];
        } = await fetch(`/backend/feed/${category}`, {
          method: "GET",
        }).then((response) => response.json());

        if (data) {
          console.log(data);
          setData(data.result);
        }
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }

    return () => {};
  }, [category]);

  return (
    <>
      {/* {data.map((args, i) => (
        <div className="gap-[50px] w-full flex" key={i}>
          {data.map((arg, j) => (
            <div
              key={j}
              className="w-[300px] h-[480px] flex-col justify-center items-center gap-[10px] inline-flex"
            >
              <img
                className="w-[300px] h-[380px] shadow"
                src="https://via.placeholder.com/300x380"
              />
              <div className="w-[134px] flex-col justify-center items-center gap-[5px] flex">
                <div className="text-black dark:text-neutral-50 text-[13px] font-medium font-body leading-none">
                  Lorem ipsum dolor sit
                </div>
                <div className="text-black dark:text-neutral-50 text-[15px] font-semibold font-body">
                  29,900$
                </div>
                <div className="text-black dark:text-neutral-50 text-[11px] font-light font-body">
                  Lorem ipsum dolor sit
                </div>
              </div>
            </div>
          ))}
        </div>
      ))} */}
    </>
  );
};

export default ShopMain;
