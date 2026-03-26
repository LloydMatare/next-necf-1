import { connectToDB } from "@/lib/connectToDB";
import Download from "@/models/(downloads)/download";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const download = await Download.findById(id)

        if (!download) {
            return NextResponse.json(
                {
                    message: "download not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(download)

    } catch (error) {
        return NextResponse.json({ message: "download error" }, { status: 400 })
    }
}

export async function POST(request: Request) {
    await connectToDB();
    try {
      const body = await request.json();
      const newDownload = new Download(body);
      await newDownload.save();
      return NextResponse.json(newDownload);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Creation failed" },
        { status: 400 }
      );
    }
  }


export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    const body = await request.json()
    await connectToDB()
    try {
        const { id } = await params
        const downloadUpdated = await Download.findByIdAndUpdate(id, body)

        if (!downloadUpdated) {
            return NextResponse.json(
                {
                    message: "download not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(downloadUpdated)

    } catch (error) {
        return NextResponse.json({ message: "download error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const download = await Download.findByIdAndDelete(id)

        if (!download) {
            return NextResponse.json(
                {
                    message: "download not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(download)

    } catch (error) {
        return NextResponse.json({ message: "download error" }, { status: 400 })
    }
}
