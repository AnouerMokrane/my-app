import Link from "next/link";
import React from "react";

export default function BottomBar() {
  return (
    <nav className="fixed bg-white bottom-0 left-0 w-full h-16 flex justify-around items-center border-t border-gray-600 md:hidden">
      <Link href="/admin/add-blog" className="flex flex-col items-center">
        <span className="text-2xl">➕</span>
        <span className="text-sm">Add Blog</span>
      </Link>
      <Link href="/admin/blog-list" className="flex flex-col items-center">
        <span className="text-2xl">📝</span>
        <span className="text-sm">Blog Lists</span>
      </Link>
      <Link href="/admin/subscriptions" className="flex flex-col items-center">
        <span className="text-2xl">✉️</span>
        <span className="text-sm">Subscriptions</span>
      </Link>
    </nav>
  );
}
