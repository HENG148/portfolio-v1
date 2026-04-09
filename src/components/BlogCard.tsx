"use client";

import Link from "next/link";

export interface PostCardData {
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string | Date;
  slug: string;
  author?: string;
  readingTime?: number;
}

interface BlogCardProps {
  post: PostCardData;
}

function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border border-[#2a2a2a] bg-[#0f0f0f] p-6 max-w-sm w-full transition-colors duration-200 hover:border-white hover:bg-[#141414]"
    >
      <article>
        {/* Header */}
        <header className="flex items-center justify-between mb-3">
          <time
            className="text-xs text-[#888] font-mono tracking-wide"
            dateTime={new Date(post.publishedAt).toISOString()}
          >
            {formatDate(post.publishedAt)}
          </time>
          {post.readingTime && (
            <span className="text-xs text-[#555] font-mono">
              {post.readingTime} min read
            </span>
          )}
        </header>

        {/* Title */}
        <h2 className="text-white font-bold text-lg leading-snug tracking-tight mb-2 font-serif">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[#aaa] text-sm leading-relaxed mb-5">
          {post.excerpt}
        </p>

        {/* Tags */}
        <footer>
          <ul className="flex flex-wrap gap-1.5" aria-label="Post tags">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="text-[0.7rem] text-[#ccc] border border-[#333] px-2 py-0.5 font-mono lowercase tracking-wide transition-colors duration-150 group-hover:border-[#555] group-hover:text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </Link>
  );
}