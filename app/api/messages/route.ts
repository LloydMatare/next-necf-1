import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import Message from "../../../models/messages";
import { getPaginationParams, buildPaginatedResult } from "@/lib/pagination";

export async function POST(req: Request) {
  const { name, email, phone, eventTitle } = await req.json();

  try {
    await connectToDB();
    await Message.create({ name, email, phone, eventTitle });

    return NextResponse.json(
      { message: "Registration successful!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving registration." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connectToDB();
  const { page, limit } = getPaginationParams(req.nextUrl.searchParams);
  const skip = (page - 1) * limit;
  const [messages, total] = await Promise.all([
    Message.find().skip(skip).limit(limit),
    Message.countDocuments(),
  ]);
  return NextResponse.json(buildPaginatedResult(messages, total, { page, limit }));
}
