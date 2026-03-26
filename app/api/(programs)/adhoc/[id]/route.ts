import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const adhoc = await Adhoc.findById(id)

        if (!adhoc) {
            return NextResponse.json(
                {
                    message: "Adhoc not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(adhoc)

    } catch (error) {
        return NextResponse.json({ message: "Adhoc error" }, { status: 400 })
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
        const adhocUpdated = await Adhoc.findByIdAndUpdate(id, body)

        if (!adhocUpdated) {
            return NextResponse.json(
                {
                    message: "Adhoc not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(adhocUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Adhoc error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const adhoc = await Adhoc.findByIdAndDelete(id)

        if (!adhoc) {
            return NextResponse.json(
                {
                    message: "Adhoc not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(adhoc)

    } catch (error) {
        return NextResponse.json({ message: "Adhoc error" }, { status: 400 })
    }
}
