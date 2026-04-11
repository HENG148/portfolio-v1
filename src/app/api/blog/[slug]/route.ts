import { NextRequest, NextResponse } from "next/server";
import Post from "@/src/models/Blog";
import connectDB from "@/src/db/mongoose";

export const dynamic = "force-dynamic"

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    const { slug } = await context.params;
    if (slug === "all") {
      const posts = await Post.find({}).select("slug title").lean();
      return NextResponse.json(posts);
    }
    const post = await Post.findOne({ slug });
    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 },
      )
    }
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}