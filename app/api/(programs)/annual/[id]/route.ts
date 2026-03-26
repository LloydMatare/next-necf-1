import { connectToDB } from "@/lib/connectToDB";
import Annual from "@/models/(programs)/annual";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const annual = await Annual.findById(id)

        if (!annual) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(annual)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
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
        const annualUpdated = await Annual.findByIdAndUpdate(id, body)

        if (!annualUpdated) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(annualUpdated)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const annual = await Annual.findByIdAndDelete(id)

        if (!annual) {
            return NextResponse.json(
                {
                    message: "annual not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(annual)

    } catch (error) {
        return NextResponse.json({ message: "annual error" }, { status: 400 })
    }
}
