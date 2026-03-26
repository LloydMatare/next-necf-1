'use client'

import React, { useState } from "react";
import EventCard from "@/components/EventCard";
import Link from "next/link";
import ReactPaginate from "react-paginate";

interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  document: string;  // Add the document field
  link?: string;
}

interface EventPageProps {
  events: Event[];
}

const EventPage: React.FC<EventPageProps> = ({ events = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 4; // Number of events per page

  // If events is empty, handle gracefully
  if (!events || events.length === 0) {
    return (
      <div className="rounded-3xl bg-background/60 p-6 text-center ring-1 ring-border/60">
        <p className="text-sm text-muted-foreground">
          No events available at the moment.
        </p>
      </div>
    );
  }

  // Calculate the events to display based on the current page
  const offset = currentPage * eventsPerPage;
  const paginatedEvents = events.slice(offset, offset + eventsPerPage);

  // Handle page change
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div>
      <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
              EVENTS
            </p>
            <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
              Calendar of Events
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Browse upcoming and recent NECF events. Click through to view details and
            supporting documents.
          </p>
        </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {paginatedEvents.map((event: Event) => (
              <EventCard
                id={event.id}
                key={event.id}
                title={event.title}
                image={event.image}
                date={event.date}
                link={event.link}
                document={event.document}  // Pass the document field
              />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center mt-8">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(events.length / eventsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={"flex flex-wrap gap-2"}
              pageClassName={"px-4 py-2 rounded-md ring-1 ring-border/60 bg-background/60"}
              activeClassName={"!bg-emerald-700 !text-white"}
              previousClassName={"px-4 py-2 rounded-md ring-1 ring-border/60 bg-background/60"}
              nextClassName={"px-4 py-2 rounded-md ring-1 ring-border/60 bg-background/60"}
            />
          </div>

          {/* View more link */}
          <Link
            className="mt-8 inline-flex w-fit rounded-xl bg-emerald-700 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-600"
            href={"/programs"}
          >
            View more
          </Link>
      </section>
    </div>
  );
};

export default EventPage;
