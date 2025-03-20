import BlogForm from "@/components/BlogForm";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>{id} </h1>
      <BlogForm />
    </div>
  );
}
