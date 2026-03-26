import { connectToDB } from "@/lib/connectToDB";
import Message from "../../../../models/messages"; // Correct path
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await connectToDB();

  try {
    const message = await Message.findByIdAndDelete(id); // Use id here

    if (!message) {
      return NextResponse.json(
        {
          message: "Message not found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json({ message: "Message error" }, { status: 400 });
  }
}
