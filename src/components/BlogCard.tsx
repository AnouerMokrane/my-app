import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "../../public/Assets/assets";
import { BlogPost } from "@/lib/types";
import { marked } from "marked";

export default function BlogCard({ blog_data }: { blog_data: BlogPost }) {
  const htmlContent = marked.parse(blog_data.content || "");
  return (
    <Link
      href={`/blogs/${blog_data._id}`}
      className="block bg-white border border-gray-700 duration-150 transition-shadow hover:shadow-custom"
    >
      <Image
        src={blog_data.image}
        alt={blog_data.title}
        width={500}
        height={300}
        className="w-full h-[200px] object-cover border-b border-black"
      />
      <div className="p-5">
        <span className="text-white text-sm bg-black px-2 py-1 rounded-sm ">
          {blog_data.category}{" "}
        </span>

        <h2 className="text-lg mt-4">{blog_data.title} </h2>
        <div
          className="text-gray-600 mt-2 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
        <div className="flex items-center gap-2 font-medium mt-4">
          Read more <Image src={assets.arrow} alt="arrow" width={15} />
        </div>
      </div>
    </Link>
  );
}
