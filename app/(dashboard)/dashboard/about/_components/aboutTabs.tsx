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
import TopList from "./topList"
import AboutList from "./aboutList"
import SecondList from "./secondList"
import GalleryList from "./galleryList"
import CreateButton from "@/components/createButton"

export function AboutTab() {
    return (
        <div className="flex h-full">
            <Tabs defaultValue="top" orientation="vertical" className="flex w-full">
                <div className="w-64 border-r border-gray-200 pr-4">
                    <TabsList className="flex flex-col h-auto bg-green-600 text-white w-full p-1">
                        <TabsTrigger value="top" className="w-full justify-start">Top</TabsTrigger>
                        <TabsTrigger value="main" className="w-full justify-start">Main</TabsTrigger>
                        <TabsTrigger value="about" className="w-full justify-start">About</TabsTrigger>
                        <TabsTrigger value="gallery" className="w-full justify-start">Gallery</TabsTrigger>
                    </TabsList>
                </div>
                <div className="flex-1 pl-6">
                    <TabsContent value="top" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Top</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    {/* <Label htmlFor="title">Title</Label>
                                    <Input id="title" className="outline-green-600" /> */}
                                    <TopList />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="main" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Main</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <SecondList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="about" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>About</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <AboutList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="gallery" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Gallery</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CreateButton link='about/gallery' />
                                <GalleryList />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
