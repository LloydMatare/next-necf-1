export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Quarterly from "@/models/(downloads)/quarterly"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Quarterly.create({ title, document, date })
    return NextResponse.json({ message: "quarterly Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const quarterly = await Quarterly.find()
    return NextResponse.json({ quarterly })
}
