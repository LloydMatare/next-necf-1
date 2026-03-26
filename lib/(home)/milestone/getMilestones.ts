import { connectToDB } from "@/lib/connectToDB";
import Milestone from "@/models/(home)/milestone";

export default async function getMilestones() {
  await connectToDB();
  // Keep ordering stable for UI that indexes into the array.
  return Milestone.find().sort({ createdAt: 1 }).lean();
}

