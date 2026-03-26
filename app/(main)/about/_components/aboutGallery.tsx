import getGalleries from '@/lib/(about)/gallery/getGalleries'
import PaginatedGallery from './paginatedGallery'
import { AboutModal } from './aboutModal'



async function AboutGallery() {
    const galleries = await getGalleries()


    return (
        <div className="space-y-6">
            <div className="flex items-end justify-between gap-6">
                <div>
                    <p className="text-xs font-semibold tracking-widest text-emerald-900/80">GALLERY</p>
                    <h2 className="mt-2 font-[var(--font-display)] text-3xl text-foreground md:text-4xl">
                        Moments from NECF
                    </h2>
                </div>
                <p className="hidden max-w-sm text-right text-sm text-muted-foreground md:block">
                    A snapshot of dialogues, programmes, and partnerships across the country.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-12">
                <div className="md:col-span-5">
                    <AboutModal
                        src="/ibc2.JPG"
                        title="NECF Gallery"
                        triggerVariant="featured"
                        triggerKicker="Featured"
                        triggerSubtitle="Click any image to view"
                    />
                </div>

                <div className="md:col-span-7">
                    <PaginatedGallery items={galleries as any} />
                </div>
            </div>
        </div>
    )
}

export default AboutGallery
