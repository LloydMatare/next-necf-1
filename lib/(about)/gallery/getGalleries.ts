import { connectToDB } from "@/lib/connectToDB";
import Gallery from "@/models/(programs)/gallery";

export default async function getGalleries() {
    await connectToDB()
    const gallery = await Gallery.find().select({ image: 1, title: 1 }).lean();
    // Next server->client boundaries require plain JSON values (no ObjectId/Date).
    return gallery.map((g: any) => ({
        id: String(g._id),
        image: g.image,
        title: g.title ?? "",
    }));
}
