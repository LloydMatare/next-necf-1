import CreateButton from "@/components/createButton"
import { DatePicker } from "@/components/dateTimePicker"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Upload from "@/components/upload"
import ChairsList from "./ChairsList"
import getChairs from "@/lib/team/getChairs"
import getCores from "@/lib/team/getCores"
import getTeams from "@/lib/team/getTeams"
import CoreList from "./CoreList"
import TeamList from "./TeamList"

export async function TeamTab() {

    const chairs = await getChairs()
    const cores = await getCores()
    const teams = await getTeams()

    return (
        <div className="flex h-full">
            <Tabs defaultValue="title" orientation="vertical" className="flex w-full">
                <div className="w-64 border-r border-gray-200 pr-4">
                    <TabsList className="flex flex-col h-auto bg-green-600 text-white w-full p-1">
                        <TabsTrigger value="title" className="w-full justify-start">Title</TabsTrigger>
                        <TabsTrigger value="chairperson" className="w-full justify-start">Chairperson</TabsTrigger>
                        <TabsTrigger value="steering" className="w-full justify-start">Steering</TabsTrigger>
                        <TabsTrigger value="secretary" className="w-full justify-start">Secretariat</TabsTrigger>
                    </TabsList>
                </div>
                <div className="flex-1 pl-6">
                    <TabsContent value="title" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="subtitle">Subtitle</Label>
                                    <Input id="subtitle" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="chairperson" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Chairperson</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="pb-4 flex justify-end">
                                    <CreateButton link={'team/chair'} />
                                </div>
                                <ChairsList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="steering" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Steering</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="pb-4 flex justify-end">
                                    <CreateButton link={'team/core'} />
                                </div>
                                <CoreList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="secretary" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Secretary</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="pb-4 flex justify-end">
                                    <CreateButton link={'team'} />
                                </div>
                                <TeamList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
