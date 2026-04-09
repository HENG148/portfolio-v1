import connectDB from "@/src/db/mongoose";
import Education from "@/src/models/Education";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise <{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const education = await Education.findById(id);
    if(!education) {
      return NextResponse.json(
        { success: false, message: "Education not found" },
        { status: 404 }
      )
    }
    return NextResponse.json({
      success: true, 
      data: education
    })
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch education record" },
      { status: 500 }
    )
  }
}

export async function PUT(
  req: NextRequest,
  { params}: {params: Promise<{ id: string}>}
) {
  try {
    const { id } = await params;
    await connectDB();
    const { title, school, year } = await req.json();
    const education = await Education.findByIdAndUpdate(
      id,
      { title, school, year },
      { new: true, runValidators: true }
    );
    if (!education) {
      return NextResponse.json(
        { success: false, message: "Education not found" },
        { status: 404 }
      )
    }
    return NextResponse.json({ success: true, data: education });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to update education record" },
      { status: 400 }
    )
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise <{ id: string }> }
) {
  try {
    const { id } = await params
    await connectDB();
    const education = await Education.findByIdAndDelete(id);
    if (!education) {
      return NextResponse.json(
        { success: false, message: "Education not found" },
        { status: 404 }
      )
    }
    return NextResponse.json({
      success: true, 
      message: "Education deleted successfully"
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete education record" },
      { status: 500 }
    )
  }
}