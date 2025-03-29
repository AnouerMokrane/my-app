import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";
import { BlogPost } from "@/lib/types";

export default async function BlogSection({ category }: { category: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`, {
    next: {
      tags: ["posts"],
    },
  });

  console.log(res);
  const posts: BlogPost[] = await res.json();

  const filtredBlogs =
    category === "All"
      ? posts
      : posts.filter((blog) => blog.category === category);

  if (!filtredBlogs?.length) {
    return (
      <div className="flex  justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px+150px))]  text-xl text-gray-700 pt-28">
        <div className="flex items-center justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px+23px))]  text-xl text-gray-700 pt-28"></div>
        Blog not found
      </div>
    );
  }
  return (
    <section className="container mx-auto py-12 max-xl:px-5">
      <BlogFilter currentCategory={category} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {filtredBlogs?.map((blog) => (
          <BlogCard key={blog._id} blog_data={blog} />
        ))}
      </div>
    </section>
  );
}
