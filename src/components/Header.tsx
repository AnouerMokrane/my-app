"use client";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../../public/Assets/assets";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const isBlogPage = pathName.includes("/blogs/");

  return (
    <header
      className={`w-full bg-slate-200 p-5 ${
        isBlogPage ? "bg-slate-200" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={assets.logo}
            alt="blogger"
            width={180}
            className="w-[130px] sm:w-auto"
          />
        </Link>
        <Link
          href={"/admin"}
          className="flex items-center gap-3 font-medium py-2 px-3 border border-black cursor-pointer sm:px-6 sm:py-3 shadow-custom"
        >
          Get started <Image src={assets.arrow} alt="" />
        </Link>
      </div>
    </header>
  );
}
