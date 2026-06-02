import { connectToDB } from "@/lib/connectToDB";
import Section from "@/models/(home)/section";
import Service from "@/models/(home)/service";

export default async function getServices() {
    await connectToDB()
    const service = await Service.find().limit(50)
    return service;
}