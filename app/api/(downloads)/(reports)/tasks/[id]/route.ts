import { connectToDB } from "@/lib/connectToDB";
import Task from "@/models/(downloads)/task";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const task = await Task.findById(id)

        if (!task) {
            return NextResponse.json(
                {
                    message: "task not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(task)

    } catch (error) {
        return NextResponse.json({ message: "task error" }, { status: 400 })
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
        const taskUpdated = await Task.findByIdAndUpdate(id, body)

        if (!taskUpdated) {
            return NextResponse.json(
                {
                    message: "task not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(taskUpdated)

    } catch (error) {
        return NextResponse.json({ message: "task error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const task = await Task.findByIdAndDelete(id)

        if (!task) {
            return NextResponse.json(
                {
                    message: "task not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(task)

    } catch (error) {
        return NextResponse.json({ message: "task error" }, { status: 400 })
    }
}
