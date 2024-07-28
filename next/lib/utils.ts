import { saleType } from "@/app/(desktop)/(mypage)/orderList/page";
import { Product } from "@/app/(desktop)/shop/page";
import { type ClassValue, clsx } from "clsx";
import { run } from "node:test";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchPaymentData(uuid: string) {
  try {
    const response: { results: Product[] } = await fetch(
      `http://3.39.237.151:8080/post/uuid/${atob(uuid)}`,
      {
        method: "GET",
        cache: "no-store",
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

export async function fetchData(
  name: string
): Promise<{ data: saleType[] | undefined; postData: Product[] | undefined }> {
  try {
    const response: { results: saleType[] } = await fetch(
      `http://3.39.237.151:8080/sale`,
      {
        cache: "no-store",
        method: "GET",
      }
    ).then((r) => r.json());

    let data = response.results.filter((item) => item.CustomerName === name);

    data.sort((a, b) => +new Date(b.Date) - +new Date(a.Date));

    let uuid: string[][] = data.map((v) => JSON.parse(v.Product));

    uuid = uuid.map((value) => [...new Set(value)]);

    let newUuid = uuid.reduce(function (prev, next) {
      return prev.concat(next);
    });

    const postData = (await Promise.all(
      newUuid.map((value) => fetchPaymentData(btoa(value)))
    )) as Product[];

    if (response) {
      return { data: data, postData: postData };
    } else {
      console.log("res.result is not an array or res is undefined");
      return { data: undefined, postData: undefined };
    }
  } catch (error) {
    console.error(error);
    return { data: undefined, postData: undefined };
  }
}
