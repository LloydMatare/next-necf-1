export const dynamic = "force-dynamic"

import { connectToDB } from "@/lib/connectToDB"
import Vacancy from "@/models/vacancy"
import { getPaginationParams, buildPaginatedResult } from "@/lib/pagination"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { name, jobType, dueDate } = await req.json()
    await connectToDB()
    await Vacancy.create({ name, jobType, dueDate })
    return NextResponse.json({ message: "Vacancy Created" }, { status: 201 })
}


export async function GET(req: NextRequest) {
    await connectToDB()
    const { page, limit } = getPaginationParams(req.nextUrl.searchParams);
    const skip = (page - 1) * limit;
    const [vacancy, total] = await Promise.all([
      Vacancy.find().skip(skip).limit(limit),
      Vacancy.countDocuments(),
    ]);
    return NextResponse.json(buildPaginatedResult(vacancy, total, { page, limit }));
}

export async function DELETE(req: NextRequest) {
    const id = req.nextUrl.searchParams.get("id")
    await connectToDB()
    await Vacancy.findByIdAndDelete(id)
    return NextResponse.json({ message: "Vacancy Deleted" }, { status: 201 })
}