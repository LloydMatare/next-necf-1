
import { connectToDB } from "@/lib/connectToDB";
import Annual from "@/models/(programs)/annual";

export default async function getAnnuals() {
  try {
    await connectToDB();
    const annuals = await Annual.find().sort({ date: -1 }).limit(50); // Sort by newest first
    return JSON.parse(JSON.stringify(annuals)); // Convert to plain objects
  } catch (error) {
    console.error("Error fetching annual programs:", error);
    return [];
  }
}