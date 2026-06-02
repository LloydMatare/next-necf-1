"use client";

import CreateButton from "@/components/createButton";
import { useCallback, useEffect, useState } from "react";
import { PaginationControls } from "@/components/PaginationControls";
import Link from "next/link";

interface Vacancy {
  _id: string;
  name: string;
  jobType: string;
  dueDate: string;
}

function VacancyPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchVacancies = useCallback(async (p: number) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/vacancies?page=${p}&limit=20`);
      const data = await res.json();
      setVacancies(data.data || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVacancies(page);
  }, [page, fetchVacancies]);

  return (
    <div className="p-4">
      <div className="pb-4 flex justify-end">
        <CreateButton link={'vacancy'} />
      </div>
      {loading ? (
        <div className="p-8 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className={'flex flex-col gap-4'}>
            {vacancies.map((vacancy: any) => (
              <Link key={vacancy._id} href={`/dashboard/vacancy/${vacancy._id}`}>
                <div className="border p-4 shadow rounded">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <p className="">{vacancy.name}</p>
                    <p className="">{vacancy.jobType}</p>
                    <p className="">{vacancy.dueDate}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}

export default VacancyPage;
