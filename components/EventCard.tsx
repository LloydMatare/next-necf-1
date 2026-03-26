"use client";
import { useState } from "react";
import RegisterDialog from "./RegisterDialog";
import { MdTimer } from "react-icons/md";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface EventProps {
  id: string;
  image: string;
  title: string;
  date: string;
  link?: string;
  document?: string;
}

const EventCard = ({ id, image, title, date, link, document: docUrl }: EventProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Format date for display
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleDownload = async () => {
    if (!docUrl) return;
    
    setIsLoading(true);
    setError(null);

    try {
      // Create a temporary anchor tag to trigger download
      const anchor = document.createElement('a');
      anchor.href = docUrl;
      anchor.download = `${title.replace(/\s+/g, '-')}${docUrl.includes('.pdf') ? '.pdf' : 
                       docUrl.includes('.pptx') ? '.pptx' : 
                       docUrl.includes('.doc') ? '.doc' : '.file'}`;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch (err) {
      setError('Failed to download file');
      console.error('Download error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!docUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      // For PDFs, try to open in new tab
      if (docUrl.includes('.pdf')) {
        window.open(docUrl, '_blank', 'noopener,noreferrer');
      } else {
        // For other file types, trigger download
        await handleDownload();
      }
    } catch (err) {
      setError('Failed to open file');
      console.error('View error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="group overflow-hidden rounded-3xl bg-background/60 ring-1 ring-border/60 transition hover:bg-background/70">
      <div className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white ring-1 ring-white/10 backdrop-blur">
          <MdTimer className="text-sm" />
          {formattedDate}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-balance font-[var(--font-display)] text-2xl leading-tight text-foreground">
            {title}
          </h3>
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="text-sm font-medium text-emerald-700 hover:text-emerald-600"
            >
              Learn more
            </Link>
          ) : null}
        </div>

        {docUrl ? (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-xl"
                onClick={handleViewPdf}
                disabled={isLoading}
              >
                <FileText className="mr-2 h-4 w-4" />
                {docUrl.includes(".pdf") ? "Resolutions" : "Open File"}
              </Button>
            </div>
            {error ? (
              <p className="text-sm text-red-600">{error}</p>
            ) : null}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="rounded-xl bg-emerald-700 hover:bg-emerald-600"
          >
            Register
          </Button>

          <p className="text-xs text-muted-foreground">
            Click register to submit company and delegate details.
          </p>
        </div>
      </div>

      <RegisterDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        eventTitle={title}
      />
    </article>
  );
};

export default EventCard;
