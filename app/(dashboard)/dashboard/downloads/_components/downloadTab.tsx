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
import Upload from "@/components/upload"
import { ReportTab } from "./reportTabs"
import DownloadList from "./downloadList"
import CreateButton from "@/components/createButton"

export function DownloadTab() {
    return (
        <div className="flex h-full">
            <Tabs defaultValue="download" orientation="vertical" className="flex w-full">
                <div className="w-64 border-r border-gray-200 pr-4">
                    <TabsList className="flex flex-col h-auto bg-green-600 text-white w-full p-1">
                        <TabsTrigger value="download" className="w-full justify-start">Downloads</TabsTrigger>
                        <TabsTrigger value="report" className="w-full justify-start">Reports</TabsTrigger>
                    </TabsList>
                </div>
                <div className="flex-1 pl-6">
                    <TabsContent value="download" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Downloads</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="">
                                    <CreateButton link='downloads' />
                                </div>
                                <DownloadList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="report" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Reports</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <ReportTab />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
