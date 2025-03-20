import { connectDB } from "@/lib/dbConnect";
import { Post } from "@/lib/models/PostModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const response = await Post.find();
    const data = JSON.stringify(response);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
