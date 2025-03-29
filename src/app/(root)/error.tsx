"use client";
export default function error({ error }: { error: Error }) {
  return (
    <div>
      <h1>{error.message}</h1>
      <p>Something went wrong</p>
    </div>
  );
}
