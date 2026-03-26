import React from 'react'
import Slider from './slider'
import getTestimonials from '@/lib/(home)/testimonial/getTestimonials'

async function Testimonial() {

    const data = await getTestimonials()

    console.log("Testimonials", data);

    const plain = (data || []).map((t: any) => ({
        title: t?.title ?? "",
        name: t?.name ?? "",
        company: t?.company ?? "",
        position: t?.position ?? "",
    }));

    return (
        <div className="">
            <Slider
                data={plain}
            />
        </div>
    )
}

export default Testimonial
