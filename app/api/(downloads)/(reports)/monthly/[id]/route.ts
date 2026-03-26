import { connectToDB } from "@/lib/connectToDB";
import Monthly from "@/models/(downloads)/monthly";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const monthly = await Monthly.findById(id)

        if (!monthly) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(monthly)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
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
        const monthlyUpdated = await Monthly.findByIdAndUpdate(id, body)

        if (!monthlyUpdated) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(monthlyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const monthly = await Monthly.findByIdAndDelete(id)

        if (!monthly) {
            return NextResponse.json(
                {
                    message: "monthly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(monthly)

    } catch (error) {
        return NextResponse.json({ message: "monthly error" }, { status: 400 })
    }
}
