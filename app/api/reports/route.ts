import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Report from "@/models/(downloads)/report";


export async function GET() {
    try {
        await connectToDB();
        const reports = await Report.find().sort({ createdAt: -1 }).lean();

        return NextResponse.json(reports, {
            status: 201
        })
    } catch (error) {
        console.log('Error while fetching', error);
        return NextResponse.json({
            message: "Failed to fetch member",
        }, {
            status: 500
        })
    }
}

export async function POST(request: Request) {
    try {
        await connectToDB();
        const { title, document, date } = await request.json()
        const data = { title, document, date }

        const reportData = await Report.create(data)

        return NextResponse.json(reportData, {
            status: 201
        })

    } catch (error) {
        console.log('Error while creating', error);
        return NextResponse.json({
            message: "Failed to create report",
        }, {
            status: 500
        })
    }
}
