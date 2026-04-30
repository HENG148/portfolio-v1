import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { ProjectSchema } from "@/src/db/schema/project.schema";
import ProjectModel from "@/src/models/Project";

const MONGODB_URI = process.env.MONGODB_URI!;

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const parsed = ProjectSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const project = await ProjectModel.create(parsed.data);

    return NextResponse.json(
      { message: "Project created", data: project },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const projects = await ProjectModel.find().sort({ createdAt: -1 });
    return NextResponse.json({ data: projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}