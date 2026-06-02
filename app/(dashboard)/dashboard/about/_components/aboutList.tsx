import React from "react";
import { connectToDB } from "@/lib/connectToDB";
import Link from "next/link";
import Image from "next/image";
import About from "@/models/(about)/about";
import { MdEditDocument } from "react-icons/md";
import AboutSection from "@/models/(about)/aboutSection";

export async function loadAbout() {
  await connectToDB();
  const abouts = await AboutSection.find().limit(50);
  return abouts;
}

export const TopCard = ({ about }: any) => {
  return (
    <div className="border shadow p-4">
      <Link
        href={`/dashboard/about/section/${about.id}`}
        className="flex flex-col items-start gap-2 w-full"
      >
        <div className="flex gap-2">
          <Image
            src={`${about.image}`}
            alt={about.image}
            width={400}
            height={400}
            className="border rounded w-full"
          />
        </div>
        <div className="text-sm text-slate-600 space-y-6">
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-green-500"} />
              <p className="">{about.title}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-green-500"} />
              <p className="">{about.title2}</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-green-500"} />
              <p className="">{about.title3}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-green-500"} />
              <p className="">{about.title4}</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-green-500"} />
              <p className="">{about.title5}</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <MdEditDocument className={"text-2xl text-green-500"} />
              <p className="">{about.title6}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

//@ts-ignore
async function AboutList() {
  const abouts = await loadAbout();
  return (
    <div className="flex flex-col gap-4">
      {abouts.map((about: any) => {
        return <TopCard key={about.id} about={about} />;
      })}
    </div>
  );
}

export default AboutList;
