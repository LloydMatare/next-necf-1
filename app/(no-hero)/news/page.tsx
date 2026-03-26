import React from "react";
import Image from "next/image";
import Link from "next/link";
import { connectToDB } from "@/lib/connectToDB";
import Hero from "@/models/(home)/hero";

type NewsItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  updatedAt?: string;
};

function buildNewsHref(item: NewsItem) {
  const title = item.title || "news";
  const path = `/news/${encodeURIComponent(title)}`;
  const qs = new URLSearchParams();
  if (item.image) qs.set("image", item.image);
  if (item.description) qs.set("description", item.description);
  if (item.updatedAt) qs.set("date", item.updatedAt);
  const query = qs.toString();
  return query ? `${path}?${query}` : path;
}

export default async function NewsPage() {
  await connectToDB();
  const raw = await Hero.find()
    .sort({ updatedAt: -1 })
    .select({ image: 1, title: 1, description: 1, updatedAt: 1 })
    .lean();

  const items: NewsItem[] = raw.map((h: any) => ({
    id: String(h._id),
    image: h.image ?? "",
    title: (h.title ?? "").trim(),
    description: h.description ?? "",
    updatedAt: h.updatedAt ? new Date(h.updatedAt).toISOString().slice(0, 10) : undefined,
  }));

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
              NEWS
            </p>
            <h1 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
              Updates and Stories
            </h1>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Featured announcements, highlights, and recent updates from NECF.
          </p>
        </div>
      </section>

      {items.length ? (
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-background/60 ring-1 ring-border/60 transition hover:bg-background/70"
            >
              <Link href={buildNewsHref(item)} className="block">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title || "News"}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900" />
                  )}
                </div>
                <div className="space-y-3 p-5">
                  {item.updatedAt ? (
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                      {item.updatedAt}
                    </p>
                  ) : null}
                  <h2 className="text-balance font-[var(--font-display)] text-2xl leading-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="text-sm font-medium text-emerald-700 group-hover:text-emerald-600">
                    Read more
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <div className="rounded-3xl bg-background/60 p-6 text-center ring-1 ring-border/60">
          <p className="text-sm text-muted-foreground">No news available yet.</p>
        </div>
      )}
    </div>
  );
}
