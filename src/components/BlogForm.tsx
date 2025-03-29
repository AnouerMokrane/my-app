"use client";

import Image from "next/image";
import React, { useActionState, useState } from "react";
import { assets } from "../../public/Assets/assets";
import MDEditor from "@uiw/react-md-editor";

import { createPost, updatePost } from "@/lib/actions";
import { toast } from "react-toastify";
import { useUser } from "@clerk/nextjs";

export default function BlogForm({
  id,
  values,
  type = "create",
}: {
  id?: string;
  values?: string;
  type?: "create" | "edit";
}) {
  const defaultValues = JSON.parse(values || "{}");
  const [image, setImage] = useState<null | string>(
    defaultValues?.image || null
  );
  const [isUploading, setIsUploading] = useState(false);
  const [value, setValue] = React.useState<string>(
    defaultValues?.content || ""
  );

  const { user } = useUser();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0] as File;
    setIsUploading(true);

    try {
      if (!file) {
        toast.warn("No file selected");
      }
      const data = new FormData();
      data.set("file", file);
      const response = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const url = await response.json();
      setImage(url);
      setIsUploading(false);
    } catch (e) {
      console.log(e);
      setIsUploading(false);
      toast.warn("Trouble uploading file");
    }
  };

  const handleSubmit = async (prevState: unknown, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        category: formData.get("category") as string,
        image,
        content: value,
      };

      if (!user) return;

      if (type === "create") {
        const res = await createPost({
          title: formValues.title,
          category: formValues.category,
          image: formValues.image as string,
          content: value,
          date: Date.now(),
          author: {
            id: user.id,
            name: user.fullName as string,
            email: user.emailAddresses[0].emailAddress,
            author_img: user.imageUrl as string,
          },
        });

        if (res.success) {
          toast.success(res.message);
          setImage(null);
          setValue("");
        } else {
          toast.error(res.message);
          setImage(null);
          setValue("");
        }
      } else {
        const res = await updatePost(id as string, {
          title: formValues.title,
          category: formValues.category,
          image: formValues.image as string,
          content: value,
          date: Date.now(),
          author: {
            id: user.id,
            name: user.fullName as string,
            email: user.emailAddresses[0].emailAddress,
            author_img: user.imageUrl as string,
          },
        });

        if (res.succuss) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      }
    } catch (error) {
      setImage(null);
      setValue("");
      console.log(error);
    }
  };

  const [, formAction, isPending] = useActionState(handleSubmit, null);

  return (
    <form action={formAction} className="space-y-4 pb-22">
      <div>
        <p className="block text-md mb-2">Upload thumbnail</p>
        <label htmlFor="image" className="block w-34 cursor-pointer">
          {isUploading ? (
            <div className="w-34 h-20 bg-gray-200 flex items-center justify-center">
              <span className="relative w-8 h-8 border-2 border-white border-r-black rounded-full animate-spin"></span>
            </div>
          ) : image ? (
            <Image
              loader={({ src }) => {
                return src;
              }}
              src={image}
              alt=""
              width={140}
              height={50}
            />
          ) : (
            <Image src={assets.upload_area} alt="" width={140} height={50} />
          )}
        </label>
        <input
          type="file"
          name="image"
          id="image"
          hidden
          required={type === "create"}
          disabled={isUploading}
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="title" className="block text-md font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={defaultValues?.title || ""}
          required
          placeholder="Enter Blog Title"
          className="w-full sm:w-[500px] p-2 border rounded-sm placeholder:text-[14px]"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-md font-medium mb-1">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          required
          defaultValue={defaultValues?.category || ""}
          placeholder="Type category"
          className="w-full sm:w-[500px] p-2 border rounded-sm placeholder:text-[14px] "
        />
      </div>
      <div className="sm:w-[500px]">
        <label htmlFor="content" className="block text-md font-medium mb-1">
          Content
        </label>
        <MDEditor
          value={value}
          defaultValue={defaultValues?.content || ""}
          onChange={(val) => setValue(val as string)}
          data-color-mode="light"
          className="border"
        />
        <MDEditor.Markdown
          source={value}
          style={{ backgroundColor: "white", color: "black" }}
          className=" whitespace-pre-wrap p-3 bg-white text-black border border-t-0 rounded-xs"
        />
      </div>

      <button
        type="submit"
        className="w-36 px-6 py-3 bg-black text-white rounded-sm hover:bg-black/90 disabled:bg-gray-400 cursor-pointer mt-4"
        disabled={isPending}
      >
        {isPending ? (
          <span className="size-6 block mx-auto border-2 border-r-black rounded-full animate-spin" />
        ) : type === "edit" ? (
          "Update Blog"
        ) : (
          "Add Blog"
        )}
      </button>
    </form>
  );
}
