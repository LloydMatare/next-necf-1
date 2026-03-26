import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { GalleryHorizontalEnd, LayoutGrid, Mail, CalendarDays, Users, Sparkles } from "lucide-react"
import TaskForces from "./taskforce"
import AdhocList from "./adhoclist"
import AnnualList from "./anuual"
import Gallery from "./gallery"
import NewsLetter from "./newsletter"




export function ProgramTab() {
    return (
        <section className="overflow-hidden rounded-3xl bg-background/70 p-6 ring-1 ring-border/60 backdrop-blur md:p-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                        PROGRAMMES
                    </p>
                    <h2 className="mt-2 text-balance font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                        Explore Our Work
                    </h2>
                </div>
                <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                    Browse annual programmes, task forces, adhoc initiatives, and related
                    media.
                </p>
            </div>

            <Tabs defaultValue="program" className="mt-8 w-full">
            <TabsList
                variant="line"
                className="w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto border-b border-border/60 bg-transparent p-0 pb-2"
            >
                <TabsTrigger value="program" className="h-10 px-4 text-sm">
                    <LayoutGrid className="h-4 w-4 opacity-70" />
                    Programmes
                </TabsTrigger>
                <TabsTrigger value="gallery" className="h-10 px-4 text-sm">
                    <GalleryHorizontalEnd className="h-4 w-4 opacity-70" />
                    Gallery
                </TabsTrigger>
                <TabsTrigger value="news" className="h-10 px-4 text-sm">
                    <Mail className="h-4 w-4 opacity-70" />
                    Newsletter
                </TabsTrigger>
            </TabsList>

            <TabsContent value="program" className="mt-6">
                <Tabs defaultValue="annual" className="w-full">
                    <TabsList
                        variant="line"
                        className="w-full flex-nowrap items-center justify-start gap-2 overflow-x-auto border-b border-border/60 bg-transparent p-0 pb-2"
                    >
                        <TabsTrigger value="annual" className="h-10 px-4 text-sm">
                            <CalendarDays className="h-4 w-4 opacity-70" />
                            Annual
                        </TabsTrigger>
                        <TabsTrigger value="task" className="h-10 px-4 text-sm">
                            <Users className="h-4 w-4 opacity-70" />
                            Task Forces
                        </TabsTrigger>
                        <TabsTrigger value="adhoc" className="h-10 px-4 text-sm">
                            <Sparkles className="h-4 w-4 opacity-70" />
                            Adhoc
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="annual" className="mt-6">
                        <div className="rounded-3xl bg-background/60 p-6 ring-1 ring-border/60">
                            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                                ANNUAL PROGRAMMES
                            </p>
                            <p className="mt-2 text-balance font-[var(--font-display)] text-2xl text-foreground">
                                Annual Programmes
                            </p>
                            <div className="mt-6">
                                <AnnualList />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="task" className="mt-6">
                        <div className="rounded-3xl bg-background/60 p-6 ring-1 ring-border/60">
                            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                                TASK FORCES
                            </p>
                            <p className="mt-2 text-balance font-[var(--font-display)] text-2xl text-foreground">
                                Task Forces
                            </p>
                            <div className="mt-6">
                                <TaskForces />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="adhoc" className="mt-6">
                        <div className="rounded-3xl bg-background/60 p-6 ring-1 ring-border/60">
                            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
                                ADHOC PROGRAMMES
                            </p>
                            <p className="mt-2 text-balance font-[var(--font-display)] text-2xl text-foreground">
                                Adhoc Programmes
                            </p>
                            <div className="mt-6">
                                <AdhocList />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
                <div className="rounded-3xl bg-background/60 p-6 ring-1 ring-border/60">
                    <Gallery />
                </div>
            </TabsContent>

            <TabsContent value="news" className="mt-6">
                <div className="rounded-3xl bg-background/60 p-6 ring-1 ring-border/60">
                    <NewsLetter />
                </div>
            </TabsContent>
        </Tabs>
        </section>
    )
}
