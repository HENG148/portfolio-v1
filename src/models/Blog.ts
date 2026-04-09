import mongoose, { Document, Model, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: Date;
  slug: string;
  author?: string;
  readingTime?: number;
}

const PostSchema = new Schema<IPost>(
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

const Post: Model<IPost> =
  mongoose.models.Post ?? mongoose.model<IPost>("Post", PostSchema);

export default Post;