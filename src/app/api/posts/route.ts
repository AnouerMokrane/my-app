import { connectDB } from "@/lib/dbConnect";
import { Post } from "@/lib/models/PostModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { message: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
