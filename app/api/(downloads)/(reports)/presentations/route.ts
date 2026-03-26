export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Presentation from "@/models/(downloads)/presentation"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Presentation.create({ title, document, date })
    return NextResponse.json({ message: "presentation Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const presentation = await Presentation.find()
    return NextResponse.json({ presentation })
}
