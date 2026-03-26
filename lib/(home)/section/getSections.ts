import { connectToDB } from "@/lib/connectToDB";
import Section from "@/models/(home)/section";

export default async function getSections() {
  await connectToDB();
  return Section.find().sort({ createdAt: 1 }).lean();
}

