import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Report from "@/models/(downloads)/report";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectToDB();
        const { id } = await params;
        const report = await Report.findById(id).lean();
        if (!report) {
            return NextResponse.json(
                {
                    message: "Report NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(report);
    } catch (error) {
        console.log("Failed to fetch Contact", error);
        return NextResponse.json(
            {
                message: "Failed to fetch contact",
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

        const updatedreport = await Report.findByIdAndUpdate(id, data, { new: true }).lean();
        if (!updatedreport) {
            return NextResponse.json(
                {
                    message: "Contact NOT FOUND",
                },
                {
                    status: 404,
                }
            );
        }
        return NextResponse.json(updatedreport);
    } catch (error) {
        console.log("Failed to update report", error);
        return NextResponse.json(
            {
                message: "Failed to update report",
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
        await Report.findByIdAndDelete(id);
        return NextResponse.json({
            message: "report deleted successfully"
        })
    } catch (error) {
        console.log('Error while deleting', error);
        return NextResponse.json({
            message: "Failed to delete member",
        }, {
            status: 500
        })
    }
}
