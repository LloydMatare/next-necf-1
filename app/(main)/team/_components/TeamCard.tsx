"use client";
import React from "react";
import { MdPerson } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface TeamCardProps {
  position: string;
  image?: string;
  title: string;
  desc?: string;
  link?: string;
  twitterLink?: string;
  gmail?: string;
}

function TeamCard({ position, image, title, link }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full max-w-xs overflow-hidden border border-gray-200">
      <div className="flex flex-col items-center p-6">
        {image && image.trim().length > 0 ? (
          <Image
            src={image}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full object-contain w-32 h-32 border-4 border-green-700"
          />
        ) : (
          <MdPerson size={120} color="green" className="mb-2" />
        )}
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold text-green-900">{title}</h2>
          <p className="text-sm text-gray-600">{position}</p>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <Link href={link ?? "#"}>
            <FaFacebook
              size={20}
              className="text-green-800 hover:text-green-600"
            />
          </Link>
          <Link href="#">
            <BsTwitterX
              size={20}
              className="text-green-800 hover:text-green-600"
            />
          </Link>
          <Link href="#">
            <FaLinkedin
              size={20}
              className="text-green-800 hover:text-green-600"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
