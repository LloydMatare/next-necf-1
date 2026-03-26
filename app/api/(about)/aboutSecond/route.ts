export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import AboutSecond from "@/models/(about)/aboutSecond"



import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, title2, title3, title4, image } = await req.json()
    await connectToDB()
    await AboutSecond.create({ title, title2, title3, title4, image })
    return NextResponse.json({ message: "about Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const about = await AboutSecond.find()
    return NextResponse.json({ about })
}
