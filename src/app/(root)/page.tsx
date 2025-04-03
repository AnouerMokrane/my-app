import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import { Suspense } from "react";

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
      <Suspense
        fallback={
          <div className="flex  justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px+150px))]pt-28">
            <span className="w-12 h-12 border-4 border-dashed rounded-full animate-spin"></span>
          </div>
        }
      >
        <BlogSection category={currentCategory} />
      </Suspense>
    </>
  );
}
