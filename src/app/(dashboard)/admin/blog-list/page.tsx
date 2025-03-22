import Link from "next/link";
import { getPosts } from "@/lib/actions";
import Image from "next/image";
import { BlogPost } from "@/lib/types";
import { assets } from "../../../../../public/Assets/assets";
import DeleteBlog from "@/components/DeleteBlog";

export default async function BlogsList() {
  const posts = await getPosts();
  if (!posts?.data?.length) {
    return (
      <>
        <h1 className="text-2xl font-semibold">No Blogs Found</h1>
        <Link href="/admin/add-blog">
          <span className="text-sm underline">Add Blog</span>
        </Link>
      </>
    );
  }
  return (
    <>
      <h1 className="text-2xl font-medium mb-4">Blogs List</h1>

      <div className="overflow-x-scroll max-w-xl overflow-y-scroll custom-scrollbar lg:max-w-6xl">
        <table className="min-w-max w-full bg-white border border-gray-200 ">
          <thead className="sticky -top-1">
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left ">Title</th>
              <th className="py-3 px-6 text-left ">Category</th>
              <th className="py-3 px-6 text-left">Author</th>
              <th className="py-3 px-6 text-left ">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {posts?.data?.map((post: BlogPost) => (
              <tr
                key={post.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{post.title}</td>
                <td className="py-3 px-6 text-left ">{post.category}</td>
                <td className="flex items-center gap-2 py-3 px-6 text-left ">
                  <Image
                    src={assets.profile_icon}
                    alt=""
                    width={40}
                    height={40}
                  />
                  {post.author}
                </td>
                <td className="py-3 px-6 text-left ">
                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/edit-blog/${post.id}`}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300"
                    >
                      Edit
                    </Link>
                    <DeleteBlog id={JSON.stringify(post.id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
