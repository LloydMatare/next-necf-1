'use client';

import React from "react";
import { SiSecurityscorecard } from "react-icons/si";
import { MdOutlineManageAccounts, MdAllInclusive } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { RxTransparencyGrid } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";

type TopSectionItem = {
  icon: React.ReactNode;
  label: string;
};

type TopSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  items?: TopSectionItem[];
};

function TopSection({
  eyebrow = "PRINCIPLES",
  title = "Core Values",
  description = "The standards we hold ourselves to in every engagement and programme.",
  icon = <SiSecurityscorecard size={30} color="white" />,
  items = [
    { icon: <IoIosPeople size={20} color="white" />, label: "Teamwork" },
    {
      icon: <MdOutlineManageAccounts size={20} color="white" />,
      label: "Accountability",
    },
    { icon: <MdAllInclusive size={20} color="white" />, label: "Inclusivity" },
    {
      icon: <RxTransparencyGrid size={20} color="white" />,
      label: "Transparency",
    },
    {
      icon: <MdOutlineIntegrationInstructions size={20} color="white" />,
      label: "Integrity",
    },
    { icon: <MdAllInclusive size={20} color="white" />, label: "Innovation" },
  ],
}: TopSectionProps) {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12">
      <div className="grid gap-6 rounded-3xl bg-emerald-950 p-6 text-white ring-1 ring-emerald-900/40 md:grid-cols-12 md:items-center md:p-8">
        <div className="md:col-span-4">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
              {icon}
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/70">
                {eyebrow}
              </p>
              <h2 className="mt-1 font-[var(--font-display)] text-2xl leading-tight">
                {title}
              </h2>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/75">
            {description}
          </p>
        </div>

        <div className="grid gap-3 md:col-span-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSection;
