'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRouter } from 'next/navigation';
import Image from "next/image";

function ImageSlider({ slides }: { slides: { image: string, title: string, description: string }[] }) {
    console.log("Image data :", { slides });
    const router = useRouter()

    const navigateToNews = (slide: {
        image: string;
        title: string;
        description: string;
        content?: string; // Optional field
        author?: string;  // Optional field
        date?: string;    // Optional field
    }) => {
        const { image, title, description, content = '', author = '', date = '' } = slide;

        router.push(`/news/${encodeURIComponent(title)}?image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}&content=${encodeURIComponent(content)}&author=${encodeURIComponent(author)}&date=${encodeURIComponent(date)}`);
    };


    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation
        >
            {
                slides?.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <button
                          type="button"
                          className="relative block w-full text-left"
                          aria-label={slide?.title ? `Open news: ${slide.title}` : "Open news"}
                          onClick={() =>
                            navigateToNews({
                              image: slide.image,
                              title: slide.title,
                              description: slide.description,
                            })
                          }
                        >
                          <div className="relative min-h-[72vh] w-full bg-black md:min-h-[80vh]">
                            {slide?.image ? (
                              <Image
                                src={slide.image}
                                alt={slide?.title || "Featured"}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover"
                              />
                            ) : (
                              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
                            <div className="absolute inset-0">
                              <div className="flex h-full w-full items-end px-4 pb-12 md:px-8 md:pb-16 lg:px-12">
                                <div className="max-w-2xl text-white">
                                  <p className="text-xs font-semibold tracking-widest text-white/80">
                                    FEATURED
                                  </p>
                                  <h2 className="mt-2 text-balance font-[var(--font-display)] text-4xl leading-[1.05] md:text-6xl">
                                    {slide.title}
                                  </h2>
                                  <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
                                    {slide.description}
                                  </p>
                                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/90">
                                    Read more
                                    <span className="inline-block h-px w-10 bg-white/40" />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default ImageSlider
