// app/(dashboard)/dashboard/_components/Header.tsx

"use client"; // Ensure this component is client-side

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { IoMdNotifications, IoMdMail } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { signOut, useSession } from "next-auth/react"; // Import useSession hook

const Header = () => {
  const { data: session } = useSession(); // Retrieve the session data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Dialog open state

  const getInitials = (name: string | undefined): string => {
    if (name) {
      const nameParts = name.split(" ");
      return nameParts
        .map((part) => part[0])
        .join("")
        .toUpperCase();
    }
    return "N/A"; // Default initials if name is not available
  };

  console.log("Session data:", session);

  const handleLogout = () => {
    console.log("User logged out!");
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side (Search input) */}
          <div className="flex justify-start items-center">
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label className="sr-only">Search</label>
              <Input placeholder="Search..." />
            </form>
          </div>

          {/* Right side (Icons and Avatar with dropdown) */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button>
              <IoMdNotifications
                className="text-gray-700 dark:text-gray-300"
                size={24}
              />
            </button>

            {/* Message Icon */}
            <button>
              <IoMdMail
                className="text-gray-700 dark:text-gray-300"
                size={24}
              />
            </button>

            {/* Avatar and Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-200 rounded-full p-2"
              >
                <span className="font-bold text-gray-700">
                  {
                    //@ts-ignore
                    session?.user?.name ? getInitials(session.user.name) : "??"
                  }
                </span>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
                  <div className="p-2">
                    <button className="block w-full text-left text-gray-700 dark:text-gray-300 p-2">
                      Profile Settings
                    </button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => setIsDialogOpen(true)} // Trigger open dialog
                          className="block w-full text-left text-red-600 dark:text-red-400 p-2"
                        >
                          Logout
                        </button>
                      </DialogTrigger>

                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Confirm Logout</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to log out?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button
                            onClick={() => setIsDialogOpen(false)} // Close dialog
                            className="bg-gray-500 text-white px-4 py-2 rounded-md"
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={handleLogout} // Logout action
                            className="bg-red-600 text-white px-4 py-2 rounded-md"
                          >
                            Logout
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
