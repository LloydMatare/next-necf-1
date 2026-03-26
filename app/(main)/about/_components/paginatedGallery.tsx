"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { AboutModal } from "./aboutModal";

type GalleryItem = {
  _id?: string;
  id?: string;
  image: string;
  title: string;
};

function getPageButtons(current: number, total: number) {
  // Show up to 5 page buttons, centered around current when possible.
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(1, Math.min(current - 2, total - 4));
  return [start, start + 1, start + 2, start + 3, start + 4];
}

export default function PaginatedGallery({
  items,
  perPage = 12,
}: {
  items: GalleryItem[];
  perPage?: number;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  const clampedPage = Math.min(page, totalPages);
  const pageItems = useMemo(() => {
    const start = (clampedPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, clampedPage, perPage]);

  const buttons = getPageButtons(clampedPage, totalPages);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {pageItems.map((data) => (
          <AboutModal
            key={data._id ?? data.id ?? data.image}
            src={data.image}
            title={data.title}
          />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-background/60 p-3 ring-1 ring-border/60">
          <p className="text-xs text-muted-foreground">
            Page {clampedPage} of {totalPages}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-9 rounded-xl"
              disabled={clampedPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </Button>

            {buttons.map((n) => (
              <Button
                key={n}
                type="button"
                variant={n === clampedPage ? "default" : "outline"}
                className={
                  n === clampedPage
                    ? "h-9 rounded-xl bg-emerald-700 hover:bg-emerald-600"
                    : "h-9 rounded-xl"
                }
                onClick={() => setPage(n)}
              >
                {n}
              </Button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-9 rounded-xl"
              disabled={clampedPage === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

