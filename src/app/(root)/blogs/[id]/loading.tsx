import React from "react";

export default function loading() {
  return (
    <div className="flex  justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px))] pt-28">
      <span className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"></span>
    </div>
  );
}
