import connectDB from "@/src/db/mongoose";
import Experience from "@/src/models/Experience";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const experience = await Experience.find({}).sort({ startDate: -1 });
    return NextResponse.json({ success: true, data: experience }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Failed to fetch" }, { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const experience = await Experience.create(body);
    return NextResponse.json({
      success: true,
      data: experience
    }, {
      status: 201
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Failed to insert"
    }, {
      status: 500
    });
  }
}