import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Monthly from "@/models/(downloads)/monthly";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const monthly = await Monthly.findById(id).lean();
        if (!monthly) {
            return NextResponse.json(
                {
                    message: "Monthly NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(monthly);
    } catch (error) {
        console.log("Failed to fetch Monthly", error);
        return NextResponse.json(
            {
                message: "Failed to fetch monthly",
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

        const updatedMonthly = await Monthly.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedMonthly) {
            return NextResponse.json(
                {
                    message: "Monthly NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedMonthly);
    } catch (error) {
        console.log("Failed to update Monthly", error);
        return NextResponse.json(
            {
                message: "Failed to update monthly",
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
        await Monthly.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Monthly deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete monthly",
        }, {
            status: 500
        })
    }
}
