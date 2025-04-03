import { connectDB } from "@/lib/dbConnect";
import { Post } from "@/lib/models/PostModel";
import Link from "next/link";
import React from "react";

export default async function BlogFilter({
  currentCategory,
}: {
  currentCategory: string;
}) {
  await connectDB();
  const posts = await Post.find().lean();

  if (!posts) return;

  const categories = ["All", ...new Set(posts.map((blog) => blog.category))];
  return (
    <div className="flex items-center gap-2 max-w-3xl overflow-x-auto py-2 px-4 custom-scrollbar mx-auto ">
      {categories.map((cat, index) => (
        <Link
          key={index}
          href={`/?category=${cat}`}
          className={`py-1 px-4 rounded-sm cursor-pointer transition-colors ${
            currentCategory === cat
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-600 hover:bg-black hover:text-white"
          }`}
        >
          {cat}
        </Link>
      ))}
    </div>
  );
}
