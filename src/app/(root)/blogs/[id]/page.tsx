import Image from "next/image";
import { assets } from "../../../../../public/Assets/assets";
import { BlogPost } from "@/lib/types";
import { getPosts } from "@/lib/actions";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getPosts();

  if (!data.success) {
    return (
      <div className="flex  justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px+23px))]  text-xl text-gray-700 pt-28">
        Blog not found
      </div>
    );
  }

  const blog_data: BlogPost[] = data?.data || [];
  const blogDetails = blog_data?.find((blog) => blog.id === Number(id));

  if (!blogDetails) {
    return (
      <div className="flex  justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px+23px))]  text-xl text-gray-700 pt-28">
        Blog not found
      </div>
    );
  }

  return (
    <div>
      <div className="bg-slate-200 py-24 pb-28">
        <div className="flex items-center text-center flex-col gap-4">
          <h1 className="max-w-xl text-2xl sm:text-4xl md:text-5xl md:max-w-3xl font-semibold">
            {blogDetails.title}
          </h1>
          <div className="flex items-center flex-col gap-1 mt-3">
            <Image
              src={blogDetails.author_img || ""}
              alt={blogDetails.author || "Author"}
              width={60}
              height={60}
              className="border border-white rounded-full"
            />
            <p className="text-gray-700">{blogDetails.author}</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-1.5 -mt-20 mb-10 bg-white">
        <Image
          src={blogDetails.image || ""}
          alt={blogDetails.title}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="max-w-2xl mx-auto pb-12 px-4">
        <h2 className="text-lg font-medium">Introduction:</h2>
        <div className="space-y-5">
          <div className="my-5 text-md text-gray-900">
            {blogDetails.content}
            {/* write article here please */}
            <div>
              <h3 className="text-lg font-medium">
                Section 1: Understanding the Basics
              </h3>
              <p className="my-5 text-md text-gray-900">
                Markdown is a lightweight markup language that you can use to
                add formatting elements to plaintext text documents. Created by
                John Gruber in 2004, Markdown is now one of the worlds most
                popular markup languages.
              </p>
              <h3 className="text-lg font-medium">
                Section 2: Why Use Markdown?
              </h3>
              <p className="my-5 text-md text-gray-900">
                Markdown is widely used because it is easy to learn, easy to
                read, and easy to write. It is also platform-independent,
                meaning you can use it on any operating system or device.
              </p>
              <h3 className="text-lg font-medium">Section 3: Basic Syntax</h3>
              <p className="my-5 text-md text-gray-900">
                Here are some basic syntax elements in Markdown:
              </p>
              <ul className="list-disc list-inside my-5 text-md text-gray-900">
                <li>
                  <strong>Headers:</strong> Use the <code>#</code> symbol to
                  create headers. For example, <code># Header 1</code> creates a
                  top-level header.
                </li>
                <li>
                  <strong>Emphasis:</strong> Use <code>*</code> or{" "}
                  <code>_</code> for italic text, and <code>**</code> or{" "}
                  <code>__</code> for bold text.
                </li>
                <li>
                  <strong>Lists:</strong> Use <code>-</code> or <code>*</code>{" "}
                  for unordered lists, and numbers for ordered lists.
                </li>
                <li>
                  <strong>Links:</strong> Use <code>[link text](URL)</code> to
                  create hyperlinks.
                </li>
                <li>
                  <strong>Images:</strong> Use <code>![alt text](URL)</code> to
                  add images.
                </li>
              </ul>
              <h3 className="text-lg font-medium">
                Section 4: Advanced Features
              </h3>
              <p className="my-5 text-md text-gray-900">
                Markdown also supports more advanced features like tables,
                blockquotes, and code blocks. These features allow you to create
                more complex documents with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="py-24">
          <p>Share this article on social media :</p>
          <div className="flex mt-3">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="twitter" width={50} />
            <Image src={assets.googleplus_icon} alt="googleplus" width={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
