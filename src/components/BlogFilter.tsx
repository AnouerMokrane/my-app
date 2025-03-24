import { BlogPost } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default async function BlogFilter({
  currentCategory,
}: {
  currentCategory: string;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`, {
    next: { revalidate: 0, tags: ["posts"] },
  });
  const data: BlogPost[] = await res.json();
  if (!data.length) return;

  const categories = ["All", ...new Set(data.map((blog) => blog.category))];
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
