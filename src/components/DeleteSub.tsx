"use client";

import { deleteSubscription } from "@/lib/actions";
import { useFormStatus } from "react-dom";

export default function DeleteSub({ email }: { email: string }) {
  const { pending } = useFormStatus();
  return (
    <form action={deleteSubscription}>
      <input type="text" name="email" hidden readOnly value={email} />
      <button
        type="submit"
        disabled={pending}
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
      >
        {pending ? "Deleting" : "Delete"}
      </button>
    </form>
  );
}
