import { NextRequest, NextResponse } from "next/server";
import Company from "@/models/company";
import { connectToDB } from "@/lib/connectToDB";
import Delegate from "@/models/delegates";
import { getPaginationParams, buildPaginatedResult } from "@/lib/pagination";

export async function POST(req: Request) {
  try {
    await connectToDB(); // Ensure MongoDB is connected

    const { companyName, contactPerson, email, tel, mobile, delegates } =
      await req.json();

    // Create a new company entry
    const company = await Company.create({
      name: companyName,
      contactPerson,
      email,
      tel,
      mobile,
    });

    // Create delegate entries linked to the company
    const delegateDocs = delegates.map((delegate: any) => ({
      ...delegate,
      company: company._id,
    }));
    await Delegate.insertMany(delegateDocs);

    return NextResponse.json(
      { success: true, message: "Registration successful!" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

// GET - Retrieve all delegates with their associated company
export async function GET(req: NextRequest) {
  try {
    await connectToDB();
    const { page, limit } = getPaginationParams(req.nextUrl.searchParams);
    const skip = (page - 1) * limit;
    const [delegates, total] = await Promise.all([
      Delegate.find().populate("company", "name").skip(skip).limit(limit),
      Delegate.countDocuments(),
    ]);

    return NextResponse.json(
      { success: true, ...buildPaginatedResult(delegates, total, { page, limit }) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
