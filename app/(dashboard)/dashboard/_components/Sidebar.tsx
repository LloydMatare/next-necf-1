import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdHome,
  MdInfoOutline,
  MdOutlineContactPage,
  MdEventNote,
} from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { IoCloudDownload, IoFootsteps } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import MenuLink from "./Menulink";

const menuItems = [
  {
    title: "Content",
    list: [
      { title: "Home", path: "/dashboard/home", icon: <MdHome /> },
      { title: "About", path: "/dashboard/about", icon: <MdInfoOutline /> },
      { title: "Downloads", path: "/dashboard/downloads", icon: <IoCloudDownload /> },
      { title: "Programmes", path: "/dashboard/programs", icon: <MdEventNote /> },
      { title: "Team", path: "/dashboard/team", icon: <FaUsers /> },
      { title: "Contact", path: "/dashboard/contact", icon: <MdOutlineContactPage /> },
    ],
  },
  {
    title: "Management",
    list: [
      { title: "Delegates", path: "/dashboard/delegates", icon: <FaUsers /> },
      { title: "Vacancies", path: "/dashboard/vacancy", icon: <BsPersonFillAdd /> },
      { title: "Footer", path: "/dashboard/footer", icon: <IoFootsteps /> },
    ],
  },
];

function Sidebar() {
  return (
    <div className="sticky top-0 flex h-dvh flex-col bg-emerald-950 text-white">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
        <Image
          src="/logon.png"
          alt="NECF"
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl bg-white/90 object-contain p-1"
        />
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-wide">NECF</p>
          <p className="text-[11px] text-white/60">Admin Console</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
        {menuItems.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.list.map((item) => (
                <li key={item.title}>
                  <MenuLink data={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-white/60 transition hover:text-white"
        >
          <span className="inline-block size-1.5 rounded-full bg-emerald-400" />
          View live site
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
