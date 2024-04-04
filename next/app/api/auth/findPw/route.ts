import clientPromise from "@/util/database";
import bcrypt from "bcryptjs";
interface RequestBody {
    name: string;
    email: string;
}

export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const db = (await clientPromise).db("sumrov");
    const user = await db.collection("users").findOne({ email: body.email });
    const email = user?.email;
    if (email) {
        if (email === body.email) {
            try {
                const response = await fetch(`http://3.39.237.151:8080/smtp`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }).then((r) => r.json());
                const asdf = await bcrypt.hash(
                    response.임시비밀번호.toString(),
                    10
                );
                console.log(asdf);
                await db
                    .collection("users")
                    .updateOne(
                        { email: body.email },
                        { $set: { password: asdf } }
                    );
                return new Response(
                    JSON.stringify({ success: true, pw: response })
                );
            } catch (error) {
                console.error("Error:", error);
                return new Response(JSON.stringify({ success: false }));
            }
        }
    } else {
        return new Response(JSON.stringify({ success: fetch }));
    }
}
