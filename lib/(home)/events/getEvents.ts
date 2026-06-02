import { connectToDB } from "@/lib/connectToDB";
import MainEvent from "@/models/(home)/event";

export default async function getEvents() {
    await connectToDB()
    const event = await MainEvent.find().limit(50)
    return event;
}