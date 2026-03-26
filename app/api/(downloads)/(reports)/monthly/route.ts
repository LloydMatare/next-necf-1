export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Monthly from "@/models/(downloads)/monthly"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Monthly.create({ title, document, date })
    return NextResponse.json({ message: "monthly Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const monthly = await Monthly.find()
    return NextResponse.json({ monthly })
}
