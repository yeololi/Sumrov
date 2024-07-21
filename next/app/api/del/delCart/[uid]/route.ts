import clientPromise from "@/util/database";

interface res {
  title: string;
  price: string;
  sale: number;
  description: string;
  category: string;
  size: string[];
  color: string[];
  mainImage: string;
  detailImage: string[];
}

export async function DELETE(
  request: Request,
  { params }: { params: { uid: string } }
) {
  const uid = params.uid;

  try {
    const db = (await clientPromise).db("sumrov");
    let result = await db.collection("cart").insertOne(body); // todo

    if (result) {
    } else {
      return new Response("failed read body", { status: 404 });
    }
    return new Response("User has registered", { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
