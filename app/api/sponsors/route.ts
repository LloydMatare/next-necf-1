export const dynamic = "force-dynamic";
import { connectToDB } from "@/lib/connectToDB";
import Sponsor from "@/models/sponsors";
import { NextRequest, NextResponse } from "next/server";
import { getPaginationParams, buildPaginatedResult } from "@/lib/pagination";

export async function POST(req: NextRequest) {
  try {
    const { name, logo, tier, website } = await req.json();
    await connectToDB();
    
    if (!name || !logo) {
      return NextResponse.json(
        { message: "Name and logo are required" },
        { status: 400 }
      );
    }

    const newSponsor = await Sponsor.create({ name, logo, tier, website });
    return NextResponse.json(
      { message: "Sponsor Created", sponsor: newSponsor },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating sponsor:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const { page, limit } = getPaginationParams(req.nextUrl.searchParams);
    const skip = (page - 1) * limit;
    const [sponsors, total] = await Promise.all([
      Sponsor.find().sort({ tier: 1, name: 1 }).skip(skip).limit(limit),
      Sponsor.countDocuments(),
    ]);
    return NextResponse.json(buildPaginatedResult(sponsors, total, { page, limit }));
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
