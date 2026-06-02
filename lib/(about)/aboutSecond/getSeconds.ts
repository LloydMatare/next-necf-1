import { connectToDB } from "@/lib/connectToDB";
import AboutSecond from "@/models/(about)/aboutSecond";


export default async function getSeconds() {
    await connectToDB()
    const gallery = await AboutSecond.find().limit(50)
    return gallery;
}