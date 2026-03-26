import { connectToDB } from "@/lib/connectToDB";
import Conference from "@/models/(downloads)/conference";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const conference = await Conference.findById(id)

        if (!conference) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(conference)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
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
        const conferenceUpdated = await Conference.findByIdAndUpdate(id, body)

        if (!conferenceUpdated) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(conferenceUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const conference = await Conference.findByIdAndDelete(id)

        if (!conference) {
            return NextResponse.json(
                {
                    message: "Conference not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(conference)

    } catch (error) {
        return NextResponse.json({ message: "Conference error" }, { status: 400 })
    }
}
