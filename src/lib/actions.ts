"use server";
import { connectDB } from "./dbConnect";
import { Post } from "./models/PostModel";
import { Subscription } from "./models/SubscriptionModel";
import { BlogPost } from "./types";

export const getPosts = async () => {
  await connectDB();

  try {
    const posts = await Post.find();
    return {
      success: true,
      data: posts,
    };
  } catch (error) {
    console.error("Error getting posts: ", error);
    return {
      success: false,
      message: "Error getting posts",
    };
  }
};

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
  } catch (error) {
    console.log("Error updating post: ", error);
    return {
      succuss: false,
      message: "Error updating post",
    };
  }
};

export const deletePost = async (id: string) => {
  connectDB();

  try {
    await Post.findOneAndDelete({ _id: id });

    return {
      success: true,
      message: "Post deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting post: ", error);
    return {
      success: false,
      message: "Error deleting post",
    };
  }
};
export const subscribe = async (email: string) => {
  await connectDB();

  try {
    await Subscription.create({ email });
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

export const getSubscriptions = async () => {
  await connectDB();

  try {
    const subscriptions = await Subscription.find();
    return {
      success: true,
      data: subscriptions,
    };
  } catch (error) {
    console.error("Error getting subscriptions: ", error);
    return {
      success: false,
      message: "Error getting subscriptions",
    };
  }
};
