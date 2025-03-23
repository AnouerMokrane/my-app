//import BlogSection from "@/components/BlogSection";
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
    </>
  );
}
