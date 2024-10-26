import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/util/database";

interface res {
  email: string;
}

export async function POST(request: Request) {
  const res = (await request.json()) as res;

  if (res) {
    try {
      const db = (await clientPromise).db("sumrov");
      let result = await db.collection("users").findOne({ email: res.email });

      return new NextResponse(JSON.stringify({ result: result }), {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response(`error: ${error}`, { status: 400 });
    }
  } else {
    return new Response("failed read body", { status: 404 });
  }
}
