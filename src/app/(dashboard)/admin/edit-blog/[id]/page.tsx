import BlogForm from "@/components/BlogForm";
import { getPostById } from "@/lib/actions";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);
  return (
    <div>
      <BlogForm id={id} values={JSON.stringify(post.data)} type="edit" />
    </div>
  );
}
