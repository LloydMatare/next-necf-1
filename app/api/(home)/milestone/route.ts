export const dynamic = "force-dynamic"
import { connectToDB } from "@/lib/connectToDB"
import Hero from "@/models/(home)/hero"
import Milestone from "@/models/(home)/milestone"




import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { title, subtitle, number, description } = await req.json()
    await connectToDB()
    await Milestone.create({ title, subtitle, number, description })
    return NextResponse.json({ message: "milestone Created" }, { status: 201 })
}


export async function GET() {
    await connectToDB()
    const milestone = await Milestone.find()
    return NextResponse.json({ milestone })
}
