export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Core from "@/models/cores"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, subtitle, imageUrl, position, link } = await req.json()
    await connectToDB()
    await Core.create({ title, subtitle, imageUrl, position, link })
    return NextResponse.json({ message: "Core Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const core = await Core.find()
    return NextResponse.json({ core })
}
