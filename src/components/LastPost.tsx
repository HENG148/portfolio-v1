import Link from "next/link";
import connectDB from "../db/mongoose";
import Post, { IPost } from "../models/Blog";
import BlogCard, { PostCardData } from "./BlogCard";

const DISPLAY_LIMIT = 6;

async function getPosts(): Promise<PostCardData[]> {
  await connectDB();

  // const query = Post.find({}).sort({ publishedAt: -1 }).select(
  //   "title excerpt tags publishedAt slug author readTime"
  // )
  // if(limit != undefined) query.limit(limit)
  // const posts: IPost[] = await query.lean();

  const posts: IPost[] = await Post.find({})
    .sort({ publishedAt: -1 })
    .limit(DISPLAY_LIMIT + 1)
    .select("title excerpt tags publishedAt slug author readingTime")
    .lean();

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

export default async function LatestPosts() {
  const allFetched = await getPosts();
  const hasMore = allFetched.length > DISPLAY_LIMIT;
  const posts = allFetched.slice(0, DISPLAY_LIMIT)

  return (
    <section
      id="blog"
      className="max-w-7xl mx-auto px-6 py-20 md:px-10"
    >
      <div>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white text-3xl font-bold font-sans tracking-tight">
            Latest Posts
          </h2>
          {hasMore && (
            <Link
              href={`/blog`}
              className="text-xs text-white border border-white px-4 py-2 rounded-2xl font-sans uppercase tracking-widest transition-colors duration-150 hover:bg-white hover:text-black"
            >
              View all
            </Link>
          )}
        </div>

        {posts.length === 0 ? (
          <p className="text-[#555] text-sm font-mono">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}