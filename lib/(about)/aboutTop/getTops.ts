import { connectToDB } from "@/lib/connectToDB";
import AboutTop from "@/models/(about)/aboutTop";

export default async function getTops() {
    await connectToDB()
    const gallery = await AboutTop.find().limit(50)
    return gallery;
}