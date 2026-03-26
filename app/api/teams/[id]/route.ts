import { connectToDB } from "@/lib/connectToDB";
import Team from "@/models/(team)/team";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const team = await Team.findById(id)

        if (!team) {
            return NextResponse.json(
                {
                    message: "Team not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(team)

    } catch (error) {
        return NextResponse.json({ message: "Team error" }, { status: 400 })
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
        const teamUpdated = await Team.findByIdAndUpdate(id, body)

        if (!teamUpdated) {
            return NextResponse.json(
                {
                    message: "Team not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(teamUpdated)

    } catch (error) {
        return NextResponse.json({ message: "Team error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const team = await Team.findByIdAndDelete(id)

        if (!team) {
            return NextResponse.json(
                {
                    message: "Team not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(team)

    } catch (error) {
        return NextResponse.json({ message: "Team error" }, { status: 400 })
    }
}
