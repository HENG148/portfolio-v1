import connectDB from "@/src/lib/mongoose";
import Education from "@/src/models/Education";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const educations = await Education.find().sort({ createdAt: 1 });
    return NextResponse.json({
      success: true,
      data: educations
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch education records." },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { title, school, year } = await req.json();
    const education = await Education.create({ title, school, year });
    return NextResponse.json({ success: true, data: education }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({
      success: false, message: error.message || "Failed to create education record"
    },
      { status: 400 }
    )
  }
}