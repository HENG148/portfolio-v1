import mongoose, { Model, Schema } from "mongoose";
import { IBlogInput } from "../db/schema/blog.schema";

export interface IBlog extends IBlogInput, mongoose.Document {}

const PostSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    publishedAt: { type: Date, default: Date.now },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    author: { type: String, default: "Anonymous" },
    readingTime: { type: Number, default: 3 },
  },
  { timestamps: true }
);

const Post: Model<IBlog> =
  mongoose.models.Post ?? mongoose.model<IBlog>("Post", PostSchema);

export default Post;