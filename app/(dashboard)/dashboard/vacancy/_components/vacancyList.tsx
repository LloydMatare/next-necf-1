import React from 'react'
import VacanciesCard from './vacanciesCard'
import { connectToDB } from '@/lib/connectToDB'
import Vacancy from '@/models/vacancy'

export async function loadVacancy() {
    await connectToDB()
    const vacancies = await Vacancy.find().limit(50)
    return vacancies
}


//@ts-ignore
async function VacancyList() {
    const vacancies = await loadVacancy()
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex font-bold items-center justify-between">
                <p className="">Name</p>
                <p className="">Job Type</p>
                <p className="">Due Date</p>
            </div>
            {
                vacancies.map((vacancy: any) => {
                    return (
                        <VacanciesCard
                            key={vacancy.id}
                            link={vacancy.id}
                            name={vacancy.name}
                            jobType={vacancy.jobType}
                            dueDate={vacancy.dueDate}
                        />
                    )
                })
            }
        </div>
    )
}

export default VacancyList