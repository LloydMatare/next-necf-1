// app/(main)/EventPageServer.tsx
import React from "react";
import { connectToDB } from "@/lib/connectToDB";
import MainEvent from "@/models/(home)/event";
import EventPage from "./event";


export default async function EventPageServer() {
  // Fetch events on the server
  await connectToDB();
  const events = await MainEvent.find().select({ title: 1, image: 1, date: 1, document: 1, link: 1 }).lean();

  console.log("Main - Events : ",events);
  
  const plainEvents = events.map((e: any) => ({
    id: String(e._id),
    title: e.title ?? "",
    image: e.image ?? "",
    date: e.date ?? "",
    document: e.document ?? "",
    link: e.link ?? "",
  }));

  return <EventPage events={plainEvents} />;
}
