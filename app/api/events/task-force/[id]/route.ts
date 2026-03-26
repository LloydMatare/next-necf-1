import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Task from "@/models/(downloads)/task";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const task = await Task.findById(id).lean();
        if (!task) {
            return NextResponse.json(
                {
                    message: "Task NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(task);
    } catch (error) {
        console.log("Failed to fetch Task", error);
        return NextResponse.json(
            {
                message: "Failed to fetch task",
            },
            {
                status: 500,
            }
        );
    }
}


export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const { title, document, date } = await request.json()
        const data = { title, document, date }

        const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedTask) {
            return NextResponse.json(
                {
                    message: "Task NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedTask);
    } catch (error) {
        console.log("Failed to update Task", error);
        return NextResponse.json(
            {
                message: "Failed to update task",
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        await Task.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Task deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete task",
        }, {
            status: 500
        })
    }
}
