import React from "react";
import { ProgrammeCard } from "./programmeCard";
import { connectToDB } from "@/lib/connectToDB";
import Adhoc from "@/models/(programs)/adhoc";
import { ProgramModal } from "./programModal";
import ProgramCard from "@/components/ProgramCard";

export async function getAdocs() {
  await connectToDB();
  const adhoc = await Adhoc.find().limit(50);
  return adhoc;
}

export default async function AdhocList() {
  const adhocs = await getAdocs();
  return (
    <div className="col-span-1 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {adhocs.map((adhoc: any) => (
        <ProgramCard
          key={adhoc.id}
          title={adhoc.title}
          date={adhoc.date}
          image={adhoc.image}
          link={adhoc.link}
        />
      ))}
    </div>
  );
}
