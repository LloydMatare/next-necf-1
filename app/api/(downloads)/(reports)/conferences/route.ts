export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Conference from "@/models/(downloads)/conference"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, imageUrl, date } = await req.json()
    await connectToDB()
    await Conference.create({ title, document, date })
    return NextResponse.json({ message: "Conference Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const conference = await Conference.find()
    return NextResponse.json({ conference })
}
