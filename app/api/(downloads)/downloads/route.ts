export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Download from "@/models/(downloads)/download"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Download.create({ title, document, date })
    return NextResponse.json({ message: "download Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const download = await Download.find()
    return NextResponse.json({ download })
}
