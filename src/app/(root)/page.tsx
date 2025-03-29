import Hero from "@/components/Hero";
import { Post } from "@/lib/models/PostModel";
import { BlogPost } from "@/lib/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const posts: BlogPost[] = await Post.find();
  const { category } = await searchParams;
  const currentCategory = category || "All";
  return (
    <>
      <Hero />
      <div>
        {JSON.stringify(posts)}
        {JSON.stringify(currentCategory)}
      </div>
    </>
  );
}
