export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Chair from "@/models/chairs"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, subtitle, imageUrl, position, link } = await req.json()
    await connectToDB()
    await Chair.create({ title, subtitle, imageUrl, position, link })
    return NextResponse.json({ message: "Chair Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const chair = await Chair.find()
    return NextResponse.json({ chair })
}
