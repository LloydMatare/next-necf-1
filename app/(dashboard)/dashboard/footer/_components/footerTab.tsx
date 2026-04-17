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

export function FooterTab() {
    return (
        <div className="flex h-full">
            <Tabs defaultValue="link" orientation="vertical" className="flex w-full">
                <div className="w-64 border-r border-gray-200 pr-4">
                    <TabsList className="flex flex-col h-auto bg-green-600 text-white w-full p-1">
                        <TabsTrigger value="link" className="w-full justify-start">Links</TabsTrigger>
                        <TabsTrigger value="contact" className="w-full justify-start">Contact</TabsTrigger>
                    </TabsList>
                </div>
                <div className="flex-1 pl-6">
                    <TabsContent value="link" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Links</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="link">Link</Label>
                                    <Input id="link" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="bg-green-600 hover:bg-green-500">Save changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="contact" className="mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact</CardTitle>
                                <CardDescription>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="telephone">Telephone</Label>
                                    <Input id="telephone" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="website">Website</Label>
                                    <Input id="website" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="bg-green-600 hover:bg-green-500">Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
