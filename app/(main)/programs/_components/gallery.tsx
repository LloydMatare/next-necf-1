import getGalleries from '@/lib/(programs)/gallery/getGalleries'
import PaginatedProgramGallery from './paginatedProgramGallery'


async function Gallery() {

    const galleries = await getGalleries()

    return (
        <div className="space-y-6">
            <div>
                <p className="text-xs font-semibold tracking-widest text-emerald-900/80">GALLERY</p>
                <h3 className="mt-2 font-[var(--font-display)] text-2xl text-foreground md:text-3xl">
                    Programme Highlights
                </h3>
            </div>
            <PaginatedProgramGallery items={galleries as any} />
        </div>
    )
}

export default Gallery
