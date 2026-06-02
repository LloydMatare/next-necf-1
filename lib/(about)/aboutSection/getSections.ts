import { connectToDB } from "@/lib/connectToDB";
import AboutSecond from "@/models/(about)/aboutSecond";
import AboutSection from "@/models/(about)/aboutSection";


export default async function getSections() {
    await connectToDB()
    const gallery = await AboutSection.find().limit(50)
    return gallery;
}