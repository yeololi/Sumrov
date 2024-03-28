import { signJwtAccessToken } from "@/lib/jwt";
import clientPromise from "@/util/database";
import bcrypt from "bcryptjs";

interface RequestBody {
  name: string;
  tel: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const db = (await clientPromise).db("sumrov");
  const user = await db
    .collection("users")
    .findOne({ name: body.name, tel: body.tel });

  if (user) {
    const { email, ...userWithoutPass } = user;

    return new Response(JSON.stringify(email));
  } else return new Response(JSON.stringify(null));
}
