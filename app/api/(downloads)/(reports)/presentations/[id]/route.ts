import { connectToDB } from "@/lib/connectToDB";
import Presentation from "@/models/(downloads)/presentation";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const presentation = await Presentation.findById(id)

        if (!presentation) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(presentation)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
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
        const presentationUpdated = await Presentation.findByIdAndUpdate(id, body)

        if (!presentationUpdated) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(presentationUpdated)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const presentation = await Presentation.findByIdAndDelete(id)

        if (!presentation) {
            return NextResponse.json(
                {
                    message: "presentation not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(presentation)

    } catch (error) {
        return NextResponse.json({ message: "presentation error" }, { status: 400 })
    }
}
