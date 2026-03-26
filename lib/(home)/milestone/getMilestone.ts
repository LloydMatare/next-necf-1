import { connectToDB } from "@/lib/connectToDB";
import Milestone from "@/models/(home)/milestone";

export default async function getMilestone(id: string) {
  await connectToDB();
  if (!id) return null;
  return Milestone.findById(id).lean();
}

