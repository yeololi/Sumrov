import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/util/database";

interface res {
  name: string;
  email: string;
  password: string;
  zonecode: number;
  address: string;
  addrDetail: string;
  tel: string;
}

export async function POST(request: Request) {
  const res = (await request.json()) as res;

  if (res) {
    try {
      let hash = await bcrypt.hash(res.password, 10);
      res.password = hash;

      const db = (await clientPromise).db("sumrov");
      let result = await db.collection("users").insertOne(res);
    } catch (error) {
      console.error(error);
      return new Response(`error: ${error}`, { status: 400 });
    }
  } else {
    return new Response("failed read body", { status: 404 });
  }
  return new Response("User has registered", { status: 200 });
}
