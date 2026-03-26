import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Policy from "@/models/(downloads)/policy";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const policy = await Policy.findById(id).lean();
        if (!policy) {
            return NextResponse.json(
                {
                    message: "Policy NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(policy);
    } catch (error) {
        console.log("Failed to fetch Policy", error);
        return NextResponse.json(
            {
                message: "Failed to fetch policy",
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

        const updatedPolicy = await Policy.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedPolicy) {
            return NextResponse.json(
                {
                    message: "Policy NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedPolicy);
    } catch (error) {
        console.log("Failed to update Policy", error);
        return NextResponse.json(
            {
                message: "Failed to update policy",
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
        await Policy.findByIdAndDelete(id);
        return NextResponse.json({
            message: "Policy deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete policy",
        }, {
            status: 500
        })
    }
}
