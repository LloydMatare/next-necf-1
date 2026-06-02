export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Vacancy from "@/models/vacancy"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { name, jobType, dueDate } = await req.json()
    await connectToDB()
    await Vacancy.create({ name, jobType, dueDate })
    return NextResponse.json({ message: "Vacancy Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const vacancy = await Vacancy.find().limit(50)
    return NextResponse.json({ vacancy })
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    await Vacancy.findByIdAndDelete(id)
    return NextResponse.json({ message: "Vacancy Deleted" }, { status: 201 })
}