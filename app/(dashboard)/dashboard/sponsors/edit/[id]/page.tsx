"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

interface Sponsor {
  _id: string;
  name: string;
  logo: string;
  tier: string;
  website?: string;
}

interface FormValues {
  name: string;
  tier: string;
  website: string;
  logo?: FileList;
}

export default function EditSponsorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [sponsor, setSponsor] = useState<Sponsor | null>(null);
  const { 
    control,
    handleSubmit, 
    reset, 
    formState: { errors },
    register,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      tier: "Bronze",
      website: "",
    },
  });

  // Fetch sponsor data when component mounts
  useEffect(() => {
    async function fetchSponsor() {
      try {
        const response = await fetch(`/api/sponsors/${id}`);
        if (!response.ok) throw new Error("Failed to fetch sponsor");
        const data = await response.json();
        setSponsor(data);
        reset({
          name: data.name,
          tier: data.tier,
          website: data.website || "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load sponsor");
        router.push("/dashboard/sponsors");
      } finally {
        setLoading(false);
      }
    }

    fetchSponsor();
  }, [id, reset, router]);

  async function handleDelete() {
    if (!sponsor) return;
    
    if (!confirm("Are you sure you want to delete this sponsor?")) return;
    
    try {
      setLoading(true);
      const res = await fetch(`/api/sponsors/${sponsor._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Sponsor deleted successfully");
        router.push("/dashboard/sponsors");
      } else {
        throw new Error("Failed to delete sponsor");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete sponsor");
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "next_necf");
    formData.append("folder", "sponsors");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dxkna0tuc/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    return await response.json();
  }

  async function onSubmit(data: FormValues) {
    if (!sponsor) return;
    
    setLoading(true);
    let logoUrl = sponsor.logo;

    // Upload new logo if provided
    if (data.logo?.[0]) {
      try {
        const logoData = await handleFileUpload(data.logo[0]);
        logoUrl = logoData.secure_url;
      } catch (error) {
        console.error(error);
        toast.error("Failed to upload logo");
        setLoading(false);
        return;
      }
    }

    try {
      const sponsorData = { 
        name: data.name,
        tier: data.tier,
        website: data.website,
        logo: logoUrl 
      };

      const response = await fetch(`/api/sponsors/${sponsor._id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(sponsorData),
      });

      if (response.ok) {
        toast.success("Sponsor updated successfully");
        router.push("/dashboard/sponsors");
      } else {
        throw new Error("Failed to update sponsor");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update sponsor");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!sponsor) {
    return (
      <div className="p-8 text-center">
        <p>Sponsor not found</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Sponsor</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                id="name"
                {...field}
                placeholder="Sponsor name"
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="tier">Tier *</Label>
          <Controller
            name="tier"
            control={control}
            rules={{ required: "Tier is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Platinum">Platinum</SelectItem>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Silver">Silver</SelectItem>
                  <SelectItem value="Bronze">Bronze</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.tier && (
            <p className="text-red-500 text-sm mt-1">{errors.tier.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="website">Website</Label>
          <Controller
            name="website"
            control={control}
            render={({ field }) => (
              <Input
                id="website"
                type="url"
                {...field}
                placeholder="https://example.com"
              />
            )}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="h-32 w-48 relative bg-gray-100 rounded-md">
            <Image
              src={sponsor.logo}
              alt="Sponsor logo"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="logo">Logo</Label>
            <Input 
              id="logo" 
              type="file" 
              accept="image/*" 
              {...register("logo")}
            />
            <p className="text-sm text-gray-500 mt-1">
              Leave empty to keep current logo
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            onClick={handleDelete}
            variant="destructive"
            disabled={loading}
          >
            Delete
          </Button>
          <Button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>

      <Toaster position="top-right" />
    </div>
  );
}