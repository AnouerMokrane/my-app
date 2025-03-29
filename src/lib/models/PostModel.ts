import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  author_img: { type: String, required: true },
});

const PostSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  author: { type: AuthorSchema, required: true },
});

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
