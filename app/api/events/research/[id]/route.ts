import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Research from "@/models/(downloads)/research";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const research = await Research.findById(id).lean();
        if (!research) {
            return NextResponse.json(
                {
                    message: "Research NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(research);
    } catch (error) {
        console.log("Failed to fetch Research", error);
        return NextResponse.json(
            {
                message: "Failed to fetch research",
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

        const updatedResearch = await Research.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedResearch) {
            return NextResponse.json(
                {
                    message: "Research NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedResearch);
    } catch (error) {
        console.log("Failed to update Research", error);
        return NextResponse.json(
            {
                message: "Failed to update research",
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
        await Research.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Research deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete research",
        }, {
            status: 500
        })
    }
}
