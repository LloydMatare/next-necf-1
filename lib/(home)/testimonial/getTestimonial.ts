import { connectToDB } from "@/lib/connectToDB";
import Testimonial from "@/models/(home)/testimonial";

export default async function getTestimonial(id: string) {
  await connectToDB();
  if (!id) return null;
  return Testimonial.findById(id).lean();
}

