import { connectToDB } from "@/lib/connectToDB";
import Policy from "@/models/(downloads)/policy";


import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const policy = await Policy.findById(id)

        if (!policy) {
            return NextResponse.json(
                {
                    message: "policy not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(policy)

    } catch (error) {
        return NextResponse.json({ message: "policy error" }, { status: 400 })
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
        const policyUpdated = await Policy.findByIdAndUpdate(id, body)

        if (!policyUpdated) {
            return NextResponse.json(
                {
                    message: "policy not found"
                },
                { status: 404 }
            )
        }

        return NextResponse.json(policyUpdated)

    } catch (error) {
        return NextResponse.json({ message: "policy error" }, { status: 400 })
    }
}


export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
    await connectToDB()
    try {
        const { id } = await params
        const policy = await Policy.findByIdAndDelete(id)

        if (!policy) {
            return NextResponse.json(
                {
                    message: "policy not found"
                },
                { status: 400 }
            )
        }

        return NextResponse.json(policy)

    } catch (error) {
        return NextResponse.json({ message: "policy error" }, { status: 400 })
    }
}
