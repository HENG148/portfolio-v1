import connectDB from "@/src/db/mongoose";
import Post from "@/src/models/Blog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find().sort({ publishedAt: -1 });
    return NextResponse.json(posts);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      {status: 500}
    )
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const post = await Post.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create post" },
      { status: 500 }
    );
  }
}