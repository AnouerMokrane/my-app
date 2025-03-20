import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  image: { require: true, type: String },
  title: { require: true, type: String },
  category: { require: true, type: String },
  content: { require: true, type: String },
  date: { require: true, type: Date, default: Date.now },
  author: { require: true, type: String },
  author_img: { require: true, type: String },
});

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
