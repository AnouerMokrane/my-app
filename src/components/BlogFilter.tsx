import { getPosts } from "@/lib/actions";
import { BlogPost } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default async function BlogFilter({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const data = await getPosts();

  if (!data.success) {
    return <h1>No Posts Found</h1>;
  }

  const blog_data: BlogPost[] = data?.data || [];
  const categories = [
    "All",
    ...new Set(blog_data.map((blog) => blog.category)),
  ];
  return (
    <div className="flex justify-center items-center gap-2">
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
