import Link from "next/link";
import React from "react";
import { blog_data } from "../../public/Assets/assets";

export default function BlogFilter({
  currentCategory,
}: {
  currentCategory: string;
}) {
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
