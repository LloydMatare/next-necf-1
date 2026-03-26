'use client';

import React from "react";
import { usePathname } from "next/navigation";
import TopSection from "./topsection";
import { SiSecurityscorecard } from "react-icons/si";
import {
  MdAllInclusive,
  MdOutlineIntegrationInstructions,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { RxTransparencyGrid } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

export default function HeroTopSection() {
  const pathname = usePathname() || "/";

  if (pathname.startsWith("/about")) {
    return (
      <TopSection
        eyebrow="ABOUT"
        title="Purpose and Focus"
        description="What NECF exists to do and how we work with partners to deliver outcomes."
        icon={<SiSecurityscorecard size={30} color="white" />}
        items={[
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Dialogue" },
          { icon: <MdOutlineManageAccounts size={20} color="white" />, label: "Consensus" },
          { icon: <MdOutlineIntegrationInstructions size={20} color="white" />, label: "Implementation" },
          { icon: <IoIosPeople size={20} color="white" />, label: "Stakeholders" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Inclusion" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Trust" },
        ]}
      />
    );
  }

  if (pathname.startsWith("/programs")) {
    return (
      <TopSection
        eyebrow="PROGRAMMES"
        title="Areas of Work"
        description="Explore our flagship programmes, dialogues, and sector-focused initiatives."
        icon={<MdOutlineIntegrationInstructions size={30} color="white" />}
        items={[
          { icon: <IoIosPeople size={20} color="white" />, label: "Convening" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Research" },
          { icon: <MdOutlineManageAccounts size={20} color="white" />, label: "Policy" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Collaboration" },
          { icon: <MdOutlineIntegrationInstructions size={20} color="white" />, label: "Delivery" },
          { icon: <SiSecurityscorecard size={20} color="white" />, label: "Impact" },
        ]}
      />
    );
  }

  if (pathname.startsWith("/downloads")) {
    return (
      <TopSection
        eyebrow="RESOURCES"
        title="Downloads and Reports"
        description="Access publications, reports, and key documents."
        icon={<IoCloudDownloadOutline size={30} color="white" />}
        items={[
          { icon: <HiOutlineNewspaper size={20} color="white" />, label: "Reports" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Briefs" },
          { icon: <MdOutlineIntegrationInstructions size={20} color="white" />, label: "Documents" },
          { icon: <SiSecurityscorecard size={20} color="white" />, label: "Insights" },
          { icon: <MdOutlineManageAccounts size={20} color="white" />, label: "Guides" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Access" },
        ]}
      />
    );
  }

  if (pathname.startsWith("/team")) {
    return (
      <TopSection
        eyebrow="PEOPLE"
        title="Our Team"
        description="Leadership, secretariat, and the people behind the work."
        icon={<BsPeople size={30} color="white" />}
        items={[
          { icon: <IoIosPeople size={20} color="white" />, label: "Leadership" },
          { icon: <MdOutlineManageAccounts size={20} color="white" />, label: "Secretariat" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Partners" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Governance" },
          { icon: <MdOutlineIntegrationInstructions size={20} color="white" />, label: "Delivery" },
          { icon: <SiSecurityscorecard size={20} color="white" />, label: "Values" },
        ]}
      />
    );
  }

  if (pathname.startsWith("/vacancy")) {
    return (
      <TopSection
        eyebrow="OPPORTUNITIES"
        title="Vacancies"
        description="Open roles and opportunities to work with NECF."
        icon={<BiBriefcaseAlt2 size={30} color="white" />}
        items={[
          { icon: <BiBriefcaseAlt2 size={20} color="white" />, label: "Roles" },
          { icon: <MdOutlineManageAccounts size={20} color="white" />, label: "Criteria" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Process" },
          { icon: <IoIosPeople size={20} color="white" />, label: "Teams" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Equity" },
          { icon: <SiSecurityscorecard size={20} color="white" />, label: "Integrity" },
        ]}
      />
    );
  }

  if (pathname.startsWith("/contact")) {
    return (
      <TopSection
        eyebrow="CONTACT"
        title="Get In Touch"
        description="Reach out to collaborate, partner, or learn more about our programmes."
        icon={<FiMail size={30} color="white" />}
        items={[
          { icon: <FiMail size={20} color="white" />, label: "Email" },
          { icon: <IoIosPeople size={20} color="white" />, label: "Meetings" },
          { icon: <MdOutlineManageAccounts size={20} color="white" />, label: "Support" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Updates" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Partners" },
          { icon: <SiSecurityscorecard size={20} color="white" />, label: "Trust" },
        ]}
      />
    );
  }

  if (pathname.startsWith("/news")) {
    return (
      <TopSection
        eyebrow="NEWS"
        title="Updates and Stories"
        description="Featured announcements and highlights from across our work."
        icon={<HiOutlineNewspaper size={30} color="white" />}
        items={[
          { icon: <HiOutlineNewspaper size={20} color="white" />, label: "Featured" },
          { icon: <RxTransparencyGrid size={20} color="white" />, label: "Highlights" },
          { icon: <MdOutlineIntegrationInstructions size={20} color="white" />, label: "Briefs" },
          { icon: <IoIosPeople size={20} color="white" />, label: "Voices" },
          { icon: <MdAllInclusive size={20} color="white" />, label: "Community" },
          { icon: <SiSecurityscorecard size={20} color="white" />, label: "Impact" },
        ]}
      />
    );
  }

  return <TopSection />;
}

