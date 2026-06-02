"use client";

import { useEffect, useState, useCallback } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";

interface Message {
  id: string; // Added ID field
  _id: string;
  name: string;
  email: string;
  phone: string;
  eventTitle: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMessages = useCallback(async (p: number) => {
    const res = await fetch(`/api/messages?page=${p}&limit=20`);
    const data = await res.json();

    // Ensure that the messages returned have `id` instead of `_id`
    const messagesWithId = data.data.map((message: any) => ({
      ...message,
      id: message._id, // Map _id to id
    }));

    setMessages(messagesWithId);
    setTotalPages(data.totalPages);
  }, []);

  useEffect(() => {
    fetchMessages(page);
  }, [page, fetchMessages]);

  const handleDelete = async (id: string) => {
    if (!id) return; // Prevent undefined ids
    await fetch(`/api/messages/${id}`, { method: "DELETE" });

    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const columns: ColumnDef<Message>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => <div>{row.getValue("phone")}</div>,
    },
    {
      accessorKey: "eventTitle",
      header: "Event",
      cell: ({ row }) => <div>{row.getValue("eventTitle")}</div>,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Event Registrations</h1>
      <DataTable
        columns={columns}
        data={messages}
        filterPlaceholder="Filter emails..."
        filter="event"
        onDelete={handleDelete}
        totalPages={totalPages}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
}
