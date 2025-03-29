"use client";

import { deletePost } from "@/lib/actions";
import { useUser } from "@clerk/nextjs";
import { useFormStatus } from "react-dom";

export default function DeleteBlog({
  id,
  authorId,
}: {
  id: string;
  authorId: string;
}) {
  const { user } = useUser();
  if (user?.id !== authorId) {
    return null;
  }
  return (
    <form action={deletePost}>
      <input type="text" name="id" hidden readOnly value={JSON.parse(id)} />
      <Btn />
    </form>
  );
}

export const Btn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
    >
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};
