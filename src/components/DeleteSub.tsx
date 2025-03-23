"use client";

import { deleteSubscription } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export default function DeleteSub({ email }: { email: string }) {
  return (
    <form action={deleteSubscription} className="block w-20">
      <input type="text" name="email" hidden readOnly value={email} />
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
