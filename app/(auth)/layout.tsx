import Image from "next/image"
import { ShieldCheck, Sparkles, LockKeyhole } from "lucide-react"

export const dynamic = "force-dynamic"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--muted))_45%,hsl(var(--background))_100%)] px-4 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary))_0%,transparent_55%)] opacity-15 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[-6rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent))_0%,transparent_60%)] opacity-25 blur-2xl"
      />

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 overflow-hidden border bg-background/70 backdrop-blur-sm md:grid-cols-2">
        <section className="relative hidden border-r p-10 md:block">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--background))_95%)]"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden border bg-muted">
                <Image
                  src="/necf-logo.png"
                  alt="NECF"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-medium tracking-wide">NECF</div>
                <div className="text-xs text-muted-foreground">Admin Console</div>
              </div>
            </div>

            <h1 className="mt-10 text-balance text-3xl leading-[1.05] tracking-tight [font-family:var(--font-display)]">
              Manage content with a clean, secure workflow.
            </h1>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Sign in to update pages, downloads, programmes, vacancies, and
              site content without touching code.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-start gap-3 border bg-muted/40 p-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-foreground/80" />
                <div>
                  <div className="font-medium text-foreground">Protected</div>
                  <div className="text-xs text-muted-foreground">
                    Dashboard routes require an authenticated session.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 border bg-muted/40 p-3">
                <LockKeyhole className="mt-0.5 h-4 w-4 text-foreground/80" />
                <div>
                  <div className="font-medium text-foreground">Private</div>
                  <div className="text-xs text-muted-foreground">
                    Credentials are stored hashed in MongoDB.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 border bg-muted/40 p-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-foreground/80" />
                <div>
                  <div className="font-medium text-foreground">Fast</div>
                  <div className="text-xs text-muted-foreground">
                    Lightweight UI focused on the work you do daily.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center p-6 md:p-10">
          <div className="w-full">
            <div className="mb-6 flex items-center gap-3 md:hidden">
              <div className="relative h-10 w-10 overflow-hidden border bg-muted">
                <Image src="/necf-logo.png" alt="NECF" fill className="object-contain p-1.5" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-medium tracking-wide">NECF</div>
                <div className="text-xs text-muted-foreground">Admin Console</div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">{children}</div>
          </div>
        </section>
      </div>
    </main>
  )
}
