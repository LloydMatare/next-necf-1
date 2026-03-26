export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Event from "@/models/(home)/event"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, date, image, link } = await req.json()
    await connectToDB()
    await Event.create({ title, date, image, link })
    return NextResponse.json({ message: "Event program Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const tasks = await Event.find()
    return NextResponse.json({ tasks })
}
