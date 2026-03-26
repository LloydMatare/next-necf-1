import { connectToDB } from "@/lib/connectToDB";
import Testimonial from "@/models/(home)/testimonial";

export default async function getTestimonials() {
  await connectToDB();
  return Testimonial.find().sort({ createdAt: 1 }).lean();
}

