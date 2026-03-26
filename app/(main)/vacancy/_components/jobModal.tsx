import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function JobModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-11 rounded-xl bg-emerald-700 hover:bg-emerald-600">
                    Apply
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[min(96vw,560px)] rounded-3xl bg-background/90 p-0 ring-1 ring-border/60 backdrop-blur">
                <DialogHeader>
                    <div className="border-b border-border/60 bg-[radial-gradient(900px_420px_at_0%_0%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_420px_at_100%_0%,rgba(163,230,53,0.14),transparent_55%)] px-6 py-6">
                        <DialogTitle className="font-[var(--font-display)] text-2xl">
                            Send Application
                        </DialogTitle>
                    <DialogDescription>
                        Upload your CV and send to apply
                    </DialogDescription>
                    </div>
                </DialogHeader>
                <div className="space-y-4 px-6 py-6">
                    <div className="space-y-2">
                        <Label htmlFor="file">Upload CV</Label>
                        <Input id="file" type="file" className="rounded-xl" />
                        <p className="text-xs text-muted-foreground">
                            Accepted formats depend on your browser. PDF is recommended.
                        </p>
                    </div>
                </div>
                <DialogFooter className="gap-2 px-6 pb-6 sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="outline" className="h-11 rounded-xl">
                            Close
                        </Button>
                    </DialogClose>
                    <Button className="h-11 rounded-xl bg-emerald-700 hover:bg-emerald-600">
                        Send Application
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
