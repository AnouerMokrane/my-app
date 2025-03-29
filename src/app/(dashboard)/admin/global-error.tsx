"use client";
export default function error({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h2 className="text-center text-3xl font-bold">
            Something went wrong
          </h2>
          <p className="text-center text-xl">{error.message}</p>
          <p className="text-center text-xl">Please try again later.</p>
        </div>
      </body>
    </html>
  );
}
