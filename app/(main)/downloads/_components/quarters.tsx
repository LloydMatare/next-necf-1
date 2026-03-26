import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import DownloadCard from "./downloadCard"
import { connectToDB } from "@/lib/connectToDB"
import Research from "@/models/(downloads)/research"
import task from "@/models/(downloads)/task"
import Conference from "@/models/(downloads)/conference"
import Policy from "@/models/(downloads)/policy"
import Presentation from "@/models/(downloads)/presentation"
import Monthly from "@/models/(downloads)/monthly"
import Quarterly from "@/models/(downloads)/quarterly"


async function getResearches() {
    await connectToDB()
    const researches = await Research.find()
    return researches;
}

async function getTaskForces() {
    await connectToDB()
    const tasks = await task.find()
    return tasks;
}

async function getConferences() {
    await connectToDB()
    const conferences = await Conference.find()
    return conferences;
}
async function getPolicy() {
    await connectToDB()
    const policies = await Policy.find()
    return policies;
}

async function getPresentations() {
    await connectToDB()
    const presentations = await Presentation.find()
    return presentations;
}

async function getMonthly() {
    await connectToDB()
    const months = await Monthly.find()
    return months;
}

async function getQuarter() {
    await connectToDB()
    const quarters = await Quarterly.find()
    return quarters;
}

export async function Quarters() {

    const tasks = await getTaskForces()
    const researches = await getResearches()
    const conferences = await getConferences()
    const policies = await getPolicy()
    const presentations = await getPresentations()
    const months = await getMonthly()
    const quarters = await getQuarter()


    return (
        <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-2 gap-1 rounded-2xl bg-background/60 p-1 ring-1 ring-border/60 md:grid-cols-4">
                <TabsTrigger value="research">Research Reports</TabsTrigger>
                <TabsTrigger value="task">Task Force Reports</TabsTrigger>
                <TabsTrigger value="conference">Conference Reports</TabsTrigger>
                <TabsTrigger value="policy">Policy Analysis Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="research">
                <Card className="mt-5 rounded-3xl bg-background/60 ring-1 ring-border/60">
                    <CardHeader>
                        <CardTitle className="text-foreground">Research Reports</CardTitle>
                        <CardDescription>
                            Research publications and reports.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            researches.map((research: any) => (
                                <DownloadCard
                                    key={research.document}
                                    title={research.title}
                                    date={research.date}
                                    document={research.document}
                                />
                            ))
                        }
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="task">
                <Card className="mt-5 rounded-3xl bg-background/60 ring-1 ring-border/60">
                    <CardHeader>
                        <CardTitle className="text-foreground">Task Force Reports</CardTitle>
                        <CardDescription>
                            Task force reports and outputs.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {
                            tasks.map((task: any) => (
                                <DownloadCard
                                    title={task.title}
                                    date={task.date}
                                    document={task.document}
                                    key={task.document}
                                />
                            ))
                        }
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="conference">
                <Card className="mt-5 rounded-3xl bg-background/60 ring-1 ring-border/60">
                    <CardHeader>
                        <CardTitle className="text-foreground">Conference Reports</CardTitle>
                        <CardDescription>
                            Conference & Presentations
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="reports" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 gap-1 rounded-2xl bg-background/60 p-1 ring-1 ring-border/60">
                                <TabsTrigger value="reports">Reports</TabsTrigger>
                                <TabsTrigger value="presentations">Presentations</TabsTrigger>
                            </TabsList>

                            <TabsContent value="reports">
                                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {conferences.map((research: any) => (
                                        <DownloadCard
                                            title={research.title}
                                            date={research.date}
                                            document={research.document}
                                            key={research.document}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="presentations">
                                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {presentations.map((research: any) => (
                                        <DownloadCard
                                            title={research.title}
                                            date={research.date}
                                            document={research.document}
                                            key={research.document}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="policy">
                <Card className="mt-5 rounded-3xl bg-background/60 ring-1 ring-border/60">
                    <CardHeader>
                        <CardTitle className="text-foreground">Policy Analysis Reports</CardTitle>
                        <CardDescription>
                            Policy Analysis Reports
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="analysis" className="w-full">
                            <TabsList className="grid w-full grid-cols-1 gap-1 rounded-2xl bg-background/60 p-1 ring-1 ring-border/60 md:grid-cols-3">
                                <TabsTrigger value="analysis">Policy Analysis</TabsTrigger>
                                <TabsTrigger value="monthly">Monthly Bulletins</TabsTrigger>
                                <TabsTrigger value="quarterly">Quarterly Analysis</TabsTrigger>
                            </TabsList>

                            <TabsContent value="analysis">
                                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {policies.map((research: any) => (
                                        <DownloadCard
                                            title={research.title}
                                            date={research.date}
                                            document={research.document}
                                            key={research.document}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="monthly">
                                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {months.map((research: any) => (
                                        <DownloadCard
                                            title={research.title}
                                            date={research.date}
                                            document={research.document}
                                            key={research.document}
                                        />
                                    ))}
                                </div>
                            </TabsContent>

                            <TabsContent value="quarterly">
                                <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {quarters.map((research: any) => (
                                        <DownloadCard
                                            title={research.title}
                                            date={research.date}
                                            document={research.document}
                                            key={research.document}
                                        />
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
