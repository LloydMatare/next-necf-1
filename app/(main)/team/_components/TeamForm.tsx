import React from "react";
import TeamCard from "./TeamCard";
import getTeams from "@/lib/getTeams";
import getChairs from "@/lib/team/getChairs";
import getCores from "@/lib/team/getCores";

async function TeamForm() {
  const teams = await getTeams();
  const chairs = await getChairs();
  const cores = await getCores();

  const sections = [
    { title: "NECF National Co-Chairpersons", members: chairs },
    { title: "NECF Steering Committee Co-Chairpersons", members: cores },
    { title: "NECF Secretariat", members: teams },
  ];

  function pickMembers<T>(arr: T[], indices: number[]) {
    return indices.map((i) => arr?.[i]).filter(Boolean) as T[];
  }

  function chunk<T>(arr: T[], size: number) {
    const out: T[][] = [];
    for (let i = 0; i < (arr?.length || 0); i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  function pyramidRows<T>(arr: T[], maxPerRow = 4) {
    const items = arr || [];
    if (items.length === 0) return [];
    if (items.length <= maxPerRow) return [items];

    const out: T[][] = [];
    let i = 0;
    let rowSize = 1;
    while (i < items.length) {
      const take = Math.min(rowSize, maxPerRow, items.length - i);
      out.push(items.slice(i, i + take));
      i += take;
      rowSize = Math.min(rowSize + 1, maxPerRow);
    }
    return out;
  }

  return (
    <div className="space-y-14">
      <section className="overflow-hidden rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
              PEOPLE
            </p>
            <h1 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
              NECF Team
            </h1>
          </div>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Meet the leadership and secretariat supporting NECF&apos;s work across
            Zimbabwe.
          </p>
        </div>
      </section>

      {sections.map(({ title, members }, idx) => {
        const isSecretariat = title === "NECF Secretariat";

        const secretariatGroups =
          isSecretariat && Array.isArray(members) && members.length >= 23
            ? [
                pickMembers(members, [0]),
                pickMembers(members, [1, 2]),
                pickMembers(members, [5, 4, 3]),
                pickMembers(members, [6]),
                pickMembers(members, [7, 8, 9, 10]),
                pickMembers(members, [11, 12, 13, 14]),
                pickMembers(members, [15, 16, 17, 18, 19]),
                pickMembers(members, [20, 21, 22]),
              ]
            : [];

        const groups =
          isSecretariat && secretariatGroups.length > 0
            ? secretariatGroups
            : pyramidRows(members || [], 4);

        return (
          <section
            key={idx}
            className="overflow-hidden rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                  {isSecretariat ? "SECRETARIAT" : "LEADERSHIP"}
                </p>
                <h2 className="mt-2 text-balance font-[var(--font-display)] text-2xl text-foreground md:text-3xl">
                  {title}
                </h2>
              </div>
              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                {isSecretariat
                  ? "The operational team supporting NECF programmes, communications, and coordination."
                  : "Senior leadership supporting NECF strategy and national dialogue."}
              </p>
            </div>

            <div className="mt-8 space-y-8">
              {groups.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className="flex flex-wrap items-stretch justify-center gap-4"
                >
                  {group.map((person: any) => (
                    <TeamCard
                      key={person?._id?.toString?.() ?? person?._id}
                      title={person?.title}
                      subtitle={person?.subtitle}
                      position={person?.position}
                      image={person?.image}
                      link={person?.link}
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default TeamForm;
