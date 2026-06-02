import { connectToDB } from "@/lib/connectToDB";
import Service from "@/models/(home)/service";

export default async function getGallery() {
    await connectToDB()
    const service = await Service.find().limit(50)
    return service;
}