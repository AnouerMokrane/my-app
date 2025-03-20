import { getPosts } from "@/lib/actions";
import BlogCard from "./BlogCard";
import BlogFilter from "./BlogFilter";

export default async function BlogSection({ category }: { category: string }) {
  const data = await getPosts();

  if (!data.success) {
    return <h1>No Posts Found</h1>;
  }

  const filtredBlogs = data?.data?.filter((blog) => blog.category === category);

  return (
    <section className="container mx-auto py-12 max-xl:px-5">
      <BlogFilter currentCategory={category} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
        {filtredBlogs?.map((blog) => (
          <BlogCard key={blog.id} blog_data={blog} />
        ))}
      </div>
    </section>
  );
}
