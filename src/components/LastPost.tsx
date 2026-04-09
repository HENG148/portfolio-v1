import Link from "next/link";
import connectDB from "../db/mongoose";
import Post, { IPost } from "../models/Blog";
import BlogCard, { PostCardData } from "./BlogCard";

async function getPosts(limit?: number): Promise<PostCardData[]> {
  await connectDB();

  const query = Post.find({}).sort({ publishedAt: -1 }).select(
    "title excerpt tags publishedAt slug author readTime"
  )
  if(limit != undefined) query.limit(limit)
  const posts: IPost[] = await query.lean();

  // const posts: IPost[] = await Post.find({})
  //   .sort({ publishedAt: -1 })
  //   .limit(limit)
  //   .select("title excerpt tags publishedAt slug author readingTime")
  //   .lean();

  return posts.map((p) => ({
    title: p.title,
    excerpt: p.excerpt,
    tags: p.tags,
    publishedAt: p.publishedAt.toISOString() || "",
    slug: p.slug,
    author: p.author,
    readingTime: p.readingTime,
  }));
}

interface LastestPostProps {
  limit?: number;
}

export default async function LatestPosts({ limit }: LastestPostProps) {
  const posts = await getPosts(limit)
  const showViewAll = !!limit;

  return (
    <section className="px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-white text-3xl font-bold font-sans tracking-tight">
          Latest Posts
        </h2>
        {showViewAll && (
          <Link
            href={`/blog`}
            className="text-xs text-white border border-white px-4 py-2 font-mono uppercase tracking-widest transition-colors duration-150 hover:bg-white hover:text-black"
          >
            View all
          </Link>
        )}
      </div>

      {/* Grid */}
      {posts.length === 0 ? (
        <p className="text-[#555] text-sm font-mono">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}