"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { User } from 'lucide-react';

function Slider({ data }: any) {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
        >
            {
                data?.map((data: any, index: any) => (
                    <SwiperSlide

                        key={index}
                    >
                        <section className="rounded-3xl bg-background/70 p-6 text-center ring-1 ring-border/60 backdrop-blur md:p-10">
                            <figure className="mx-auto max-w-3xl">
                                <svg className="mx-auto mb-4 h-12 text-foreground/25" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-balance font-[var(--font-display)] text-2xl text-foreground md:text-3xl">
                                        {data.title}
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-background/60 px-4 py-2 ring-1 ring-border/60">
                                        <User className='h-4 w-4' />
                                        <span className="text-sm font-medium text-foreground">
                                            {data.name}
                                        </span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        {data.company}
                                    </span>
                                </figcaption>
                            </figure>
                        </section>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default Slider
