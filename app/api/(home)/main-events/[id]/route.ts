import { connectToDB } from "@/lib/connectToDB";
import MainEvent from "@/models/(home)/event";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const event = await MainEvent.findById(id)

        if (!event) {
            return NextResponse.json(
                {
                    message: "event not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(event)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
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
        const eventUpdated = await MainEvent.findByIdAndUpdate(id, body)

        if (!eventUpdated) {
            return NextResponse.json(
                {
                    message: "event not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(eventUpdated)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const event = await MainEvent.findByIdAndDelete(id)

        if (!event) {
            return NextResponse.json(
                {
                    message: "event not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(event)

    } catch (error) {
        return NextResponse.json({ message: "event error" }, { status: 400 })
    }
}
