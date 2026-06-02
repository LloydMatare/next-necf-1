import Event from "@/models/(home)/event";
import { connectToDB } from "../connectToDB";

export default async function getEvents() {
    await connectToDB()
    const events = await Event.find().limit(50)
    return events;
}