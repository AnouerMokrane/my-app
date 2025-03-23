"use client";

import { subscribe } from "@/lib/actions";
import React, { useActionState } from "react";
import { toast } from "react-toastify";

export default function SubForm() {
  const handleSubscribe = async (prevState: unknown, formData: FormData) => {
    const email = formData.get("email") as string;

    try {
      const res = await subscribe(email);
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [, action, isPending] = useActionState(handleSubscribe, null);
  return (
    <form action={action} className="flex border shadow-custom bg-white ">
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="w-full outline-none  py-3 px-4 text-gray-600 sm:w-96"
      />
      <button
        disabled={isPending}
        className="border-l px-4 py-4 sm:px-8 cursor-pointer"
      >
        {isPending ? "Subscribing..." : "Subscription"}
      </button>
    </form>
  );
}
