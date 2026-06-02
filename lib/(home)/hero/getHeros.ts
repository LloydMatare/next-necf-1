import { connectToDB } from "@/lib/connectToDB";
import Hero from "@/models/(home)/hero";

export default async function getHeros() {
    await connectToDB()
    const hero = await Hero.find().limit(50)
    return hero;
}