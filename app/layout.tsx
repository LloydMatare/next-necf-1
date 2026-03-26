export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "NECF",
  description: "NECF",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans">
        <SessionWrapper>{children}</SessionWrapper>
        <Toaster />
      </body>
    </html>
  );
}
