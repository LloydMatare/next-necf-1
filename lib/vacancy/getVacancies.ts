import Vacancy from "@/models/vacancy";
import { connectToDB } from "../connectToDB";

export default async function getVacancies(page = 1, limit = 100) {
  await connectToDB()
  const skip = (page - 1) * limit;
  const [vacancies, total] = await Promise.all([
    Vacancy.find().skip(skip).limit(limit),
    Vacancy.countDocuments(),
  ]);
  return { vacancies, total, totalPages: Math.ceil(total / limit) };
}
