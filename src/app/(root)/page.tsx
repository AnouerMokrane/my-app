import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const { category } = await searchParams;
  const currentCategory = category || "All";
  return (
    <>
      <Hero />
      <BlogSection category={currentCategory} />
    </>
  );
}
