import { connectToDB } from "@/lib/connectToDB";
import Section from "@/models/(home)/section";





import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const section = await Section.findById(id)

        if (!section) {
            return NextResponse.json(
                {
                    message: "main not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(section)

    } catch (error) {
        return NextResponse.json({ message: "main error" }, { status: 400 })
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
        const sectionUpdated = await Section.findByIdAndUpdate(id, body)

        if (!sectionUpdated) {
            return NextResponse.json(
                {
                    message: "main not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(sectionUpdated)

    } catch (error) {
        return NextResponse.json({ message: "main error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const section = await Section.findByIdAndDelete(id)

        if (!section) {
            return NextResponse.json(
                {
                    message: "main not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(section)

    } catch (error) {
        return NextResponse.json({ message: "section error" }, { status: 400 })
    }
}
