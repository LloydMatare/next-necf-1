import { connectToDB } from "@/lib/connectToDB";
import Chair from "@/models/chairs";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const chair = await Chair.findById(id)

        if (!chair) {
            return NextResponse.json(
                {
                    message: "Chair not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(chair)

    } catch (error) {
        return NextResponse.json({ message: "Chair error" }, { status: 400 })
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
        const chairUpdated = await Chair.findByIdAndUpdate(id, body)

        if (!chairUpdated) {
            return NextResponse.json(
                {
                    message: "Chair not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(chairUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Chair error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const chair = await Chair.findByIdAndDelete(id)

        if (!chair) {
            return NextResponse.json(
                {
                    message: "Chair not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(chair)

    } catch (error) {
        return NextResponse.json({ message: "Chair error" }, { status: 400 })
    }
}
