"use client";
export default function error({ error }: { error: Error }) {
  return (
    <div>
      <h1>Somthing went wront</h1>
      <p>{error.message} </p>
    </div>
  );
}
