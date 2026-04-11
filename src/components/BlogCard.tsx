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
  category?: string;
}

interface BlogCardProps {
  post: PostCardData;
  featuredTags?: string[];
}

function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getInitials(name = "Anonymous"): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

export default function BlogCard({ post, featuredTags = [] }: BlogCardProps) {
  return (
    <div className="group relative max-w-sm w-full">
      <Link
        href={`/blog/${post.slug}`}
        className="block font-sans bg-[#111] border border-[#222] rounded-xl p-6 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[#444]"
      >
      {/* <span className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-white to-[#555] rounded-t-xl" /> */}
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
        <time className="text-[11px] text-[#555] font-mono tracking-widest">
          {formatDate(post.publishedAt)}
        </time>
        {/* {post.readingTime && (
          <span className="ml-auto text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#555]">
            {post.readingTime} min read
          </span>
        )} */}
      </div>

      {/* {post.author && (
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[11px] font-mono font-medium text-[#aaa] shrink-0">
            {getInitials(post.author)}
          </div>
          <span className="text-[12px] font-mono text-[#555]">
            {post.author}
            {post.category && <span className="text-[#333]"> · {post.category}</span>}
          </span>
        </div>
      )} */}

      <h2 className="font-sans text-[19px] font-bold leading-snug text-white mb-2.5">
        {post.title}
      </h2>
      <p className="text-[13px] text-[#666] leading-relaxed mb-5">
        {post.excerpt}
      </p>
      
      <div className="border-t border-[#1e1e1e] mb-4" />
      <div className="flex items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => {
            const isFeatured = featuredTags.includes(tag);
            return (
              <li
                key={tag}
                className={
                  isFeatured
                    ? "text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#1a1a1a] border border-[#333] text-[#ccc]"
                    : "text-[12px] font-mono px-2.5 py-0.5 rounded-full border border-[#2a2a2a] text-[#7e7171] transition-colors group-hover:border-[#333] group-hover:text-[#888]"
                }
              >
                {tag}
              </li>
            );
          })}
        </ul>

        <span className="shrink-0 w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#555] text-sm transition-all group-hover:border-white group-hover:bg-white group-hover:text-black">
          →
        </span>
      </div>
    </Link>
    </div>
  );
}