"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PaginationControls } from "@/components/PaginationControls";

interface Sponsor {
  _id: string;
  name: string;
  logo: string;
  tier: string;
  website?: string;
}

export default function SponsorsList() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const fetchSponsors = useCallback(async (p: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/sponsors?page=${p}&limit=20`);
      const data = await response.json();
      setSponsors(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Failed to fetch sponsors:", error);
      toast.error("Failed to load sponsors");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSponsors(page);
  }, [page, fetchSponsors]);

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this sponsor?")) return;

    try {
      const response = await fetch(`/api/sponsors/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Sponsor deleted successfully");
        setSponsors(sponsors.filter((sponsor) => sponsor._id !== id));
      } else {
        throw new Error("Failed to delete sponsor");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete sponsor");
    }
  }

  if (loading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sponsors</h1>
        <Link href="/dashboard/sponsors/add">
          <Button className="bg-green-700 hover:bg-green-500">Add New Sponsor</Button>
        </Link>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Website</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sponsors.map((sponsor) => (
              <TableRow key={sponsor._id}>
                <TableCell>
                  <div className="h-12 w-24 relative">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain h-full w-full"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{sponsor.name}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      sponsor.tier === "Platinum"
                        ? "bg-gray-200 text-gray-800"
                        : sponsor.tier === "Gold"
                        ? "bg-yellow-100 text-yellow-800"
                        : sponsor.tier === "Silver"
                        ? "bg-gray-300 text-gray-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {sponsor.tier}
                  </span>
                </TableCell>
                <TableCell>
                  {sponsor.website ? (
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit
                    </a>
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        router.push(`/dashboard/sponsors/edit/${sponsor._id}`)
                      }
                    >
                      <PencilIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(sponsor._id)}
                    >
                      <Trash2Icon className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PaginationControls page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}