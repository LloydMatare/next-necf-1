import { connectToDB } from "@/lib/connectToDB";
import Section from "@/models/(home)/section";

export default async function getSection(id: string) {
  await connectToDB();
  if (!id) return null;
  return Section.findById(id).lean();
}

