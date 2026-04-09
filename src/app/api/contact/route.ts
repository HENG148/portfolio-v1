import connectDB from "@/src/db/mongoose";
import { sendNotification } from "@/src/lib/Notify";
import { rateLimit } from "@/src/lib/RateLimit";
import Message from "@/src/models/Message";
import { NextRequest, NextResponse } from "next/server";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";
    
    const { allowed } = rateLimit(ip)
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too manu requests. Please wait a moments." },
        {status: 429}
      )
    }

    const body: ContactPayload = await req.json();
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "All field are required." },
        {status: 400}
      )
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      )
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message exceeds 2000 characters." },
        { status: 400 }
      );
    }

    await connectDB();
    const doc = await Message.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      ip,
    })
    sendNotification({ name, email, subject, message }).catch((err) =>
      console.error("[notify] Failed to send notification:", err)
    )
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. I'll get back to you soon",
        id: doc._id.toString(),
      },
      { status: 201}
    )
  } catch (err) {
    console.error("[POST /api/contact]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}