export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Task from "@/models/(downloads)/task"


import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, document, date } = await req.json()
    await connectToDB()
    await Task.create({ title, document, date })
    return NextResponse.json({ message: "task Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const task = await Task.find()
    return NextResponse.json({ task })
}
