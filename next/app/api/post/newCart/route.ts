import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";

interface resType {
  UserUuid: string;
  OriginUuid: string;
  Size: string;
  Color: string;
  Cnt: number;
}

export async function POST(request: Request) {
  const res: resType = await request.json();
  const body = { ...res, UserUuid: new ObjectId(res.UserUuid) };

  console.log(body);

  try {
    const db = (await clientPromise).db("sumrov");
    let result = await db.collection("cart").insertOne(body);

    console.log(result);

    if (result) {
    } else {
      return new Response(JSON.stringify({ msg: "failed read body" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ msg: "User has registered" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
  }
}
