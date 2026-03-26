import { connectToDB } from "@/lib/connectToDB";
import TaskForce from "@/models/(programs)/taskforce";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const taskForce = await TaskForce.findById(id)

        if (!taskForce) {
            return NextResponse.json(
                {
                    message: "taskForce not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(taskForce)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
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
        const taskForceUpdated = await TaskForce.findByIdAndUpdate(id, body)

        if (!taskForceUpdated) {
            return NextResponse.json(
                {
                    message: "taskForce not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(taskForceUpdated)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const taskForce = await TaskForce.findByIdAndDelete(id)

        if (!taskForce) {
            return NextResponse.json(
                {
                    message: "taskForce not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(taskForce)

    } catch (error) {
        return NextResponse.json({ message: "taskForce error" }, { status: 400 })
    }
}
