import Image from "next/image";
import Link from "next/link";
import { assets } from "../../public/Assets/assets";

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen sticky top-0 left-0 bg-white shadow-md border-r-2 max-md:hidden">
      <div className="border-b-2 px-4 py-3">
        <Image src={assets.logo} alt="blogger" width={130} />
      </div>
      <nav className="space-y-6 p-12 pe-1">
        <Link href="/admin/add-blog" className="block p-2 border shadow-custom">
          ➕ <span className="">Add Blog</span>
        </Link>
        <Link
          href="/admin/blog-list"
          className="block p-2 border shadow-custom"
        >
          📝 <span className="">Blog Lists</span>
        </Link>
        <Link
          href="/admin/subscriptions"
          className="block p-2 border shadow-custom"
        >
          ✉️
          <span className="">Subscriptions</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
