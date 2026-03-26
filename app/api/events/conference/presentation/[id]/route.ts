import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Presentation from "@/models/(downloads)/presentation";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const presentation = await Presentation.findById(id).lean();
        if (!presentation) {
            return NextResponse.json(
                {
                    message: "Presentation NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(presentation);
    } catch (error) {
        console.log("Failed to fetch Presentation", error);
        return NextResponse.json(
            {
                message: "Failed to fetch presentation",
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

        const updatedPresentation = await Presentation.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedPresentation) {
            return NextResponse.json(
                {
                    message: "Presentation NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedPresentation);
    } catch (error) {
        console.log("Failed to update Presentation", error);
        return NextResponse.json(
            {
                message: "Failed to update presentation",
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
        await Presentation.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Presentation deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete presentation",
        }, {
            status: 500
        })
    }
}
