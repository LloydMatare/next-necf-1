import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Conference from "@/models/(downloads)/conference";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const conference = await Conference.findById(id).lean();
        if (!conference) {
            return NextResponse.json(
                {
                    message: "Conference NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(conference);
    } catch (error) {
        console.log("Failed to fetch Conference", error);
        return NextResponse.json(
            {
                message: "Failed to fetch conference",
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

        const updatedConference = await Conference.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedConference) {
            return NextResponse.json(
                {
                    message: "Conference NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedConference);
    } catch (error) {
        console.log("Failed to update Conference", error);
        return NextResponse.json(
            {
                message: "Failed to update conference",
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
        await Conference.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Conference deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete conference",
        }, {
            status: 500
        })
    }
}
