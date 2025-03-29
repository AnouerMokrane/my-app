"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { connectDB } from "./dbConnect";
import { Post } from "./models/PostModel";
import { Subscription } from "./models/SubscriptionModel";
import { BlogPost } from "./types";

export const getPostById = async (id: string) => {
  await connectDB();
  try {
    const post = await Post.findById(id);
    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.log("Error getting post by id: ", error);
    return {
      success: false,
      message: "Error getting post by id",
    };
  }
};

export const createPost = async (post: BlogPost) => {
  await connectDB();

  try {
    await Post.create(post);
    revalidatePath("/admin/blog-list");
    revalidatePath("/");
    revalidatePath("/api/posts");
    revalidateTag("posts");
    return {
      success: true,
      message: "Post created successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Error creating post",
    };
  }
};

export const updatePost = async (id: string, post: BlogPost) => {
  connectDB();

  try {
    await Post.findByIdAndUpdate(id, post);
    revalidatePath("/admin/blog-list");
    revalidatePath("/");
    revalidateTag("posts");
    return {
      succuss: true,
      message: "Post updated successfully",
    };
  } catch (error) {
    console.log("Error updating post: ", error);
    return {
      succuss: false,
      message: "Error updating post",
    };
  }
};

export const deletePost = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await connectDB();
  try {
    await Post.findByIdAndDelete(id);
    revalidatePath("/admin/blog-list");
    revalidatePath("/");
    revalidateTag("posts");
  } catch (error) {
    console.log("Error deleting post: ", error);
  }
};
export const subscribe = async (email: string) => {
  await connectDB();

  const subscription = await Subscription.findOne({ email });
  if (subscription) {
    return {
      success: false,
      message: "Email already exists",
    };
  }

  try {
    await Subscription.create({ email });
    revalidatePath("/admin/subscriptions");
    revalidateTag("subscribers");
    return {
      success: true,
      message: "Subscribed successfully",
    };
  } catch (error) {
    console.error("failed", error);
    return {
      success: false,
      message: "Error subscribing",
    };
  }
};

export const deleteSubscription = async (formData: FormData): Promise<void> => {
  const email = formData.get("email");
  await connectDB();
  try {
    await Subscription.findOneAndDelete({ email: email });
    revalidatePath("/admin/subscriptions");
    revalidateTag("subscribers");
  } catch (error) {
    console.error(error);
  }
};
