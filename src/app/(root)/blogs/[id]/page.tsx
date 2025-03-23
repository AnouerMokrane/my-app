import Image from "next/image";
import { assets } from "../../../../../public/Assets/assets";
import { BlogPost } from "@/lib/types";
import { getPostById } from "@/lib/actions";
import { marked } from "marked";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await getPostById(id);

  if (!data.success) {
    return (
      <div className="flex  justify-center h-[calc(100dvh-(150px+81px))] sm:h-[calc(100dvh-(150px+23px))]  text-xl text-gray-700 pt-28">
        Blog not found
      </div>
    );
  }

  const blogDetails: BlogPost = data.data;

  const htmlContent = marked.parse("");

  return (
    <>
      <div className="bg-slate-200 py-24 pb-28">
        <div className="flex items-center text-center flex-col gap-4">
          <h1 className="max-w-xl text-2xl sm:text-4xl md:text-5xl md:max-w-3xl font-semibold">
            {blogDetails.title}
          </h1>
          <div className="flex items-center flex-col gap-1 mt-3">
            <Image
              src={blogDetails.author_img || ""}
              alt={blogDetails.author || "Author"}
              width={60}
              height={60}
              className="border border-white rounded-full"
            />
            <p className="text-gray-700">{blogDetails.author}</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-1.5 -mt-20 mb-10 bg-white">
        <Image
          src={blogDetails.image || ""}
          width={500}
          height={500}
          alt={blogDetails.title}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="max-w-2xl mx-auto pb-12 px-4">
        <h2 className="text-lg font-medium">Introduction:</h2>
        <div className="space-y-5">
          <div className="my-5 text-md text-gray-900">
            <div
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="prose"
            />
          </div>
        </div>
        <div className="py-24">
          <p>Share this article on social media :</p>
          <div className="flex mt-3">
            <Image src={assets.facebook_icon} alt="facebook" width={50} />
            <Image src={assets.twitter_icon} alt="twitter" width={50} />
            <Image src={assets.googleplus_icon} alt="googleplus" width={50} />
          </div>
        </div>
      </div>
    </>
  );
}
