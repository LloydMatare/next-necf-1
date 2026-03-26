import { connectToDB } from "@/lib/connectToDB";
import Program from "@/models/(programs)/program";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const program = await Program.findById(id)

        if (!program) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(program)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
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
        const programUpdated = await Program.findByIdAndUpdate(id, body)

        if (!programUpdated) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(programUpdated)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const program = await Program.findByIdAndDelete(id)

        if (!program) {
            return NextResponse.json(
                {
                    message: "program not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(program)

    } catch (error) {
        return NextResponse.json({ message: "program error" }, { status: 400 })
    }
}
