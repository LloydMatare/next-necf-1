import Image from "next/image";

import { Spinner } from "@/components/ui/spinner";

type LoadingScreenProps = {
  label?: string;
};

export default function LoadingScreen({ label = "Loading" }: LoadingScreenProps) {
  return (
    <div className="min-h-[70vh] w-full">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-20">
        <div className="relative mb-6 size-16 overflow-hidden rounded-full ring-1 ring-border/60">
          <Image
            src="/necf-logo.png"
            alt="NECF"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Spinner className="size-5 text-foreground/70" />
          <span>{label}</span>
        </div>
        <div className="mt-8 h-px w-56 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      </div>
    </div>
  );
}

