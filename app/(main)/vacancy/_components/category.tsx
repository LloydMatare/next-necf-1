import React from 'react'
import { BsBriefcaseFill } from "react-icons/bs";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { BsPersonFillUp } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { SiGooglemarketingplatform } from "react-icons/si";


interface CategoryProps {
    children: React.ReactNode,
    text: string
}

const CategoryCard = ({ children, text }: CategoryProps) => {
    return (
        <div className="group flex min-h-44 w-full flex-col items-center justify-center gap-4 rounded-3xl bg-background/60 p-6 text-center ring-1 ring-border/60 transition hover:bg-background/70">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-700/10 text-emerald-800 ring-1 ring-emerald-600/20 transition group-hover:scale-[1.02]">
                <div className="text-3xl">{children}</div>
            </div>
            <p className="text-sm font-semibold text-foreground">{text}</p>
        </div>
    )
}

function Category() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <CategoryCard text='Business Management'>
                <BsBriefcaseFill />
            </CategoryCard>
            <CategoryCard text='Accountants'>
                <FaMoneyBillWheat />
            </CategoryCard>
            <CategoryCard text='Economists'>
                <BsPersonFillUp />
            </CategoryCard>
            <CategoryCard text='I.C.T'>
                <GrTechnology />
            </CategoryCard>
            <CategoryCard text='Secretaries'>
                <SiGooglemarketingplatform />
            </CategoryCard>
        </div>
    )
}

export default Category
