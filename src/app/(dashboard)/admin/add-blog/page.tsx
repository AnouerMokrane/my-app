import BlogForm from "@/components/BlogForm";
import React from "react";

export default function page() {
  return (
    <>
      <h1 className="text-2xl font-medium mb-6">Add new blog</h1>
      <BlogForm />
    </>
  );
}
