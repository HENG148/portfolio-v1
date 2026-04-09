import connectDB from "@/src/db/mongoose";
import Experience, { IExperience } from "@/src/models/Experience";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    await connectDB();
    const experience = await Experience.findById(id).lean();
    if (!experience) {
      return NextResponse.json({
        success: false,
        message: "Experience not found"
      }, {
        status: 404
      });
    }
    return NextResponse.json({
      success: true,
      data: experience
    }, {
      status: 200
    })
  } catch (err) {
    console.error(`[GET /api/experience/]`, err);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch experience"
    }, {
      status: 500
    })
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    await connectDB();
    const body = await req.json();
    const { title, company, period, bullets } = body;

    // const updateData: Record<string, unknown> = {};
    const updateData: Partial<IExperience> = {}
    if (title !== undefined) updateData.title = title;
    if (company !== undefined) updateData.company = company;
    if (period !== undefined) updateData.period = period;
    if (bullets !== undefined) updateData.bullets = bullets;


    const updated = await Experience.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).lean();

    if (!updated) {
      return NextResponse.json({
        success: false, 
        message: "Experience not found"
      }, {
        status: 404
      })
    }
    return NextResponse.json({ success: true, data: updated}, {status: 500})
  } catch (err) {
    console.error(`[PUT /api/experience/]`, err);
    return NextResponse.json({ success: false, message: "Failed to update experience" }, { status: 200 });
  }
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    await connectDB();
    const deleted = await Experience.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: "Experience not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "Experience deleted" }, { status: 200 });
  } catch (err) {
    console.error(`[DELETE /api/experience/]`, err);
    return NextResponse.json({
      success: false,
      message: "Failed to delete experience"
    }, {
      status: 500
    })
  }
}