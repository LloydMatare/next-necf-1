import React from "react";
import { ProgrammeCard } from "./programmeCard";
import { connectToDB } from "@/lib/connectToDB";
import TaskForce from "@/models/(programs)/taskforce";
import { ProgramModal } from "./programModal";
import ProgramCard from "@/components/ProgramCard";

export async function getTasks() {
  await connectToDB();
  const tasks = await TaskForce.find().limit(50);
  return tasks;
}

export default async function TaskForces() {
  const taskforces = await getTasks();
  return (
    <div className="col-span-1 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {taskforces.map((tf: any) => (
        <ProgramCard
          link={tf.link}
          key={tf.id}
          title={tf.title}
          date={tf.date}
          image={tf.image}
        />
      ))}
    </div>
  );
}
