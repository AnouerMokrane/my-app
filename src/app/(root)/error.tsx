"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-red-500 p-4">
      <h2 className="text-2xl">Error fetching blogs</h2>
      <p>{error.message}</p>
    </div>
  );
}
