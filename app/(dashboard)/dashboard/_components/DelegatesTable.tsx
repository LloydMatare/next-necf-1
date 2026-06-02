"use client";
import React, { useEffect, useState, useCallback } from "react";
import { DataTable } from "@/components/DataTable";

interface Delegate {
  id: string;
  _id: string;
  title: string;
  fullName: string;
  nationalID: string;
  email: string;
  mobile: string;
  company: { name?: string; _id?: string } | null; // Adjusted to be more flexible
}

const columns = [
  {
    accessorKey: "company", // Column for company name
    header: "Company Name",
    cell: ({ row }: any) => {
      const companyName = row.getValue("company")?.name;
      return <div>{companyName ? companyName : "N/A"}</div>; // Display 'N/A' if company.name is not available
    },
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }: any) => <div>{row.getValue("fullName")}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }: any) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "nationalID",
    header: "National ID",
    cell: ({ row }: any) => <div>{row.getValue("nationalID")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }: any) => (
      <div className="lowercase">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
    cell: ({ row }: any) => <div>{row.getValue("mobile")}</div>,
  },
];

const DelegatesTable: React.FC = () => {
  const [delegates, setDelegates] = useState<Delegate[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchDelegates = useCallback(async (p: number) => {
    const response = await fetch(`/api/delegates?page=${p}&limit=20`);
    const data = await response.json();
    if (data.success) {
      // Add 'id' field from '_id' and adjust the company data structure if needed
      const delegatesWithId = data.data.map((delegate: Delegate) => ({
        ...delegate,
        id: delegate._id, // Add 'id' field from '_id'
        company: delegate.company ? { name: delegate.company.name } : null, // Make sure company name exists
      }));
      setDelegates(delegatesWithId);
      setTotalPages(data.totalPages);
    }
  }, []);

  useEffect(() => {
    fetchDelegates(page);
  }, [page, fetchDelegates]);

  return (
    <DataTable
      data={delegates}
      columns={columns}
      filterPlaceholder="Filter delegates by name..."
      filter="fullName"
      onDelete={(id) => {
        console.log(`Delete delegate with id: ${id}`);
      }}
      totalPages={totalPages}
      page={page}
      onPageChange={setPage}
    />
  );
};

export default DelegatesTable;
