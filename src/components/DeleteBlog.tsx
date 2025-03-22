import { deletePost } from "@/lib/actions";
import React from "react";

export default function DeleteBlog({ id }: { id: string }) {
  return (
    <form action={deletePost}>
      <input type="text" name="id" hidden readOnly value={JSON.parse(id)} />
      <button
        type="submit"
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
      >
        Delete
      </button>
    </form>
  );
}
