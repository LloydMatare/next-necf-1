import { connectToDB } from "@/lib/connectToDB";
import Service from "@/models/(home)/service";

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const service = await Service.findById(id)

        if (!service) {
            return NextResponse.json(
                {
                    message: "service not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(service)

    } catch (error) {
        return NextResponse.json({ message: "service error" }, { status: 400 })
    }
}


export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    const body = await request.json()
    await connectToDB()
    try {
        const { id } = await params
        const serviceUpdated = await Service.findByIdAndUpdate(id, body)

        if (!serviceUpdated) {
            return NextResponse.json(
                {
                    message: "service not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(serviceUpdated)

    } catch (error) {
        return NextResponse.json({ message: "service error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const service = await Service.findByIdAndDelete(id)

        if (!service) {
            return NextResponse.json(
                {
                    message: "service not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(service)

    } catch (error) {
        return NextResponse.json({ message: "service error" }, { status: 400 })
    }
}
