import { connectToDB } from "@/lib/connectToDB";
import Program from "@/models/(programs)/program";

export default async function getPrograms() {
    await connectToDB()
    const programs = await Program.find().limit(50)
    return programs;
}