'use server'
import { connectToDB } from "@/lib/connectToDB";
import TaskForce from "@/models/(programs)/taskforce";

export async function getTasks() {
  try {
    await connectToDB();
    const tasks = await TaskForce.find().sort({ createdAt: -1 }).limit(50);
    return JSON.parse(JSON.stringify(tasks)); // Convert to plain objects
  } catch (error) {
    console.error("Error fetching task forces:", error);
    return [];
  }
}