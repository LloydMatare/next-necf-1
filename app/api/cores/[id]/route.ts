import { connectToDB } from "@/lib/connectToDB";
import Core from "@/models/cores";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const core = await Core.findById(id)

        if (!core) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(core)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
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
        const coreUpdated = await Core.findByIdAndUpdate(id, body)

        if (!coreUpdated) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(coreUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const core = await Core.findByIdAndDelete(id)

        if (!core) {
            return NextResponse.json(
                {
                    message: "Core not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(core)

    } catch (error) {
        return NextResponse.json({ message: "Core error" }, { status: 400 })
    }
}
