import clientPromise from "@/util/database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

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
    let result = await db
      .collection("cart")
      .deleteOne({ _id: new ObjectId(uid) });

    if (result) {
    } else {
      return NextResponse.json({
        message: "게시글이 성공적으로 삭제되었습니다.",
      });
    }
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  } catch (error) {
    console.error(error);
  }
}
