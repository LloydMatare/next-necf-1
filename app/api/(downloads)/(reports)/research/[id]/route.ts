import { connectToDB } from "@/lib/connectToDB";
import Research from "@/models/(downloads)/research";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const research = await Research.findById(id)

        if (!research) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(research)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
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
        const researchUpdated = await Research.findByIdAndUpdate(id, body)

        if (!researchUpdated) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(researchUpdated)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const research = await Research.findByIdAndDelete(id)

        if (!research) {
            return NextResponse.json(
                {
                    message: "research not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(research)

    } catch (error) {
        return NextResponse.json({ message: "research error" }, { status: 400 })
    }
}
