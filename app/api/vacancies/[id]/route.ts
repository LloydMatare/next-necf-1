import { connectToDB } from "@/lib/connectToDB";
import Vacancy from "@/models/vacancy";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const vacancy = await Vacancy.findById(id)

        if (!vacancy) {
            return NextResponse.json(
                {
                    message: "Vacant not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(vacancy)

    } catch (error) {
        return NextResponse.json({ message: "Vacancy error" }, { status: 400 })
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
        const vacancyUpdated = await Vacancy.findByIdAndUpdate(id, body)

        if (!vacancyUpdated) {
            return NextResponse.json(
                {
                    message: "Vacant not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(vacancyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Vacancy error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const vacancy = await Vacancy.findByIdAndDelete(id)

        if (!vacancy) {
            return NextResponse.json(
                {
                    message: "Vacant not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(vacancy)

    } catch (error) {
        return NextResponse.json({ message: "Vacancy error" }, { status: 400 })
    }
}
