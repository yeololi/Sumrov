import { signJwtAccessToken } from "@/lib/jwt";
import clientPromise from "@/util/database";
import bcrypt from "bcryptjs";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  try {
    const db = (await clientPromise).db("sumrov");
    const user = await db.collection("users").findOne({ email: body.email });

    if (user && (await bcrypt.compare(body.password, user.password))) {
      const { password, ...userWithoutPass } = user;

      const accessToken = signJwtAccessToken(userWithoutPass);
      const result = {
        ...userWithoutPass,
        accessToken,
      };

      return new Response(JSON.stringify(result));
    } else
      return new Response(JSON.stringify(null), {
        status: 401,
      });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(null), {
      status: 401,
    });
  }
}
