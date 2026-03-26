export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import MainEvent from "@/models/(home)/event"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { title, image, date, document } = await req.json()
        await connectToDB()
        
        // Validate required fields
        if (!title || !date) {
            return NextResponse.json(
                { message: "Title and date are required" },
                { status: 400 }
            )
        }

        const newEvent = await MainEvent.create({ title, image, date, document })
        return NextResponse.json(
            { message: "Event Created", event: newEvent },
            { status: 201 }
        )
    } catch (error) {
        console.error("Error creating event:", error)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}


export async function GET() {
    try {
        await connectToDB()
        const events = await MainEvent.find().sort({ date: -1 }) // Sort by newest first
        return NextResponse.json({ events })
    } catch (error) {
        console.error("Error fetching events:", error)
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        )
    }
}
