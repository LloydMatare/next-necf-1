import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Quarterly from "@/models/(downloads)/quarterly";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const quarterly = await Quarterly.findById(id).lean();
        if (!quarterly) {
            return NextResponse.json(
                {
                    message: "Quarterly NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(quarterly);
    } catch (error) {
        console.log("Failed to fetch Quarterly", error);
        return NextResponse.json(
            {
                message: "Failed to fetch quarterly",
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

        const updatedQuarterly = await Quarterly.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedQuarterly) {
            return NextResponse.json(
                {
                    message: "Quarterly NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedQuarterly);
    } catch (error) {
        console.log("Failed to update Quarterly", error);
        return NextResponse.json(
            {
                message: "Failed to update quarterly",
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
        await Quarterly.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Quarterly deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete quarterly",
        }, {
            status: 500
        })
    }
}
