import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "../../public/Assets/assets";

export default function BlogCard({
  blog_data,
}: {
  blog_data: {
    _id: number;
    title: string;
    description: string;
    image: StaticImageData;
    date: number;
    category: string;
    author: string;
    author_img: StaticImageData;
  };
}) {
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
        className="w-auto h-auto border-b border-black"
      />
      <div className="p-5">
        <span className="text-white text-sm bg-black px-2 py-1 rounded-sm ">
          {blog_data.category}{" "}
        </span>

        <h2 className="text-lg mt-4">{blog_data.title} </h2>
        <p className="text-gray-600 mt-2 line-clamp-3">
          {blog_data.description}
        </p>
        <div className="flex items-center gap-2 font-medium mt-4">
          Read more <Image src={assets.arrow} alt="arrow" width={15} />
        </div>
      </div>
    </Link>
  );
}
