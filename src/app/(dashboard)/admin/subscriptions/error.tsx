"use client";
export default function error({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold">{error.message}</h1>
      <p className="text-xl">Something went wrong</p>
    </div>
  );
}
