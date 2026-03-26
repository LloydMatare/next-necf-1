import { connectToDB } from "@/lib/connectToDB";
import Quarterly from "@/models/(downloads)/quarterly";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const quarterly = await Quarterly.findById(id)

        if (!quarterly) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(quarterly)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
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
        const quarterlyUpdated = await Quarterly.findByIdAndUpdate(id, body)

        if (!quarterlyUpdated) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(quarterlyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const quarterly = await Quarterly.findByIdAndDelete(id)

        if (!quarterly) {
            return NextResponse.json(
                {
                    message: "quarterly not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(quarterly)

    } catch (error) {
        return NextResponse.json({ message: "quarterly error" }, { status: 400 })
    }
}
